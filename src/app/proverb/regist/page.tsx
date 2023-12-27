"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
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
import { PostingInsert } from "@/interface/blog.interface";

const RegistrationPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [titleKo, setTitleKo] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [titleJa, setTitleJa] = useState("");
  const [writer, setWriter] = useState("Maria");
  const [contents, setContents] = useState("");
  const [useParse, setUseParse] = useState(false);
  const [publishedAt, setPublishedAt] = useState<Date>();
  const [postings, setPostings] = useState<
    Awaited<ReturnType<typeof getPostings>>
  >([]);
  const { toast } = useToast();

  const fetch = async () => {
    const postings = await getPostings();

    setPostings(postings);
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleTitleKoreanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleKo(e.target.value);
  };

  const handleTitleEnglishChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleEn(e.target.value);
  };

  const handleTitleJapaneseChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitleJa(e.target.value);
  };

  const handleWriterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
  };

  const handleContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const handleUseParseChange = (e: boolean) => {
    setUseParse(e);
  };

  const translateTitleEnglish = async () => {
    const translatedText = await translate({
      text: titleJa,
      target: "en",
      source: "ja",
    });

    setTitleEn(translatedText);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    const slug = titleEn
      .toLowerCase()
      .replace(/,/g, " ")
      .replace(/\s\s/g, " ")
      .split(" ")
      .join("-");
    let mdx = "";

    try {
      mdx = getFormattedMDX({
        contents,
        slug,
        title: {
          titleEnglish: titleEn,
          titleJapanese: titleJa,
          titleKorean: titleKo,
        },
      }) as string;
    } catch (e) {
      console.error(e);
    }

    const payload: PostingInsert = {
      titleKo,
      titleEn,
      titleJa,
      writer,
      contents: mdx,
      publishedAt: format(publishedAt as Date, "yyyy-MM-dd HH:mm:SS"),
      slug,
      postIndex: postings.length + 1,
      thumbnailUrl: `/images/${slug}/picture.jpg`,
    };

    await addPosting(payload);

    toast({
      title: "登録完了",
      description: titleJa,
      duration: 3000,
    });

    fetch();

    setSubmitted(false);
    setTitleKo("");
    setTitleEn("");
    setTitleJa("");
    setWriter("Maria");
    setContents("");
    setPublishedAt(undefined);
    setUseParse(false);
  };

  return (
    <section className="font-raleway">
      <h1 className="mb-2 text-lg">新しい投稿（{postings.length + 1}番目）</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titleKorean">タイトル (韓国語)</label>
        <Input
          type="text"
          id="titleKorean"
          value={titleKo}
          onChange={handleTitleKoreanChange}
          className="mt-1 mb-4"
        />
        <div>
          <label htmlFor="titleJapanese">タイトル (日本語)</label>
          <Input
            type="text"
            id="titleJapanese"
            value={titleJa}
            onChange={handleTitleJapaneseChange}
            className="mt-1 mb-4"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <label htmlFor="titleEnglish">タイトル (英語)</label>
            <Button
              type="button"
              className="py-0 text-[12px] h-5 px-2"
              onClick={translateTitleEnglish}>
              翻訳
            </Button>
          </div>
          <Input
            type="text"
            id="titleEnglish"
            value={titleEn}
            onChange={handleTitleEnglishChange}
            className="mt-1 mb-4"
          />
        </div>
        <div>
          <label htmlFor="writer">投稿者</label>
          <Input
            type="text"
            id="writer"
            value={writer}
            onChange={handleWriterChange}
            className="mt-1 mb-4"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <label htmlFor="publishedAt">投稿日</label>
            <p className="text-neutral-400 text-[12px]">
              最近投稿日 {postings[0]?.publishedAt.split(" ")[0]}
            </p>
          </div>
          <Popover>
            <PopoverTrigger asChild className="mt-1 mb-4 dark:bg-[#111010]">
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !publishedAt && "text-muted-foreground"
                )}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {publishedAt ? (
                  format(publishedAt, "yyyy-MM-dd")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                id="publishedAt"
                mode="single"
                selected={publishedAt}
                onSelect={setPublishedAt}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label htmlFor="contents">内容</label>
          <Textarea
            id="contents"
            value={contents}
            onChange={handleContentsChange}
            className="mt-1 h-80"
          />
        </div>

        <div className="mt-2 flex items-center justify-end gap-2">
          <Checkbox
            id="useParse"
            checked={useParse}
            onCheckedChange={handleUseParseChange}
          />
          <label
            htmlFor="useParse"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            テンプレートを使用する
          </label>
          <Button className="w-20" type="submit" disabled={submitted}>
            保存
          </Button>
        </div>
      </form>
    </section>
  );
};

export default RegistrationPage;
