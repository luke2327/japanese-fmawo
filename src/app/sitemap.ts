import { getBlogPosts } from "src/app/db/blog";
import dictionarySitemap from "@/constant/dictionary.sitemap";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `https://app.maplew.com/proverb/${post.slug}`,
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
    url: `https://app.maplew.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...dictionary];
}
