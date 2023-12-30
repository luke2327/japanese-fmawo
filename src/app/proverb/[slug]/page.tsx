import type { Metadata } from "next";
import { Suspense, cache } from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "src/components/mdx";
import { getViewsCount } from "src/app/db/queries";
import { increment } from "src/app/db/actions";
import { blockingSprite, formatDate } from "src/lib/utils";
import { config } from "@/lib/config";
import { Comment } from "@/components/blog/comment";
import { getPostingDetail } from "@/app/db/blog-client";
import Share from "@/components/share";
import ViewCounter from "../view-counter";

const { host } = config;

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  blockingSprite(params.slug);

  const post = await getPostingDetail(params.slug);

  if (!post) {
    return;
  }

  let ogImage = post.thumbnailUrl
    ? host + post.thumbnailUrl
    : `${host}/og?title=${post.title}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags || [post.titleKo, post.titleJa, post.titleEn].join(","),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${host}/proverb/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  blockingSprite(params.slug);

  const post = await getPostingDetail(params.slug);

  console.log("[post]", post);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            description: post.summary,
            image: post.thumbnailUrl
              ? host + post.thumbnailUrl
              : `${host}/og?title=${post.title}`,
            url: `${host}/proverb/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.writer || "MW",
            },
          }),
        }}
      />
      <div className="sticky top-0 z-20 bg-white dark:bg-[#111010] py-2">
        <h1 className="title font-medium md:text-2xl text-lg tracking-tighter max-w-[650px]">
          <span className="font-azuki">{post.titleJa}</span>
          <span className="font-skybori">({post.titleKo})</span>
        </h1>
        <div className="justify-between items-center my-2 text-sm max-w-[650px] flex font-skybori">
          <div className="flex justify-between items-center text-sm">
            <p
              id="writer"
              className="text-sm text-neutral-600 dark:text-neutral-400">
              {post.writer}
            </p>
            <p className="mx-1">・</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.publishedAt)}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Suspense fallback={<p className="h-5" />}>
              <Views slug={post.slug} />
            </Suspense>
            <Share />
          </div>
        </div>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert font-skybori">
        <CustomMDX source={post.contents} />
      </article>
      <Comment postNo={post.postNo} />
    </section>
  );
}

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}
