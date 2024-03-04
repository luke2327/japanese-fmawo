"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BlogPost, PostingEdit } from "@/interface/blog.interface";
import { editPosting, getFormattedMDX, translate } from "@/app/db/blog-client";
import { ChevronLeft, LucideX, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { makeSlug, uploadThumbnail } from "@/lib/utils";

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
  const inputFileRef = useRef<HTMLInputElement>(null);

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

  const updatePost = async () => {
    const slug = makeSlug(mutation.titleEn);
    let thumbnailUrl = mutation.thumbnailUrl;

    if (file) {
      thumbnailUrl = await uploadThumbnail(file, slug, thumbnailPrefix);
    }

    let contents = mutation.contents;
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
    } catch (e) {
      console.error(e);
    }

    const payload: PostingEdit = {
      postNo: mutation.postNo,
      titleKo: mutation.titleKo,
      titleEn: mutation.titleEn,
      titleJa: mutation.titleJa,
      workMember: mutation.workMember,
      contents: contents,
      thumbnailUrl: thumbnailUrl,
      check: true,
    };

    await editPosting(payload);
    onReleaseSelectedPost();

    toast({
      title: "更新完了",
      duration: 3000,
    });
  };

  return (
    <div>
      {post && (
        <div className="flex justify-between items-center">
          <Button
            variant={"ghost"}
            className="mb-4 flex pl-1.5"
            onClick={onReleaseSelectedPost}>
            <ChevronLeft className="w-6 h-6" />
            戻る
          </Button>
          <Button
            variant={"outline"}
            className="mb-4 flex"
            onClick={updatePost}>
            更新
            <Send className="ml-2 w-4 h-4" />
          </Button>
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
            <div className="mt-1 aspect-square w-full border dark:border-neutral-600 border-neutral-400 p-2 max-w-[200px] rounded-md flex flex-col items-end">
              <Image
                src={mutation.thumbnailUrl}
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
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="contents">内容</Label>
          <Textarea
            id="contents"
            className="mt-1 h-80"
            value={mutation.contents}
            onChange={(e) => onChangeMutation(e.target.value, "contents")}
          />
        </div>
      </div>
    </div>
  );
}
