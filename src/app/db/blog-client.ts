import { MDXData, Metadata, Posting } from "@/interface/blog.interface";
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

export async function getPostings(keyword?: string | null) {
  const datas = await fetcher<Posting[]>(
    `/blog/proverb/list${keyword ? `/${keyword}` : ""}`
  );

  return datas.map((data) => {
    return {
      title: `${data.titleJa} (${data.titleKo})`,
      titleJa: data.titleJa,
      titleKo: data.titleKo,
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
    };
  });
}

export async function getPostingDetail(slug: string) {
  const data = await fetcher<Posting>("/blog/proverb/detail/" + slug);

  return {
    title: `${data.titleJa} (${data.titleKo})`,
    titleJa: data.titleJa,
    titleKo: data.titleKo,
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
