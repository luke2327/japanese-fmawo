"use client";

import React, {
  ChangeEvent,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getUUID } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import {
  Posting,
  editPosting,
  getPostings,
  translate,
} from "@/app/db/blog-client";
import { PostingEdit } from "@/interface/blog.interface";
import type { PutBlobResult } from "@vercel/blob";
import { Label } from "@/components/ui/label";
import { ChevronLeft, LucideX, Send } from "lucide-react";
import { BlogAuthentication } from "@/components/blog/authentication";
import Image from "next/image";

function EditionPage() {
  const [authentication, setAuthentication] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Posting>();
  const [mutation, setMutation] = useState({
    postNo: 0,
    titleKo: "",
    titleJa: "",
    titleEn: "",
    contents: "",
    thumbnailUrl: "",
  });

  useEffect(() => {
    const authorized = window.sessionStorage.getItem("authorized");

    if (authorized && authorized === "maria") {
      setAuthentication(true);
      initialize();
    }
  }, []);

  function thumbnailReset() {
    setThumbnailData("");

    if (inputFileRef.current) {
      (inputFileRef.current as HTMLInputElement).files = null;
      (inputFileRef.current as HTMLInputElement).value = "";
    }
  }

  function onChangeMutation(val: string, key: keyof typeof mutation) {
    setMutation((prev) => ({ ...prev, [key]: val }));
  }

  function onChangeAuthentication(val: boolean) {
    window.sessionStorage.setItem("authorized", "maria");

    setAuthentication(val);
    initialize();
  }

  function onChangeSelectPosting(posting: Posting) {
    setSelectedPost(posting);
    setMutation({
      postNo: posting.postNo,
      titleKo: posting.titleKo,
      titleJa: posting.titleJa,
      titleEn: posting.titleEn,
      contents: posting.contents,
      thumbnailUrl: posting.thumbnailUrl,
    });
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

  async function onSubmit() {
    let thumbnailUrl = mutation.thumbnailUrl;

    if (inputFileRef.current?.files) {
      const file = inputFileRef.current.files[0];
      if (file) {
        const response = await fetch(
          `/api/proverb/upload-thumbnail?filename=${
            getUUID() + file.name.split(".")[1]
          }`,
          {
            method: "POST",
            body: file,
          }
        );

        const { url } = (await response.json()) as PutBlobResult;

        thumbnailUrl = url;
      }
    }

    if (thumbnailUrl) {
      setMutation((prev) => ({
        ...prev,
        contents: prev.contents.replace(
          /src=\{`.+`\}/,
          `src={\`${thumbnailUrl}\`}`
        ),
      }));
    }

    const payload: PostingEdit = {
      postNo: mutation.postNo,
      titleKo: mutation.titleKo,
      titleEn: mutation.titleEn,
      titleJa: mutation.titleJa,
      contents: mutation.contents,
      thumbnailUrl,
    };

    await editPosting(payload);

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

  const translateTitleEnglish = async () => {
    const translatedText = await translate({
      text: mutation.titleJa,
      target: "en",
      source: "ja",
    });

    setMutation((prev) => ({ ...prev, titleEn: translatedText }));
  };

  const onChangePicture = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.currentTarget.files && event.currentTarget.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setThumbnailData(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [setThumbnailData]
  );

  function reset() {
    setSelectedPost(undefined);
    setMutation({
      postNo: 0,
      titleKo: "",
      titleJa: "",
      titleEn: "",
      contents: "",
      thumbnailUrl: "",
    });
    thumbnailReset();
  }

  return (
    <>
      {selectedPost && (
        <div className="flex justify-between items-center">
          <Button
            variant={"outline"}
            className="mb-4 flex pl-1.5"
            onClick={reset}>
            <ChevronLeft className="w-6 h-6" />
            Go to list
          </Button>
          <Button variant={"outline"} className="mb-4 flex" onClick={onSubmit}>
            Update
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}
      {authentication ? (
        <div>
          {selectedPost ? (
            <div>
              <div className="flex flex-col gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="titleKo">タイトル（韓国語）</Label>
                  <Input
                    id="titleKo"
                    className="w-full"
                    value={mutation.titleKo}
                    onChange={(e) =>
                      onChangeMutation(e.target.value, "titleKo")
                    }
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="titleJa">タイトル（日本語）</Label>
                  <Input
                    id="titleJa"
                    value={mutation.titleJa}
                    onChange={(e) =>
                      onChangeMutation(e.target.value, "titleJa")
                    }
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
                    onChange={(e) =>
                      onChangeMutation(e.target.value, "titleEn")
                    }
                  />
                </div>
                {mutation.thumbnailUrl && (
                  <div>
                    <Label>元のイメージ</Label>
                    <div className="mt-1 border dark:border-neutral-600 border-neutral-400 p-2 max-w-[200px] rounded-md flex flex-col items-end">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={mutation.thumbnailUrl}
                        alt="Preview"
                        className="h-full w-full max-w-[200px] max-h-[200px] rounded-md object-cover"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <Label>イメージ</Label>
                  <Input
                    ref={inputFileRef}
                    onChange={onChangePicture}
                    name="thumbnail"
                    type="file"
                  />
                  {thumbnailData && (
                    <div className="mt-1 border dark:border-neutral-600 border-neutral-400 p-2 max-w-[200px] rounded-md flex flex-col items-end">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={thumbnailData}
                        alt="Preview"
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
                    onChange={(e) =>
                      onChangeMutation(e.target.value, "contents")
                    }
                  />
                </div>
              </div>
            </div>
          ) : (
            <Suspense fallback={<p>hello</p>}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-4">
                {postings.map((posting) => (
                  <div
                    key={posting.slug}
                    className="hover:bg-neutral-600 transition-colors cursor-pointer rounded-md"
                    onClick={() => onChangeSelectPosting(posting)}>
                    <div>
                      <Image
                        src={posting.thumbnailUrl}
                        alt={posting.title}
                        width={240}
                        height={240}
                        className="rounded-md"
                      />
                    </div>
                    <p>{posting.title}</p>
                  </div>
                ))}
              </div>
            </Suspense>
          )}
        </div>
      ) : (
        <BlogAuthentication onChangeAuthentication={onChangeAuthentication} />
      )}
    </>
  );
}

export default EditionPage;
