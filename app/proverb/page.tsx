import Link from 'next/link';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import Image from 'next/image';
import { formatDate } from 'lib/utils';

export const metadata = {
  title: 'Proverb',
  description: '재미있는 일본과 한국의 속담을 배워봅시다. | 面白い日本と韓国のことわざを学びましょう。 | Let\'s learn some interesting Japanese and Korean proverbs.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/proverb/${post.slug}`}
          >
            <div className="flex items-center gap-2">
              {post.metadata.thumbnailUrl &&
                <div>
                  <Image
                    className="rounded-md"
                    src={post.metadata.thumbnailUrl}
                    alt={post.metadata.thumbnailDesc as string}
                    width={post.metadata.thumbnailWidth as unknown as number}
                    height={post.metadata.thumbnailHeight as unknown as number}
                  />
                </div>
              }
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                {/* <Suspense fallback={<p className="h-6" />}>
                  <Views slug={post.slug} />
                </Suspense> */}
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
