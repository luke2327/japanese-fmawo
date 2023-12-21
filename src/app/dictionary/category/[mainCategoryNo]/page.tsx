import { fetcher } from "@/lib/fetch";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { mainCategoryNo: string };
}) {
  let data;

  if (!isNaN(Number(params.mainCategoryNo))) {
    data = await fetcher(
      "/global-dict/category/main/detail/" + params.mainCategoryNo
    );
  } else {
    notFound();
  }

  return (
    <section>
      <div className="flex items-baseline gap-2">
        <h1 className="text-[20px] font-bold">{data.mainCategoryName}</h1>
        <p className="text-neutral-400">（{data.mainCategoryWordCount}）</p>
      </div>
      <div className="grid grid-cols-4 gap-4 p-3">
        {data.mainCategoryList.map((x, idx) => (
          <div key={idx} className="flex items-baseline gap-2">
            <p>{x.sub_category}</p>
            <p className="text-neutral-400">({x.content.length})</p>
          </div>
        ))}
      </div>
    </section>
  );
}
