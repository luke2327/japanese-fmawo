import { config } from "@/lib/config";
import { getBlogPosts } from "src/app/db/blog";
import dictionarySitemap from "@/constant/dictionary.sitemap";
import { MetadataRoute } from "next";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${config.host}/proverb/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));
  const dictionary: MetadataRoute.Sitemap = dictionarySitemap.map((url) => ({
    url,
    lastModified: "2023-12-25",
  }));

  let routes: MetadataRoute.Sitemap = [
    "",
    "/proverb",
    "/uses",
    "/journey",
    "/dictionary",
  ].map((route) => ({
    url: config.host + route,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...dictionary];
}
