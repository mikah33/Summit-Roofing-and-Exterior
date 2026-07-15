import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { towns } from "@/lib/towns";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    ...[
      ["about", 0.8],
      ["gallery", 0.8],
      ["reviews", 0.8],
      ["service-areas", 0.7],
      ["faq", 0.6],
      ["contact", 0.9],
      ["privacy-policy", 0.2],
      ["terms", 0.2],
    ].map(([path, priority]) => ({
      url: `${site.url}/${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: priority as number,
    })),
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const townPages: MetadataRoute.Sitemap = towns.map((t) => ({
    url: `${site.url}/service-areas/${t.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticPages, ...servicePages, ...townPages];
}
