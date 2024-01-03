"use client";

/**
 * 이 파일은 React와 TypeScript를 사용하여 댓글 작성 기능을 구현합니다.
 * 사용자가 댓글을 입력할 수 있는 텍스트 영역과 댓글을 게시할 수 있는 버튼을 포함합니다.
 */

import { addComment, getComment } from "@/app/db/blog-client";
import { CommentList } from "@/components/blog/comment-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlogComment, BlogPost } from "@/interface/blog.interface";
import { useEffect, useRef, useState } from "react";

type IProps = {
  postNo: BlogPost["postNo"];
};

export function Comment({ postNo }: IProps) {
  useEffect(() => {
    getComment(postNo).then((res) => {
      setCommentList(res);
    });
  }, [postNo]);

  async function dispatchComment(
    comment: string,
    id: string,
    password?: string,
    cascadeCommentNo?: number
  ) {
    await addComment({
      postNo,
      comment,
      id,
      password,
      cascadeCommentNo,
    });
    await getComment(postNo).then((res) => {
      setCommentList(res);
    });
  }

  async function handleSubmit() {
    if (ref.current === null || idRef.current === null) {
      return;
    }

    await dispatchComment(
      ref.current.value,
      idRef.current.value,
      passwordRef.current?.value
    );

    ref.current.value = "";
    idRef.current.value = "";
    if (passwordRef.current !== null) {
      passwordRef.current.value = "";
    }
  }

  const ref = useRef<HTMLTextAreaElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [commentList, setCommentList] = useState<BlogComment[]>([]);

  return (
    <section className="mt-12 flex flex-col gap-2 font-skybori">
      <div className="flex justify-between items-end">
        <Label htmlFor="comment" className="text-md whitespace-nowrap">
          댓글
        </Label>
        <div className="flex justify-between gap-2">
          <Input
            ref={idRef}
            id="id"
            placeholder="ID"
            required
            className="text-[12px] py-0.5 h-7"
          />
          <Input
            ref={passwordRef}
            placeholder="Password"
            maxLength={10}
            id="password"
            className="text-[12px] py-0.5 h-7"
          />
        </div>
      </div>
      <div className="grid w-full gap-2">
        <Textarea ref={ref} id="comment" className="w-full h-[80px]" />
        <Button onClick={handleSubmit}>작성</Button>
      </div>
      <CommentList
        commentList={commentList}
        dispatchComment={dispatchComment}
      />
    </section>
  );
}
