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

export type MDXData = {
  metadata: Metadata;
  slug: string;
  tweetIds: any;
  content: string;
};

/**
 * BlogPost Table structure
 */
export type BlogPost = {
  postNo: number;
  postIndex: number;
  contents: string;
  language: "ko" | "en";
  slug: string;
  type: "proverb";
  titleKo: string;
  titleJa: string;
  titleEn: string;
  writer: string;
  publishedAt: string;
  thumbnailUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  tags: string[];
  views: number;
  check: boolean;
  workMember?: number;
};

export type BlogComment = {
  postNo: number;
  commentNo: number;
  cascadeCommentNo: number;
  comment: string;
  createdAt: string;
  id: string;
  password: string;
  userAgent: string;
  ipAddress: string;
};

export type PostingInsert = { worker?: string } & Required<
  Pick<
    BlogPost,
    | "postIndex"
    | "contents"
    | "slug"
    | "titleKo"
    | "titleEn"
    | "titleJa"
    | "writer"
    | "thumbnailUrl"
    | "workMember"
    | "check"
  >
> &
  Partial<
    Pick<
      BlogPost,
      | "postNo"
      | "language"
      | "type"
      | "publishedAt"
      | "thumbnailWidth"
      | "thumbnailHeight"
      | "tags"
    >
  >;
export type PostingEdit = Pick<
  BlogPost,
  | "postNo"
  | "contents"
  | "titleKo"
  | "titleEn"
  | "titleJa"
  | "thumbnailUrl"
  | "workMember"
  | "check"
>;
export type Dashboard = {
  dailyPost: (Pick<
    BlogPost,
    "postNo" | "titleKo" | "publishedAt" | "writer" | "thumbnailUrl" | "slug"
  > & {
    description: string;
    thumbnailAlt: string;
    commentList: BlogComment[];
  })[];
};
export type WorkInfo = {
  workPosts: BlogPost[];
  total: number;
  compelete: number;
  incomplete: number;
};
