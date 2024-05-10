import { fetcher } from "@/lib/fetch";
import { Metadata } from "next";
import dictionaryMainCategoryNameMatch from "@/constant/dictionary.mainCategoryNameMatch";
import { SubCategoryDetailList } from "@/interface/dictionary.interface";
import { Divider } from "@/components/ui/divider";
import { cn } from "@/lib/utils";

type IProps = {
  params: {
    subCategory: string;
    mainCategoryNo: keyof typeof dictionaryMainCategoryNameMatch;
  };
};

export async function generateMetadata({
  params: { subCategory, mainCategoryNo },
}: IProps): Promise<Metadata | undefined> {
  const mainCategoryName = dictionaryMainCategoryNameMatch[mainCategoryNo];
  const subCategoryName = decodeURI(subCategory);

  if (subCategoryName === "sprite.svg") {
    return;
  }

  const ogImage = `https://app.maplew.com/og?title=${mainCategoryName}-${subCategoryName}`;
  const description = `${mainCategoryName} | ${subCategoryName}`;

  return {
    title: subCategoryName,
    description,
    keywords: [mainCategoryName, subCategoryName],
    openGraph: {
      title: subCategoryName,
      description,
      type: "article",
      publishedTime: "2023-12-23",
      url: `https://app.maplew.com/dictionary/category/${mainCategoryNo}/${subCategoryName}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: subCategoryName,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params: { subCategory } }: IProps) {
  const subCategoryName = decodeURI(subCategory);

  if (subCategoryName === "sprite.svg") {
    return;
  }

  const data = await fetcher<SubCategoryDetailList>(
    "/v2023/global-dict/category/sub/detail/" + subCategoryName
  );

  return (
    <section id="sub-category">
      <div className="flex items-baseline gap-3 mb-2">
        <h1 className="text-[20px] font-bold">{data.sub_category}</h1>
        <p className="text-[16px] text-neutral-400 tracking-widest">
          <span className="pr-1">（</span>単語数<span className="px-1">:</span>
          {data.content.length}
          <span className="pl-1">）</span>
        </p>
      </div>
      <Divider />
      <table
        className="text-[12px] w-full table table-fixed max-w-full border-neutral-400 dark:border-neutral-600 border p-0.5"
        border={1}>
        <thead className="bg-neutral-200 dark:bg-neutral-600 w-full table-header-group">
          <tr>
            <th className="w-[20%]">韓国語単語</th>
            <th className="w-[30%] hidden md:table-cell">韓国語発音</th>
            <th className="w-[50%]">日本語意味</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {data.content.map((val) => (
            <tr key={val.word_no}>
              <Td
                className="w-[20%] border-l-0 font-skybori"
                val={val.mean_ko}></Td>
              <Td
                className="w-[30%] hidden md:table-cell"
                val={val.pronunciation?.split(",").pop() as string}></Td>
              <Td
                className="w-[50%] text-blue-400 hover:underline cursor-pointer"
                val={val.mean_ja}></Td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Td({ val, className }: { val: string; className: string }) {
  return (
    <td
      style={{ textWrap: "pretty" }}
      className={cn(
        "border-neutral-400 dark:border-neutral-600 border-t border-l px-2.5 py-1.5",
        className
      )}>
      {val}
    </td>
  );
}
