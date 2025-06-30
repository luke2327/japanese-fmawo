export type SubCategoryDetailList = {
  category_no: number;
  home_category: "ホーム";
  main_category: string;
  main_category_no: number;
  sub_category: string;
  content: {
    word_no: number;
    mean_ko: string;
    mean_ja: string;
    pronunciation: string;
  }[];
};
