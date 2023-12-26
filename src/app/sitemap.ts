import { getPostings } from "@/app/db/blog-client";
import { config } from "@/lib/config";

export default async function sitemap() {
  const blogs = (await getPostings()).map((post) => ({
    url: `${config.host}/proverb/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/proverb", "/uses", "/journey"].map((route) => ({
    url: config.host + route,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
