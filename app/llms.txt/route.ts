import { faqItems, indexedPages, profile, siteUrl } from "../site-config";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${profile.name} — ${profile.title}`,
    "",
    `> ${profile.description}`,
    "",
    "## Professional profile",
    `- Name: ${profile.name}`,
    `- Role: ${profile.title}`,
    `- Location: ${profile.location}`,
    "- Availability: Remote worldwide and international clients",
    "- Experience: 3+ years; 10+ production SaaS modules; 5+ international client accounts",
    "- Leadership: Led a four-person full-stack engineering team",
    `- Technologies: ${profile.skills.join(", ")}`,
    "",
    "## Verified outcomes",
    "- 99.9% background job reliability with Redis and BullMQ",
    "- 45% faster page loads using Next.js SSR and ISR optimization",
    "- 35% lower API response times through PostgreSQL and Prisma optimization",
    "- 40% faster CRM sales response",
    "- 90% reduction in manual research through Python automation",
    "",
    "## Main pages",
    ...indexedPages.map((page) => `- [${page.title}](${siteUrl}${page.path === "/" ? "" : page.path})`),
    "",
    "## Frequently asked questions",
    ...faqItems.flatMap((item) => [`### ${item.question}`, item.answer, ""]),
    "## Contact and professional profiles",
    `- Email: ${profile.email}`,
    `- Phone / WhatsApp: ${profile.phone}`,
    `- GitHub: ${profile.github}`,
    `- LinkedIn: ${profile.linkedin}`,
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } });
}
