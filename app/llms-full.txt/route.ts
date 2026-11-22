import { education, experience, industries, lastUpdated, profile, projects, siteUrl, skillGroups, writing } from "../site-config";

export const dynamic = "force-static";

/** The complete resume as Markdown, for AI assistants and answer engines. */
export function GET() {
  const lines = [
    `# ${profile.name}, ${profile.title}`,
    "",
    `${profile.location} · ${profile.email} · ${profile.phone}`,
    `Website: ${siteUrl} · GitHub: ${profile.github} · LinkedIn: ${profile.linkedin}`,
    `Last updated: ${lastUpdated}`,
    "",
    "## Summary",
    profile.description,
    "",
    profile.summary,
    "",
    "## Experience",
    ...experience.flatMap((job) => [
      `### ${job.company}`,
      `${job.period} · ${job.location}`,
      "",
      ...job.roles.flatMap((role) => [
        `#### ${role.title}${role.period ? ` (${role.period})` : ""}`,
        ...role.points.map((point) => `- ${point}`),
        "",
      ]),
      `Stack: ${job.stack}`,
      "",
    ]),
    "## What I've built, by domain",
    ...projects.flatMap((area) => [
      `### ${area.name}`,
      area.description,
      `${area.result ? `Result: ${area.result}. ` : ""}Stack: ${area.stack.join(", ")}.`,
      "",
    ]),
    "## Skills",
    ...skillGroups.map((group) => `- ${group.label}: ${group.items.join(", ")}`),
    "",
    "## Industries",
    industries.join(", "),
    "",
    "## Writing",
    ...writing.map((post) => `- ${post.title}: ${post.text}`),
    `Posts: ${profile.linkedinPosts}`,
    "",
    "## Education and certification",
    ...education.map((item) => `- ${item.title}, ${item.detail}`),
    "",
    "## Availability",
    "Open to remote Full Stack Engineer, Frontend Developer, Backend Developer and Senior Software Engineer roles, and freelance projects worldwide.",
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } });
}
