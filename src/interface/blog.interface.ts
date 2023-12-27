/**
 * Blog Interface
 * @description 이 타입들은 블로그 포스트와 관련된 데이터를 모델링하는 데 사용됩니다.
 */

export type Metadata = {
  title: string;
  titleKo: string;
  titleJa: string;
  publishedAt: string;
  summary: string;
  image?: string;
  writer?: string;
  category?: string;
  thumbnailUrl?: string;
  thumbnailWidth?: string;
  thumbnailHeight?: string;
};

export type BlogPost = {
  post_no: number;
  contents: string;
  language: "ko" | "ja";
  slug: string;
  type: "proverb";
};

export type MDXData = {
  metadata: Metadata;
  slug: string;
  tweetIds: any;
  content: string;
};

export type Posting = {
  postNo: number;
  postIndex: number;
  contents: string;
  language: "ko";
  slug: string;
  type: "proverb";
  titleKo: string;
  titleJa: string;
  titleEn: string;
  writer: string;
  publishedAt: string;
  thumbnailUrl: string;
  thumbnailWidth: 48;
  thumbnailHeight: 48;
};

export type PostingInsert = {
  postIndex: number;
  contents: string;
  slug: string;
  titleKo: string;
  titleJa: string;
  titleEn: string;
  writer: string;
  thumbnailUrl: string;
  postNo?: number;
  language?: "ko" | "en";
  type?: "proverb";
  publishedAt?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
};
