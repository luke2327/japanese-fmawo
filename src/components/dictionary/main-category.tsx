import { DictionaryCategoryList } from "@/app/dictionary/page";
import Link from "next/link";

type IProps = {
  dictionaryCategoryList: DictionaryCategoryList;
};

export function MainCategory({ dictionaryCategoryList }: IProps) {
  return (
    <div className="border-neutral-600 border">
      <div className="text-center bg-neutral-600 m-0.5 py-0.5">
        韓国語のカテゴリー
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-3">
        {Object.entries(dictionaryCategoryList).map(
          ([categoryTitle, val], idx) => (
            <div key={idx}>
              <h1 className="font-bold text-[12px] text-blue-400 border-l-blue-400 border-l-2 pl-1">
                <Link href={`/dictionary/category/${val[0].main_category_no}`}>
                  {categoryTitle}
                </Link>
              </h1>
              <div className="flex flex-col gap-1">
                {val.map((item) => (
                  <li
                    key={item.category_no}
                    className="text-[12px] hover:font-bold hover:scale-106 cursor-pointer transition-all list-decimal">
                    <Link
                      key={idx}
                      href={`/dictionary/category/${item.main_category_no}/${item.sub_category}`}>
                      {item.sub_category}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
