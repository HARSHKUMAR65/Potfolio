# Harsh Kumar — Immersive 3D Developer Portfolio

A production-ready, responsive developer portfolio for Harsh Kumar, Senior Full
Stack Developer and Technical Lead. The site combines a custom animated WebGL
experience with substantive, crawlable professional-profile pages.

## Included experience

- Real WebGL 3D hero with pointer movement, animated orbital geometry, and
  scroll-driven transitions.
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
- `/sitemap.xml` lists all five public profile pages.
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
