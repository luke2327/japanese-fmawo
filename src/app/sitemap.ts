/**
 * 이 파일은 웹사이트의 사이트맵을 생성하는 기능을 구현합니다.
 * 사이트맵은 웹사이트의 모든 페이지를 나열하는 XML 파일로, 검색 엔진이 웹사이트를 크롤링하는 데 도움이 됩니다.
 * 이 파일에서는 블로그 게시물과 정적 라우트를 모두 사이트맵에 포함시킵니다.
 *
 * `Sitemap` 타입은 사이트맵 항목의 형식을 정의합니다.
 * `sitemap` 함수는 사이트맵을 생성하고 반환합니다.
 * `blogs` 상수는 블로그 게시물의 사이트맵 항목을 생성합니다.
 * `routes` 상수는 정적 라우트의 사이트맵 항목을 생성합니다.
 */

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
