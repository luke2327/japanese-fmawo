"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BlogPost, PostingEdit } from "@/interface/blog.interface";
import { editPosting, translate } from "@/app/db/blog-client";
import { ChevronLeft, DownloadIcon, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import Image from "next/image";

type AdminPostEditionProps = {
  post: BlogPost;
  onReleaseSelectedPost: () => void;
};

export default function AdminPostEdition({
  post,
  onReleaseSelectedPost,
}: AdminPostEditionProps) {
  const { toast } = useToast();
  const [mutation, setMutation] = useState(post);

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
    const payload: PostingEdit = {
      postNo: mutation.postNo,
      titleKo: mutation.titleKo,
      titleEn: mutation.titleEn,
      titleJa: mutation.titleJa,
      contents: mutation.contents,
      workMember: mutation.workMember,
      thumbnailUrl: mutation.thumbnailUrl,
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
        {mutation.thumbnailUrl && (
          <div>
            <Label>メージ</Label>
            <div className="flex flex-col sm:flex-row items-end gap-2">
              <div className="mt-1 w-full aspect-square border dark:border-neutral-600 border-neutral-400 p-2 max-w-full sm:max-w-[200px] rounded-md flex flex-col items-end">
                <Image
                  src={mutation.thumbnailUrl}
                  alt="Preview"
                  width={200}
                  height={200}
                  className="h-full w-full max-w-full max-h-full sm:max-w-[200px] sm:max-h-[200px] rounded-md object-cover"
                />
              </div>
              <Button>
                <Link
                  href={mutation.thumbnailUrl}
                  target="_blank"
                  className="flex items-center gap-2">
                  ダウンロード <DownloadIcon size={16} />
                </Link>
              </Button>
            </div>
          </div>
        )}
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
