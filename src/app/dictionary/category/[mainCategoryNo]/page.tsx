import { fetcher } from "@/lib/fetch";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let data;

  if (!isNaN(Number(params.mainCategoryNo))) {
    data = await fetcher(
      "/global-dict/category/main/name/" + params.mainCategoryNo
    );
  } else {
    return;
  }

  const { mainCategoryName, subCategoryNames } = data;
  const ogImage = `https://blog.fmawo.com/og?title=${mainCategoryName}`;
  const description = `${mainCategoryName} | ${subCategoryNames}`;

  return {
    title: mainCategoryName,
    description,
    keywords: subCategoryNames,
    openGraph: {
      title: mainCategoryName,
      description,
      type: "article",
      publishedTime: "2023-12-23",
      url: `https://blog.fmawo.com/dictionary/category/${params.mainCategoryNo}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: mainCategoryName,
      description,
      images: [ogImage],
    },
  };
}

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
      <div className="flex items-baseline gap-2 mb-2">
        <h1 className="text-[20px] font-bold">{data.mainCategoryName}</h1>
        <p className="text-neutral-400">（{data.mainCategoryWordCount}）</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-3 border-neutral-600 border">
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
