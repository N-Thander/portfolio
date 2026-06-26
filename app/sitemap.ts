import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/data/site";
import { navItems } from "@/content/data/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const pages = navItems.map((item) => ({
    url: `${base}${item.href}`,
    lastModified: now,
  }));

  return [{ url: base, lastModified: now }, ...pages];
}
