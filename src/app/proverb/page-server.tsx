import Link from "next/link";
import ViewCounter from "./view-counter";
import { getViewsCount } from "src/app/db/queries";
import { getBlogPosts } from "src/app/db/blog";
import Image from "next/image";
import { formatDate } from "src/lib/utils";

export const metadata = {
  title: "Proverb",
  description:
    "재미있는 일본과 한국의 속담을 배워봅시다. | 面白い日本と韓国のことわざを学びましょう。 | Let's learn some interesting Japanese and Korean proverbs.",
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
            href={`/proverb/${post.slug}`}>
            <div className="flex items-center gap-2">
              {post.metadata.thumbnailUrl && !post.metadata.noImage ? (
                <div>
                  <Image
                    className="rounded-md"
                    src={post.metadata.thumbnailUrl}
                    alt={post.metadata.thumbnailDesc as string}
                    width={post.metadata.thumbnailWidth as unknown as number}
                    height={post.metadata.thumbnailHeight as unknown as number}
                  />
                </div>
              ) : (
                <div className="min-w-[44.27px] w-[44.27px] h-[44.27px] border border-neutral-600 rounded-md"></div>
              )}
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight flex flex-wrap gap-0.5 items-center">
                  <span className="font-azuki">{post.metadata.titleJa}</span>
                  <span className="font-skybori">
                    ({post.metadata.titleKo})
                  </span>
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-skybori">
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
