import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://kdtrestaurant.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about/",
    "/blog/",
    "/contact/",
    "/faq/",
    "/menu/",
  ];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}
