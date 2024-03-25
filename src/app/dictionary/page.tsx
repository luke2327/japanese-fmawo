import { MainCategory } from "@/components/dictionary/main-category";
import { fetcher } from "@/lib/fetch";

export const metadata = {
  title: "Dictionary",
  description:
    "유행하는단어나 네이티브의 한국어를 배워봅시다. | 流行の単語やネイティブの韓国語を学びましょう。 | Let's learn popular words and native Korean.",
};

export type DictionaryCategoryList = Record<
  string,
  {
    category_no: number;
    home_category: string;
    main_category: string;
    main_category_no: string;
    sub_category: string;
  }[]
>;

export default async function Page() {
  const data = await fetcher<DictionaryCategoryList>(
    "/v2023/global-dict/category/list"
  );

  return (
    <section id="dictionary">
      <MainCategory dictionaryCategoryList={data} />
    </section>
  );
}
