import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

function request(path, accept = "text/html") {
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the crawlable professional portfolio", async () => {
  const response = await request("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(html, /Harsh Kumar/);
  assert.match(html, /Senior Full Stack Developer/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /name=["']codex-preview["']/i);
  assert.doesNotMatch(response.headers.get("x-robots-tag") ?? "", /noindex/i);
});

test("renders every indexable profile page", async () => {
  for (const path of ["/about", "/services", "/projects", "/contact"]) {
    const response = await request(path);
    const html = await response.text();

    assert.equal(response.status, 200, `${path} should render`);
    assert.match(html, /Harsh Kumar/, `${path} should identify its author`);
  }
});

test("allows Google and OpenAI search crawlers", async () => {
  const response = await request("/robots.txt", "text/plain");
  const robots = await response.text();

  assert.equal(response.status, 200);
  assert.match(robots, /User-agent: Googlebot/);
  assert.match(robots, /User-agent: OAI-SearchBot\nAllow: \//);
  assert.match(robots, /Sitemap: https:\/\/[^\s]+\/sitemap\.xml/);
});

test("publishes the sitemap and AI-readable professional profile", async () => {
  const sitemapResponse = await request("/sitemap.xml", "application/xml");
  const sitemap = await sitemapResponse.text();
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemap, /<urlset/);
  assert.match(sitemap, /\/services<\/loc>/);
  assert.match(sitemap, /\/contact<\/loc>/);

  const profileResponse = await request("/llms.txt", "text/plain");
  const profile = await profileResponse.text();
  assert.equal(profileResponse.status, 200);
  assert.match(profile, /Harsh Kumar/);
  assert.match(profile, /Next\.js/);
});
