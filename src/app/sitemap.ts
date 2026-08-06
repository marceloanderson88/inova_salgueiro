import type { MetadataRoute } from "next";

import { gts } from "@/content/gts";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const paginas = [
    { url: "/", priority: 1, changeFrequency: "weekly" as const },
    { url: "/o-que-e", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/gts", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/desafios", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/como-participar", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/contato", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/privacidade", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/termos", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return [
    ...paginas.map((pagina) => ({
      url: `${site.url}${pagina.url}`,
      lastModified: agora,
      changeFrequency: pagina.changeFrequency,
      priority: pagina.priority,
    })),
    ...gts.map((gt) => ({
      url: `${site.url}/gts/${gt.slug}`,
      lastModified: agora,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
