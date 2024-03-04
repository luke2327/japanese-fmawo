"use client";

/**
 * 이 파일은 React와 TypeScript를 사용하여 블로그 게시물을 등록하는 페이지를 구현합니다.
 * 다양한 UI 컴포넌트를 사용하며, 블로그 클라이언트에서 데이터를 가져오고 추가하는 함수를 사용합니다.
 * react-hook-form과 zod를 사용하여 폼 유효성 검사를 수행하고, 사용자가 입력한 데이터를 기반으로 새 블로그 게시물을 생성합니다.
 */

import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn, getUUID } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import {
  addPosting,
  getFormattedMDX,
  getPostings,
  translate,
} from "@/app/db/blog-client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PostingInsert } from "@/interface/blog.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import * as z from "zod";
import { LucideX } from "lucide-react";
import useSupervisorInfo from "@/hooks/useSupervisorInfo";
import useUserInfo from "@/hooks/useUserInfo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const formSchema = z.object({
  titleKo: z.string().min(1),
  titleJa: z.string().min(1),
  titleEn: z.string().min(1),
  writer: z.string().min(1),
  worker: z.string().min(1),
  publishedAt: z.date(),
  contents: z.string().min(1),
});
const thumbnailPrefix = "http://storage.fmawo.com/proverb/thumbnail";

