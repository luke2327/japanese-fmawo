import { getPostings } from "@/app/db/blog-client";
import { config } from "@/lib/config";
import type { MetadataRoute } from "next";

type Sitemap = MetadataRoute.Sitemap;

export default async function sitemap(): Promise<Sitemap> {
  const blogs: Sitemap = (await getPostings()).map((post) => ({
    url: `${config.host}/proverb/${post.slug}`,
    lastModified: post.publishedAt.split(" ")[0],
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const routes: Sitemap = ["", "/proverb", "/uses", "/journey"].map(
    (route) => ({
      url: config.host + route,
      lastModified: new Date().toISOString().split("T")[0],
      priority: 1,
    })
  );

  return [...routes, ...blogs];
}
