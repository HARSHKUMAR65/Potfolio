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
  for (const path of ["/about", "/services", "/projects", "/contact", "/freelance-developer"]) {
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

// Validate the rendered response, not just source metadata declarations.
test("uses correct canonical URLs, unique metadata and valid structured data", async () => {
  const origin = "https://harsh-portfolio-motion.anesh11.chatgpt.site";
  const titles = new Set();
  const descriptions = new Set();
  for (const path of ["/", "/about", "/services", "/projects", "/contact", "/freelance-developer"]) {
    const response = await request(path);
    const html = await response.text();
    assert.equal(response.status, 200);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title, `${path} has a title`);
    assert.ok(!titles.has(title), `${path} title is unique`);
    titles.add(title);
    const description = html.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/)?.[1];
    assert.ok(description, `${path} has a description`);
    assert.ok(!descriptions.has(description), `${path} description is unique`);
    descriptions.add(description);
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)?.[1];
    assert.equal(canonical?.replace(/\/$/, ""), origin + (path === "/" ? "" : path));
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path} has one main heading`);
    assert.doesNotMatch(html, /responsive-3d-redesign\.anesh11/);
    assert.doesNotMatch(html, /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/);
    const schemas = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
    assert.ok(schemas.length, `${path} exposes structured data without JavaScript`);
    for (const [,schema] of schemas) assert.doesNotThrow(() => JSON.parse(schema));
    if (path !== "/") assert.match(html, /BreadcrumbList/);
  }
});

test("freelance service content is linked and crawlable without client JavaScript", async () => {
  const home = await (await request("/")).text();
  const freelance = await (await request("/freelance-developer")).text();
  const sitemap = await (await request("/sitemap.xml")).text();
  assert.match(home, /href="\/freelance-developer"/);
  assert.match(freelance, /SaaS MVP development/);
  assert.match(freelance, /Discuss your freelance project/);
  assert.match(sitemap, /harsh-portfolio-motion\.anesh11\.chatgpt\.site\/freelance-developer/);
  assert.doesNotMatch(sitemap, /responsive-3d-redesign/);
});

test("contact endpoint rejects malformed input before trying SMTP", async () => {
  const send = (body, headers = {}) => worker.fetch(new Request('http://localhost/api/contact', { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body }), {}, { waitUntil() {}, passThroughOnException() {} });
  for (const body of ['{broken', 'null', '[]', JSON.stringify({name: 42, email: 'test@example.com', message: 'Test'}), JSON.stringify({name: 'Test', email: 'invalid', message: 'Test'})]) {
    assert.equal((await send(body)).status, 400);
  }
  const valid = JSON.stringify({name: 'Test Visitor', email: 'test@example.com', project: 'Website', message: 'Local validation test only.'});
  assert.equal((await send(valid, {origin: 'https://unrelated.example'})).status, 403);
  const response = await send(valid);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await response.json(), {ok: true, demo: true});
});
