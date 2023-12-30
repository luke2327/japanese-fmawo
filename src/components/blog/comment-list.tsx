import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BlogComment } from "@/interface/blog.interface";
import { config } from "@/lib/config";
import { ExternalLink, MoreVertical } from "lucide-react";
import { usePathname } from "next/navigation";

export function CommentList({ commentList }: { commentList: BlogComment[] }) {
  const pathname = usePathname();

  function commentCopy(commentNo: number) {
    console.log(pathname, `${config.host}${pathname}#comment-${commentNo}`);
    navigator.clipboard.writeText(
      `${config.host}${pathname}#comment-${commentNo}`
    );
  }

  return (
    <div id="comment-list" className="flex flex-col gap-2">
      {commentList.map((comment) => {
        return (
          <div
            key={comment.commentNo}
            id={`comment-${comment.commentNo}`}
            className="mt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium">{comment.id}</p>
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
                <PopoverContent className="w-auto font-raleway text-[12px] py-0.5">
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
                </PopoverContent>
              </Popover>
            </div>
            <p className="text-sm mt-1">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
