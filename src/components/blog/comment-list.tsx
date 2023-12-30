"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { BlogComment } from "@/interface/blog.interface";
import { config } from "@/lib/config";
import {
  CornerDownRight,
  ExternalLink,
  MessageSquareText,
  MessageSquareX,
  MoreVertical,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export function CommentList({ commentList }: { commentList: BlogComment[] }) {
  const [cascadeId, setCascadeId] = useState<number>();
  const pathname = usePathname();

  function commentCopy(commentNo: number) {
    navigator.clipboard.writeText(
      `${config.host}${pathname}#comment-${commentNo}`
    );
  }

  return (
    <div id="comment-list" className="flex flex-col gap-2">
      {commentList
        .filter((x) => !x.cascadeCommentNo)
        .map((comment) => {
          return (
            <div
              key={comment.commentNo}
              id={`comment-${comment.commentNo}`}
              className="mt-4">
              <div className="flex justify-between items-center">
                <div className="flex items-end gap-2">
                  <h4 className="text-md font-medium">{comment.id}</h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    {comment.createdAt}
                  </p>
                </div>
                <Popover>
                  <PopoverTrigger>
                    <MoreVertical
                      strokeWidth={1}
                      size={16}
                      className="cursor-pointer text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-100 transition-colors"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-auto font-raleway text-[12px] py-0.5 flex flex-col gap-0.5">
                    <p
                      className="cursor-pointer text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
                      onClick={() => commentCopy(comment.commentNo)}>
                      <ExternalLink
                        name="share-button"
                        type="button"
                        strokeWidth={1}
                        width={16}
                        height={16}
                      />
                      링크복사
                    </p>
                    {cascadeId !== comment.commentNo && (
                      <p
                        className="cursor-pointer text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
                        onClick={() => setCascadeId(comment.commentNo)}>
                        <MessageSquareText
                          name="share-button"
                          type="button"
                          strokeWidth={1}
                          width={16}
                          height={16}
                        />
                        답글
                      </p>
                    )}
                    {cascadeId === comment.commentNo && (
                      <p
                        className="cursor-pointer text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-100 transition-colors flex items-center gap-1"
                        onClick={() => setCascadeId(undefined)}>
                        <MessageSquareX
                          name="share-button"
                          type="button"
                          strokeWidth={1}
                          width={16}
                          height={16}
                        />
                        답글취소
                      </p>
                    )}
                  </PopoverContent>
                </Popover>
              </div>
              <p className="text-sm mt-1">
                {comment.comment}
                {commentList
                  .filter((c) => {
                    console.log(c.cascadeCommentNo);
                    return comment.commentNo === c.cascadeCommentNo;
                  })
                  .map((x) => (
                    <div key={x.commentNo} className="ml-4 mt-2 flex gap-2">
                      <CornerDownRight
                        strokeWidth={1}
                        size={16}
                        className="text-neutral-600 dark:text-neutral-200"
                      />
                      <div>
                        <div className="flex items-end gap-2">
                          <h4 className="text-md font-medium">{x.id}</h4>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            {x.createdAt}
                          </p>
                        </div>
                        <p className="text-sm mt-1">{x.comment}</p>
                      </div>
                    </div>
                  ))}
              </p>
              {cascadeId === comment.commentNo && (
                <CommentCascade id={comment.id} commentNo={cascadeId} />
              )}
            </div>
          );
        })}
    </div>
  );
}

function CommentCascade({ id, commentNo }: { id: string; commentNo: number }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function dispatch() {}

  return (
    <section>
      <div className="w-10"></div>
      <div className="flex flex-col gap-2 font-skybori">
        <div className="flex justify-between items-end">
          <Label htmlFor="comment" className="text-md">
            @{id}
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
          <Button onClick={dispatch}>작성</Button>
        </div>
      </div>
    </section>
  );
}
