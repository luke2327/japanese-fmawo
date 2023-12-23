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
