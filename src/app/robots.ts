/**
 * 이 파일은 웹사이트의 robots.txt 파일을 생성하는 기능을 구현합니다.
 * robots.txt 파일은 웹 크롤러가 웹사이트를 크롤링할 때 따라야 하는 규칙을 제공합니다.
 * 이 파일에서는 모든 웹 크롤러가 모든 페이지를 크롤링할 수 있도록 설정하고 있습니다.
 * 또한, 사이트맵의 위치와 호스트 정보도 제공합니다.
 *
 * `robots` 함수는 robots.txt 파일의 내용을 반환합니다.
 * `rules` 배열은 웹 크롤러에게 적용할 규칙을 정의합니다.
 * `sitemap` 속성은 사이트맵의 위치를 지정합니다.
 * `host` 속성은 웹사이트의 호스트를 지정합니다.
 */

import { config } from "@/lib/config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "*",
      },
    ],
    sitemap: `${config.host}/sitemap.xml`,
    host: config.host,
  };
}
