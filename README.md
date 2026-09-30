# Harsh Kumar — Light Motion Portfolio

A production-ready, responsive developer portfolio for Harsh Kumar, Senior Full
Stack Developer and Technical Lead. The site combines a warm light theme, coordinated GSAP motion, and
substantive, crawlable professional-profile pages.

## Included experience

- Letter-by-letter hero reveal, lightweight animated orbital artwork, and
  scroll-driven transitions. No remote image dependency for the hero.
- Responsive layouts, mobile navigation, accessible controls, and reduced-motion
  support.
- Complete developer profile, technical stack, experience, results, case studies,
  service offerings, and availability.
- Working WhatsApp and SMTP-backed email enquiry forms. Email enquiries are sent
  via `POST /api/contact`.
- Dedicated indexable pages at `/about`, `/services`, `/projects`, and `/contact`.
- Professional social links, branded favicon, social-share image, and web-app
  manifest.

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

For a production artifact:

```bash
npm run build
node --test tests/rendered-html.test.mjs
```

## Public domain and search configuration

Set these variables in your hosting platform when using your own domain:

```dotenv
NEXT_PUBLIC_SITE_URL=https://your-public-domain.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-optional-verification-token
```

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, social metadata, structured data,
the sitemap, and AI-readable profile links. The default is the included hosted
portfolio URL. Google verification is optional and only needed when Search
Console asks for an HTML verification token.

The following discovery endpoints are generated automatically:

- `/robots.txt` permits Googlebot, Bingbot, OpenAI's `OAI-SearchBot`, and other
  search crawlers. `GPTBot` is blocked independently from search indexing.
- `/sitemap.xml` lists all six profile and freelance pages.
- `/llms.txt` provides a concise machine-readable professional profile.
- JSON-LD includes `Person`, `ProfilePage`, `WebSite`, `FAQPage`, and `Service`
  structured data where relevant.

After the public domain is live, verify it in Google Search Console and submit
`https://your-public-domain.com/sitemap.xml`. Search engines and AI search
providers control their own crawl timing, inclusion, and ranking.

## Update profile details

Change name, contact information, professional links, skills, search keywords,
and common questions in `app/site-config.ts`. Page content lives under `app/`;
global styling is in `app/globals.css`.


## Light motion edition

The original portfolio content and routes are preserved, with a redesigned warm-white, charcoal and orange visual theme. New motion is loaded by `app/components/motion-director.tsx` and coordinated in `app/components/motion-runtime.ts` using GSAP and ScrollTrigger. It includes an opening text reveal, scroll parallax, three sticky story chapters, a horizontal desktop project sequence, number counters, section reveals, a growing experience timeline, magnetic buttons, an active navigation indicator, and animated FAQ answers. Smaller screens use natural vertical layouts. Reduced-motion preferences turn off heavy effects. Animation contexts, observers and event listeners are cleaned up on route changes.

### Run this source archive

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

Open the address printed by Vite. For a portable production build, run `npx vinext build`; the original Linux build helper remains available as `npm run build`. Type checking: `npx tsc --noEmit`.

### Contact preview

The contact form validates input and displays an explicit demo confirmation when SMTP credentials are absent. It does not send or store a message in demo mode. The original SMTP implementation is retained for compatible Node/Netlify hosting with your own environment configuration; the Sites preview is demo only. WhatsApp opens a draft for the visitor to send.

An embedded mail credential from the uploaded source has been removed. Revoke/rotate that previously exposed credential and configure a replacement only via environment variables. Credentials are excluded from Git and the deployed source. The private SMTP source archive includes your requested `.env.local` configuration; keep that archive private. Dependency folders and build output are excluded.

## Freelance SEO and faster motion

The homepage is server-rendered; only navigation, forms and motion hydrate on the client. GSAP is a separate dynamic chunk, loaded after the first paint and skipped for reduced-motion visitors. Offscreen hero loops pause. Scroll headings, staggered expertise cards, the moving typography strip, project charts and toolkit lines use one motion owner with route cleanup.

The freelance page at `/freelance-developer` includes services, engagement process and FAQs. All six pages have unique titles and descriptions, self-referencing canonicals, internal links and structured data; inner pages include breadcrumbs. Sitemap dates reflect the September 29, 2026 content update. JSON-LD does not imply a Google rich-result guarantee.

### Going live on Google

The current Sites preview is owner-private. Google cannot crawl a login-protected page. Make the intended production website public before expecting indexing. If publishing to another domain, set `NEXT_PUBLIC_SITE_URL` to that origin before building. Add your Google Search Console verification token as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, verify the property and submit `/sitemap.xml`. Do not paste a Search Console password into this project. Indexing and ranking are controlled by Google; no rankings or PageSpeed score are guaranteed.

Run `node --test tests/rendered-html.test.mjs` after a production build to check actual HTML metadata, schema JSON, canonical URLs, headings and discovery routes. These source checks do not test the hosting access gate.

References: https://developers.google.com/search/docs/essentials/technical and https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## SMTP email (Node.js hosting)

The private SMTP ZIP contains `.env.local` using the email and app password from your original upload. It is ignored by Git and is not included in the Sites deployment. Enquiries are addressed to `SMTP_TO`; the visitor is set as Reply-To, not as the sender.

```sh
npm ci
npm run smtp:verify
npm run build:node
npm run start:node
```

Use a Node.js host that permits outbound SMTP, and set the SMTP values as private server environment variables there. `smtp:verify` checks connection and authentication without sending a message. Form success is returned only when the SMTP server accepts the recipient. SMTP acceptance does not guarantee inbox placement.

The current Sites preview cannot make direct SMTP connections and remains an explicitly labeled demo. Its production environment has no mail password configured. The authoring environment could not resolve the SMTP hostname, so a real authentication/delivery test has not been completed. Run verification on your intended Node.js host before relying on email delivery.
