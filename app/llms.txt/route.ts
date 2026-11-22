import { faqItems, indexedPages, lastUpdated, profile, quickFacts, siteUrl } from "../site-config";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.description}`,
    "",
    `Last updated: ${lastUpdated}. Full resume in Markdown: ${siteUrl}/llms-full.txt`,
    "",
    "## Quick facts",
    `- Name: ${profile.name}`,
    ...quickFacts.map((fact) => `- ${fact.label}: ${fact.value}`),
    "- Current: Full Stack Engineer at TruxWorks (Oct 2026 to now), remote for a US client, multi-tenant SaaS for contractors",
    "- Previous: Brandeducer Digital Solutions, Gurugram: Full Stack Engineer leading a team of 4 (Jul 2024 to Oct 2026), Frontend Developer (Jun 2023 to Jun 2024)",
    "- Industries: SaaS, FinTech and payments, iGaming and online gambling, Web3, high-load and real-time systems, AI products",
    "- Education: B.Tech in Computer Science, STAREX Institute of Education (2019 to 2023); freeCodeCamp certifications in JavaScript Algorithms and Data Structures, and Responsive Web Design",
    `- Technologies: ${profile.skills.join(", ")}`,
    "",
    "## Results from past projects",
    "- 99.9% background job reliability with Redis and BullMQ",
    "- About 45% faster page loads",
    "- About 35% faster API responses through PostgreSQL query tuning",
    "- 40% faster sales response from a custom CRM",
    "- About 90% less manual research work through Python automation",
    "",
    "## Pages",
    ...indexedPages.map((page) => `- [${page.title}](${siteUrl}${page.path === "/" ? "" : page.path})`),
    `- [Resume (PDF)](${siteUrl}${profile.resume})`,
    "",
    "## Frequently asked questions",
    ...faqItems.flatMap((item) => [`### ${item.question}`, item.answer, ""]),
    "## Contact",
    `- Email: ${profile.email}`,
    `- Phone / WhatsApp: ${profile.phone}`,
    `- GitHub: ${profile.github}`,
    `- LinkedIn: ${profile.linkedin}`,
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } });
}
