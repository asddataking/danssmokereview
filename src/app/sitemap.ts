import type { MetadataRoute } from "next";
import { productReviews } from "@/data/seed";
import { SITE_URL } from "@/lib/constants";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/scoreboard`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/reviews`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/audio`, changeFrequency: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const reviewRoutes: MetadataRoute.Sitemap = productReviews.map((review) => ({
    url: `${SITE_URL}/reviews/${review.slug}`,
    lastModified: new Date(review.createdAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...reviewRoutes];
}
