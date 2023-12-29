import { getPostings } from "@/app/db/blog-client";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import React from "react";

type IProps = {
  keyword?: string | null;
};

async function ProverbPage({ keyword }: IProps) {
  const posts = await getPostings(keyword);

  return (
    <div className="grid grid-cols-3 justify-center gap-2">
      {posts.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1"
          href={`/proverb/${post.slug}`}>
          <div className="flex items-center gap-2">
            {post.thumbnailUrl ? (
              <div className="min-w-[68px] min-h-[68px]">
                <Image
                  className="rounded-md border border-neutral-300 dark:border-neutral-600 w-full h-full"
                  src={post.thumbnailUrl}
                  alt={post.description as string}
                  width={0}
                  height={0}
                  sizes="100vw"
                  quality={100}
                />
              </div>
            ) : (
              <div className="min-w-[44.27px] w-[44.27px] h-[44.27px] border border-neutral-600 rounded-md"></div>
            )}
            <div className="w-full flex flex-col min-h-[68px] justify-between hidden">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight flex flex-wrap items-center">
                {/* <span className="font-azuki">{post.titleJa}</span>
                <span className="font-skybori">({post.titleKo})</span> */}
              </p>
              {/* <p className="text-sm text-neutral-600 dark:text-neutral-400 font-skybori">
                {formatDate(post.publishedAt, false)}
              </p> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default React.memo(ProverbPage);

// <Suspense fallback={<p className="h-6" />}>
//   <Views slug={post.slug} />
// </Suspense>
