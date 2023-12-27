import { getPostings } from "@/app/db/blog-client";
import { config } from "@/lib/config";
import { MetadataRoute } from "next";
import dictionarySitemap from "@/constant/dictionary.sitemap";

export default async function sitemap() {
  const blogs = (await getPostings()).map((post) => ({
    url: `${config.host}/proverb/${post.slug}`,
    lastModified: post.publishedAt,
  }));
  const dictionary: MetadataRoute.Sitemap = dictionarySitemap.map((url) => ({
    url,
    lastModified: "2023-12-25",
  }));

  const routes: MetadataRoute.Sitemap = [
    "",
    "/proverb",
    "/uses",
    "/journey",
    "/dictionary",
    "/contents",
  ].map((route) => ({
    url: config.host + route,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...dictionary];
}
