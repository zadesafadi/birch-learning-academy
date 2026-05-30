import type { MetadataRoute } from "next";
import { siteConfig, programs, blogPosts } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/programs",
    "/curriculum",
    "/nutrition",
    "/safety",
    "/team",
    "/enrollment",
    "/resources",
    "/blog",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...programs.map((program) => ({
      url: `${siteConfig.url}/programs/${program.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