const RegistrationPage: React.FC = () => {
  const { role } = useUserInfo();
  const { mNo } = useUserInfo();
  const { allMemberInfo } = useSupervisorInfo();
  const [file, setFile] = useState<File | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      titleKo: "",
      titleJa: "",
      titleEn: "",
      writer: "Maria",
      worker: "",
      publishedAt: new Date(),
      contents: "",
    },
  });

  function reset() {
    form.reset();
    thumbnailReset();
  }

  function thumbnailReset() {
    setThumbnailData("");

    if (inputFileRef.current) {
      (inputFileRef.current as HTMLInputElement).files = null;
      (inputFileRef.current as HTMLInputElement).value = "";
    }
  }

  function onSubmitAfter() {
    // 등록완료 토스트 메세지
    toast({
      title: "登録完了",
      duration: 3000,
    });

    // 블로그 포스팅 정보 불러오기
    initialize();
    // 버튼 로딩 비활성화
    setSubmitted(false);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const slug = values.titleEn
      .toLowerCase()
      .replace(/,/g, " ")
      .replace(/\s\s/g, " ")
      .split(" ")
      .join("-");

    let thumbnailUrl = "";

    if (file) {
      const uuid = getUUID();
      const fileExt = file.name.split(".")[1];
      const response = await fetch(`/api/proverb/upload-thumbnail`, {
        headers: { "Content-Type": "image/jpeg" },
        method: "POST",
        body: JSON.stringify({
          uuid,
          slug,
          fileExt,
          contentType: `image/${fileExt === "jpg" ? "jpeg" : fileExt}`,
        }),
      });

      const { url, fields } = await response.json();
      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append("file", file);

      await fetch(url, { method: "POST", body: formData });

      thumbnailUrl = thumbnailPrefix + `/${slug}/${uuid}.${fileExt}`;
    }

    let mdx = "";

    try {
      mdx = getFormattedMDX({
        contents: values.contents,
        slug,
        title: {
          titleEnglish: values.titleEn,
          titleJapanese: values.titleJa,
          titleKorean: values.titleKo,
        },
        thumbnailUrl,
      }) as string;
    } catch (e) {
      console.error(e);
    }

    const payload: PostingInsert = {
      titleKo: values.titleKo,
      titleEn: values.titleEn,
      titleJa: values.titleJa,
      writer: values.writer,
      worker: values.worker,
      check: false,
      workMember: mNo,
      contents: mdx,
      publishedAt: format(values.publishedAt as Date, "yyyy-MM-dd HH:mm:SS"),
      slug,
      postIndex: postings.length + 1,
      thumbnailUrl,
    };

    console.log(payload);

    await addPosting(payload);

    // 리셋
    reset();

    // 등록 후
    onSubmitAfter();
  }

  const inputFileRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [postings, setPostings] = useState<
    Awaited<ReturnType<typeof getPostings>>
  >([]);
  const [thumbnailData, setThumbnailData] = useState<string>();
  const { toast } = useToast();

  const initialize = async () => {
    const postings = await getPostings();

    setPostings(postings);
  };

  useEffect(() => {
    initialize();
  }, []);

  const translateTitleEnglish = async () => {
    const translatedText = await translate({
      text: form.getValues("titleJa"),
      target: "en",
      source: "ja",
    });

    form.setValue("titleEn", translatedText);
  };

  const onChangePicture = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];

      if (file) {
        setFile(file);
        const reader = new FileReader();

        reader.onload = (e) => {
          setThumbnailData(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [setThumbnailData]
  );

  return (
    <>
      <h1 className="mb-2 text-lg">新しい投稿（{postings.length + 1}番目）</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-4">
          <FormField
            control={form.control}
            name="titleKo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タイトル (韓国語)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription className="dark:text-neutral-400">
                  例：「한국의 속담」
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="titleJa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>タイトル (日本語)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription className="dark:text-neutral-400">
                  例：「韓国のことわざ」
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="titleEn"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  タイトル (英語)
                  <Button
                    disabled={form.getValues("titleJa") === ""}
                    type="button"
                    className="py-0 text-[12px] h-5 px-2"
                    onClick={translateTitleEnglish}>
                    翻訳
                  </Button>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription className="dark:text-neutral-400">
                  例：「Korean proverb」
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-12 sm:col-span-6">
              <FormField
                control={form.control}
                name="writer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>投稿者</FormLabel>
                    <FormControl>
                      <Input {...field} defaultValue={field.value} />
                    </FormControl>
                    <FormDescription className="dark:text-neutral-400">
                      例：「Maria」
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <FormField
                control={form.control}
                name="worker"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>作業者</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="作業者" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {allMemberInfo.map((member) => (
                          <SelectItem
                            key={member.mNo}
                            value={member.mNo.toString()}
                            className="font-skybori flex">
                            {member.id}{" "}
                            <span className="text-neutral-500 text-xs self-end">
                              ({member.role})
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={form.control}
            name="publishedAt"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col justify-center gap-2">
                  <FormLabel>投稿日</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger
                        asChild
                        className="mt-1 mb-4 dark:bg-[#111010]">
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] justify-start text-left font-normal mb-0",
                            !field.value && "text-muted-foreground"
                          )}>
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "yyyy-MM-dd")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          id="publishedAt"
                          mode="single"
                          initialFocus
                          {...field}
                          onSelect={field.onChange}
                          selected={field.value}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                </div>

                <FormDescription className="dark:text-neutral-400">
                  最近投稿日 {postings[0]?.publishedAt.split(" ")[0]}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Label>イメージ</Label>
            <Input
              ref={inputFileRef}
              onChange={onChangePicture}
              name="thumbnail"
              type="file"
              accept="image/*, video/*"
            />
            {thumbnailData && (
              <div className="mt-1 aspect-square w-full border dark:border-neutral-600 border-neutral-400 p-2 max-w-[200px] rounded-md flex flex-col items-end">
                <Image
                  src={thumbnailData}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="h-full w-full max-w-[200px] max-h-[200px] rounded-md object-cover"
                />
                <button
                  type="button"
                  name="image-remove-button"
                  className="pt-1"
                  onClick={thumbnailReset}>
                  <LucideX
                    strokeWidth={1}
                    className="cursor-pointer text-neutral-400 hover:text-neutral-600 transition-colors dark:text-neutral-400 dark:hover:text-neutral-200 "
                  />
                </button>
              </div>
            )}
          </div>

          <FormField
            control={form.control}
            name="contents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>内容</FormLabel>
                <FormControl>
                  <Textarea className="mt-1 h-80" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-end justify-end gap-2">
            <Button className="w-20" type="submit" disabled={submitted}>
              保存
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RegistrationPage;
