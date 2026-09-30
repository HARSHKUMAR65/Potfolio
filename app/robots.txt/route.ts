import { siteUrl } from "../site-config";

export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: Googlebot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: Googlebot-Image",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: bingbot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: OAI-SearchBot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "Disallow: /api/",
    "",
    "User-agent: GPTBot",
    "Disallow: /",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } });
}
