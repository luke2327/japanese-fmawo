import { dashboard } from "@/app/db/blog-client";
import { DailyPost } from "@/components/daily-post";

export default async function Page() {
  const dashboardDatas = await dashboard();

  return (
    <section className="max-w-xl flex flex-col justify-center mx-auto">
      <h1 className="font-medium text-2xl tracking-tighter flex gap-2 items-center flex-wrap">
        <span className="font-skybori">오늘의 일본속담</span>
      </h1>
      <div className="prose-neutral dark:prose-invert flex-col flex items-start gap-2 font-raleway">
        {dashboardDatas.dailyPost.map((post) => (
          <DailyPost key={post.postNo} post={post} />
        ))}
      </div>
    </section>
  );
}
