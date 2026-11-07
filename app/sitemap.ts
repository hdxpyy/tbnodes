import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

const ROUTES = [
  "",
  "/minecraft",
  "/vps/intel",
  "/vps/ryzen",
  "/features",
  "/network",
  "/about",
  "/support",
  "/faq",
  "/terms",
  "/privacy",
  "/refund",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return ROUTES.map((route) => {
    let priority = 0.8;
    let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route === "/minecraft" || route === "/vps/intel" || route === "/vps/ryzen") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route === "/terms" || route === "/privacy" || route === "/refund") {
      priority = 0.5;
      changeFrequency = "monthly";
    }

    return {
      url: `${SITE.url}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });
}
