/**
 * 이 파일은 React와 TypeScript를 사용하여 속담 페이지를 구현합니다.
 * 이 페이지는 특정 키워드에 대한 게시물을 가져와서 각 게시물에 대한 링크를 생성합니다.
 * 각 링크는 게시물의 썸네일, 제목, 그리고 게시 날짜를 보여줍니다.
 */

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
                  className="rounded-md border border-neutral-300 dark:border-neutral-600 min-w-[68px] min-h-[68px]"
                  src={post.thumbnailUrl}
                  alt={post.description as string}
                  width={post.thumbnailWidth as unknown as number}
                  height={post.thumbnailHeight as unknown as number}
                />
              </div>
            ) : (
              <div className="min-w-[68px] w-[68px] h-[68px] border border-neutral-600 rounded-md"></div>
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
