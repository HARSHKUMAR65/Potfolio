import { indexedPages, siteUrl } from "../site-config";

export const dynamic = "force-static";

export function GET() {
  const updated = "2026-08-23";
  const urls = indexedPages.map((page) => `  <url>\n    <loc>${siteUrl}${page.path === "/" ? "" : page.path}</loc>\n    <lastmod>${updated}</lastmod>\n    <changefreq>${page.frequency}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } });
}
