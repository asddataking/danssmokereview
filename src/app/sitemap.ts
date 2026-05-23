import type { MetadataRoute } from "next";
import { getAllReviewSlugs } from "@/lib/data";
import { SITE_URL } from "@/lib/constants";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/scoreboard`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/reviews`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/audio`, changeFrequency: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/subscribe`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${SITE_URL}/media`, changeFrequency: "monthly", priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllReviewSlugs();
  const reviewRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/reviews/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...reviewRoutes];
}
