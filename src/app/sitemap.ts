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

  return routes.map((path) => {
    let changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "weekly";
    let priority = 0.5;

    if (path === "/menu/") {
      changeFrequency = "daily";
      priority = 1.0;
    } else if (path === "/") {
      changeFrequency = "weekly";
      priority = 0.8;
    } else {
      changeFrequency = "monthly";
      priority = 0.6;
    }

    return {
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
