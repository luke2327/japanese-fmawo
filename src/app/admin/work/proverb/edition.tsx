"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BlogPost, PostingEdit } from "@/interface/blog.interface";
import {
  editPosting,
  getFormattedMDX,
  getWorkInfo,
  translate,
} from "@/app/db/blog-client";
import { ChevronLeft, LucideX, SaveIcon, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { makeSlug, uploadThumbnail } from "@/lib/utils";
import clsx from "clsx";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useUserInfo from "@/hooks/useUserInfo";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import DownloadLink from "@/components/download-link";

type AdminPostEditionProps = {
  post: BlogPost;
  onReleaseSelectedPost: () => void;
};

const thumbnailPrefix = "http://storage.fmawo.com/proverb/thumbnail";

export default function AdminPostEdition({
  post,
  onReleaseSelectedPost,
}: AdminPostEditionProps) {
  const { toast } = useToast();
  const [mutation, setMutation] = useState(post);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { setWorkInfo } = useUserInfo();

  const onChangePicture = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setFile(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        onChangeMutation(e.target?.result as string, "thumbnailUrl");
      };
      reader.readAsDataURL(file);
    }
  };

  function thumbnailReset() {
    onChangeMutation("", "thumbnailUrl");

    if (inputFileRef.current) {
      (inputFileRef.current as HTMLInputElement).files = null;
      (inputFileRef.current as HTMLInputElement).value = "";
    }
  }

  const onChangeMutation = (value: string, key: string) => {
    setMutation({ ...mutation, [key]: value });
  };

  const translateTitleEnglish = async () => {
    const translatedText = await translate({
      text: mutation.titleJa,
      target: "en",
      source: "ja",
    });

    setMutation((prev) => ({ ...prev, titleEn: translatedText }));
  };

  const updatePost = async (send = false) => {
    setLoading(true);
    setProgress(10);

    const slug = makeSlug(mutation.titleEn);

    let thumbnailUrl = mutation.thumbnailUrl;
    let contents = mutation.contents;
    let check = false;

    if (send) {
      check = true;

      // 새로운 파일이 업로드 되었을 경우
      if (file) {
        thumbnailUrl = await uploadThumbnail(file, slug, thumbnailPrefix);
        setProgress(30);
      }
      try {
        contents = getFormattedMDX({
          contents,
          thumbnailUrl,
          title: {
            titleEnglish: mutation.titleEn,
            titleJapanese: mutation.titleJa,
            titleKorean: mutation.titleKo,
          },
        }) as string;

        onChangeMutation(contents, "contents");

        setProgress(50);
      } catch (e) {
        console.error(e);
      }
    }

    const payload: PostingEdit = {
      postNo: mutation.postNo,
      titleKo: mutation.titleKo,
      titleEn: mutation.titleEn,
      titleJa: mutation.titleJa,
      workMember: mutation.workMember,
      contents,
      thumbnailUrl,
      check,
    };

    await editPosting(payload);
    setProgress(70);
    console.log(7);
    setWorkInfo(await getWorkInfo());
    console.log(10);
    setProgress(100);
    await new Promise((resolve) => setTimeout(resolve, 500));
    onReleaseSelectedPost();
    setLoading(false);
    toast({
      title: "更新完了",
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {post && (
        <div className="flex justify-between items-center">
          <Button
            variant={"ghost"}
            className="mb-4 flex pl-1.5"
            onClick={onReleaseSelectedPost}>
            <ChevronLeft className="w-6 h-6" />
            戻る
          </Button>
          <HeaderActions
            updatePost={updatePost}
            loading={loading}
            progress={progress}
          />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titleKo">タイトル（韓国語）</Label>
          <Input
            id="titleKo"
            className="w-full"
            value={mutation.titleKo}
            onChange={(e) => onChangeMutation(e.target.value, "titleKo")}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titleJa">タイトル（日本語）</Label>
          <Input
            id="titleJa"
            value={mutation.titleJa}
            onChange={(e) => onChangeMutation(e.target.value, "titleJa")}
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="titleEn">
            タイトル（英語）
            <Button
              disabled={mutation.titleJa === ""}
              type="button"
              className="py-0 text-[12px] h-5 px-2"
              onClick={translateTitleEnglish}>
              翻訳
            </Button>
          </Label>
          <Input
            id="titleEn"
            value={mutation.titleEn}
            onChange={(e) => onChangeMutation(e.target.value, "titleEn")}
          />
        </div>
        <div>
          <Label>イメージ</Label>
          {!mutation.thumbnailUrl && (
            <Input
              ref={inputFileRef}
              onChange={onChangePicture}
              name="thumbnail"
              type="file"
              accept="image/*, video/*"
            />
          )}
          {mutation.thumbnailUrl && (
            <div className="flex flex-col gap-2">
              <div className="mt-1 aspect-square w-full border dark:border-neutral-600 p-2 max-w-full sm:max-w-[200px] rounded-md flex flex-col items-end">
                <Image
                  src={mutation.thumbnailUrl}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="h-full w-full max-w-full max-h-full sm:max-w-[200px] sm:max-h-[200px] rounded-md object-cover"
                />
              </div>
              <div className="grid grid-cols-12 gap-2">
                <DownloadLink
                  url={mutation.thumbnailUrl}
                  className="col-span-6 sm:col-span-4 flex items-center gap-1"
                />
                <Button
                  type="button"
                  name="image-remove-button"
                  className="col-span-6 sm:col-span-4 flex items-center gap-1"
                  onClick={thumbnailReset}>
                  イメージ削除
                  <LucideX strokeWidth={1.7} size={16} />
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="contents">内容</Label>
          <Textarea
            id="contents"
            className="mt-1 h-80"
            value={mutation.contents}
            onChange={(e) => onChangeMutation(e.target.value, "contents")}
          />
        </div>
        <div className="flex justify-end">
          <HeaderActions
            updatePost={updatePost}
            loading={loading}
            progress={progress}
          />
        </div>
      </div>
    </motion.div>
  );
}

type HeaderActionsProps = {
  updatePost: (send?: boolean) => void;
  loading: boolean;
  progress: number;
};
function HeaderActions({ updatePost, loading, progress }: HeaderActionsProps) {
  return (
    <>
      <div className="flex gap-2">
        <Button
          variant={"outline"}
          className={clsx(
            "mb-4 flex px-2 bg-gradient-to-tr",
            "hover:dark:from-neutral-800 hover:dark:to-neutral-700 dark:from-neutral-900 dark:to-neutral-800",
            "hover:from-neutral-50 hover:to-neutral-100 from-white to-neutral-50"
          )}
          disabled={loading}
          onClick={() => updatePost()}>
          とりあえず保存
          <SaveIcon className="ml-1 w-4 h-4" />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button
              variant={"outline"}
              className={clsx(
                "mb-4 flex px-2 bg-gradient-to-tr",
                "hover:dark:from-neutral-800 hover:dark:to-neutral-700 dark:from-neutral-900 dark:to-neutral-800",
                "hover:from-neutral-50 hover:to-neutral-100 from-white to-neutral-50"
              )}>
              アップロード
              <Send className="ml-1 w-4 h-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="font-skybori w-[95%] rounded-md">
            <AlertDialogHeader>
              <AlertDialogTitle>アップロードしますか？</AlertDialogTitle>
              <AlertDialogDescription>
                アップロードすると公開され画像の編集が難しくなります。
                <br />
                後で画像の編集があると予想される場合は、アップロード前に
                <span className="text-neutral-800">「とりあえず保存」</span>
                をしてください。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>戻る</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => updatePost(true)}
                disabled={loading}>
                {loading ? "アップロード中" : "アップロード"}
              </AlertDialogAction>
            </AlertDialogFooter>
            {loading && (
              <Progress value={progress} className="h-1.5 transition-all" />
            )}
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
