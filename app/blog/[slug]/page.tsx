import type { Metadata } from 'next';
import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import ViewCounter from '../view-counter';
import { increment } from 'app/db/actions';
import { formatDate } from 'lib/utils';
import { Textarea } from 'app/components/ui/textarea';
import { Button } from 'app/components/ui/button';

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://blog.fmawo.com${image}`
    : `https://blog.fmawo.com/og?title=${title}`;

  description = `${title} | ${description}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://blog.fmawo.com/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  console.log('[parameters]', params)
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  console.log('[post]', post)

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
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://blog.fmawo.com${post.metadata.image}`
              : `https://blog.fmawo.com/og?title=${post.metadata.title}`,
            url: `https://blog.fmawo.com/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: post.metadata.writer || 'MW',
            },
          }),
        }}
      />
      <div className="sticky top-[8px] z-20 bg-white dark:bg-[#111010] pb-2">
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
        <div className="justify-between items-center my-2 text-sm max-w-[650px] hidden md:flex">
          <div className="flex justify-between items-center text-sm">
            <p id="writer" className="text-sm text-neutral-600 dark:text-neutral-400">{post.metadata.writer}</p>
            <p className="mx-1">・</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
          <Suspense fallback={<p className="h-5" />}>
            <Views slug={post.slug} />
          </Suspense>
        </div>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
      <div className='mt-12 flex flex-col gap-2'>
        <label>댓글</label>
        <div className="grid w-full gap-2">
          <Textarea className="w-full h-[80px]"></Textarea>
          <Button>작성</Button>
        </div>
      </div>
    </section>
  );
}

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}
