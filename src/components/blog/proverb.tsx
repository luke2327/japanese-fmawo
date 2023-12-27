import { getPostings, insertPosts } from "@/app/db/blog-client";
import { fetcher } from "@/lib/fetch";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { BlogPost } from "@/interface/blog.interface";
import React from "react";

type IProps = {
  keyword?: string | null;
};

async function ProverbPage({ keyword }: IProps) {
  const posts = await getPostings(keyword);

  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/proverb/${post.slug}`}>
          <div className="flex items-center gap-2">
            {post.thumbnailUrl ? (
              <div>
                <Image
                  className="rounded-md border border-neutral-600 min-w-[68px] min-h-[68px]"
                  src={post.thumbnailUrl}
                  alt={post.description as string}
                  width={post.thumbnailWidth as unknown as number}
                  height={post.thumbnailHeight as unknown as number}
                />
              </div>
            ) : (
              <div className="min-w-[44.27px] w-[44.27px] h-[44.27px] border border-neutral-600 rounded-md"></div>
            )}
            <div className="w-full flex flex-col min-h-[68px] justify-between">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight flex flex-wrap items-center">
                <span className="font-azuki">{post.titleJa}</span>
                <span className="font-skybori">({post.titleKo})</span>
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-skybori">
                {formatDate(post.publishedAt, false)}
              </p>
              {/* <Suspense fallback={<p className="h-6" />}>
                  <Views slug={post.slug} />
                </Suspense> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default React.memo(ProverbPage);
