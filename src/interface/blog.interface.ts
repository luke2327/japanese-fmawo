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
  thumbnailDesc?: string;
  noImage?: boolean;
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
