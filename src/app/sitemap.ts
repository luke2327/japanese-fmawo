import { config } from "@/lib/config";
import { getBlogPosts } from "src/app/db/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${config.host}/proverb/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/proverb", "/uses", "/journey"].map((route) => ({
    url: config.host + route,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
