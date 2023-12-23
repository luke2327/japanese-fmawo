import { BlogPost, MDXData, Metadata } from "@/interface/blog.interface";

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

export function getMDXData(mdxFiles: BlogPost[]): MDXData[] {
  return mdxFiles.map((file) => {
    let { metadata, content } = parseFrontmatter(file.contents);
    let tweetIds = extractTweetIds(content);

    return {
      metadata,
      slug: file.slug,
      tweetIds,
      content,
    };
  });
}
