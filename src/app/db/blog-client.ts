import {
  MDXData,
  Metadata,
  BlogPost,
  PostingInsert,
  BlogComment,
  PostingEdit,
  Dashboard,
  WorkInfo,
} from "@/interface/blog.interface";
import { fetcher } from "@/lib/fetch";

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim()] = value;
  });

  metadata.titleKo = metadata.title?.match(/\((.+)\)/)![1].trim();
  metadata.titleJa = metadata.title?.split("(")![0].trim();

  return { metadata: metadata as Metadata, content };
}

function extractTweetIds(content) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
}

export type Posting = Awaited<ReturnType<typeof getPostings>>[0];
export async function getPostings(keyword?: string | null) {
  const datas = await fetcher<BlogPost[]>(
    `/v2023/blog/proverb/list${keyword ? `/${keyword}` : ""}`,
    { next: { revalidate: 60 } }
  );

  return datas.map((data) => {
    return {
      title: `${data.titleJa} (${data.titleKo})`,
      titleJa: data.titleJa,
      titleKo: data.titleKo,
      titleEn: data.titleEn,
      publishedAt: data.publishedAt,
      summary: data.titleEn,
      writer: data.writer,
      category: data.type,
      thumbnailUrl: data.thumbnailUrl,
      thumbnailWidth: data.thumbnailWidth,
      thumbnailHeight: data.thumbnailHeight,
      description: `${data.titleJa} | ${data.titleKo} | ${data.titleEn}`,
      contents: data.contents,
      slug: data.slug,
      postNo: data.postNo,
    };
  });
}

export async function getPostingDetail(slug: string) {
  const data = await fetcher<BlogPost>("/v2023/blog/proverb/detail/" + slug);

  return {
    postNo: data.postNo,
    title: `${data.titleJa} (${data.titleKo})`,
    titleJa: data.titleJa,
    titleKo: data.titleKo,
    titleEn: data.titleEn,
    publishedAt: data.publishedAt,
    summary: data.titleEn,
    writer: data.writer,
    category: data.type,
    thumbnailUrl: data.thumbnailUrl,
    thumbnailWidth: data.thumbnailWidth,
    thumbnailHeight: data.thumbnailHeight,
    description: `${data.titleJa} | ${data.titleKo} | ${data.titleEn}`,
    contents: data.contents,
    slug: data.slug,
    tags: data.tags,
    views: data.views,
  } as Omit<BlogPost, "language" | "postIndex" | "type" | "check"> & {
    title: string;
    description: string;
    summary: string;
  };
}

export async function insertPosts(data: MDXData[]) {
  const insertData = [] as any[];
  const randomDate = (step: number): string => {
    const x = parseInt(`${(Math.random() * 100) % step}`) + 1;

    if (x < 10) {
      return `0${x}`;
    }

    return `${x}`;
  };

  for (const mdx of data) {
    const props = {} as any;

    props.slug = mdx.slug;
    props.title_ko = mdx.metadata.titleKo;
    props.title_ja = mdx.metadata.titleJa;
    props.title_en = mdx.metadata.summary.endsWith(".")
      ? mdx.metadata.summary.slice(0, -1)
      : mdx.metadata.summary;
    props.published_at = `${mdx.metadata.publishedAt} ${randomDate(
      24
    )}:${randomDate(60)}:${randomDate(60)}`;
    props.thumbnail_url = mdx.metadata.thumbnailUrl;
    props.writer = "Maria Matsuoka";
    props.post_index = Number(
      mdx.metadata.thumbnailUrl?.split("/images/")[1].split("-")[0]
    );
    props.slug = mdx.metadata.thumbnailUrl
      ?.split("/images/")[1]
      .split("/picture.jpg")[0]
      .replace(/\d\d\d-/, "");

    insertData.push(props);
  }

  // await fetcher(`/blog/proverb/posting`, {
  //   method: "POST",
  //   body: JSON.stringify(insertData),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);

  return result.toISOString().split("T")[0];
}

type GetFormattedMDX = {
  contents: string;
  title: {
    titleKorean: string;
    titleEnglish: string;
    titleJapanese: string;
  };
  thumbnailUrl: string;
};

export function getFormattedMDX({
  contents,
  title,
  thumbnailUrl,
}: GetFormattedMDX) {
  try {
    const englishTitle = capitalizeFirstLetter(title.titleEnglish) + ".";
    const image = `<Image
  alt={\`${title.titleJapanese} (${title.titleKorean}) | ${englishTitle}\`}
  src={\`${thumbnailUrl}\`}
  width={1680}
  height={184}
/>\n`;

    contents = contents
      .replace(/일본 속담: "(.+)"/, "$1#ja-proverb-title")
      .replace("## 이야기 부분", "## 이야기");

    const separate = contents.match(/.*/g) as RegExpMatchArray;
    const index = separate.findIndex((x) => x.trim().includes("## 사용 예문"));
    const separate2 = separate.slice(index, 99);
    const origin = separate.slice(0, index);
    const examples = ["## 사용 예문", ""];

    separate2.forEach((x, idx) => {
      if (
        x.trim().startsWith("1. ") ||
        x.trim().startsWith("2. ") ||
        x.trim().startsWith("3. ")
      ) {
        const korean =
          separate2[idx + 2].trim() === ""
            ? separate2[idx + 1].trim()
            : separate2[idx + 2].trim();
        examples.push(`${x}<br /> ${korean}`);
      }
    });

    const fileContent = image + origin.join("\n") + examples.join("\n");

    return fileContent;
  } catch (e) {
    console.log(2, e);
  }
}

export async function addPosting(body: PostingInsert) {
  const data = await fetcher<BlogPost>("/v2023/blog/proverb/posting", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return data;
}

export async function editPosting(body: PostingEdit) {
  const data = await fetcher<BlogPost>("/v2023/blog/proverb/posting", {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return data;
}

export async function translate(body: {
  text: string;
  source: string;
  target: string;
}) {
  const data = await fetcher<string>("/v2023/language/translateMicrosoft", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return data;
}

type AddComment = {
  postNo: number;
  comment: string;
  id: string;
  password?: string;
  cascadeCommentNo?: number;
};
export async function addComment(params: AddComment) {
  return await fetcher<string>("/v2023/blog/proverb/comment", {
    method: "put",
    body: JSON.stringify(params),
    headers: { "Content-Type": "application/json" },
  });
}

export async function getComment(postNo: number) {
  return await fetcher<BlogComment[]>("/v2023/blog/proverb/comment/" + postNo, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });
}

export async function dashboard() {
  return await fetcher<Dashboard>("/v2023/blog/dashboard/", {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });
}

export async function getWorkInfo() {
  return await fetcher<WorkInfo>("/v2023/blog/proverb/work", {
    method: "get",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  });
}

export async function increment(postNo: number) {
  return await fetcher<{ views: number }>("/v2023/blog/proverb/views", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postNo }),
  });

  // await sql`
  //   INSERT INTO views (slug, count)
  //   VALUES (${slug}, 1)
  //   ON CONFLICT (slug)
  //   DO UPDATE SET count = views.count + 1
  // `;
}
