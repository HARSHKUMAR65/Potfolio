const fallbackSiteUrl = "https://harsh-portfolio-motion.anesh11.chatgpt.site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, "");

/* ------------------------------------------------------------------
 * Profile data, kept in sync with the resume PDF and LinkedIn (Nov 2026).
 * Every page, the sitemap, llms.txt and structured data read from here.
 * ------------------------------------------------------------------ */

export const profile = {
  name: "Harsh Kumar",
  alternateName: "HARSHKUMAR65",
  title: "Full Stack Developer",
  tagline: "Full Stack Engineer · AI-assisted development & automation",
  experience: "3.5 years",
  email: "harshkumar672001@gmail.com",
  phone: "+91 8800288159",
  whatsapp: "918800288159",
  location: "Gurugram, Haryana, India",
  github: "https://github.com/HARSHKUMAR65",
  linkedin: "https://www.linkedin.com/in/harsh-kumar-1849b61b8/",
  linkedinPosts: "https://www.linkedin.com/in/harsh-kumar-1849b61b8/recent-activity/all/",
  resume: "/Harsh_Kumar_Resume.pdf",
  employer: "TruxWorks",
  summary:
    "Since mid-2023 I've been building web and mobile products for SaaS, FinTech, iGaming, Web3 and AI companies, for clients in the US, Australia and Europe. Most days that means React or Next.js on the front, Node.js or Python behind it, and PostgreSQL, Redis and a job queue holding the whole thing together.",
  description:
    "Harsh Kumar is a Full Stack Developer in Gurugram, India with 3+ years of experience building SaaS, FinTech, iGaming, Web3 and AI-powered products using React, Next.js, React Native, Node.js, Python, PostgreSQL, Redis, BullMQ and AWS. Available for freelance and remote work.",
  skills: [
    "JavaScript", "TypeScript", "Python", "React", "Next.js", "React Native", "Redux", "React Query", "Tailwind CSS",
    "Node.js", "Express.js", "Flask", "REST APIs", "tRPC", "oRPC", "PostgreSQL", "MySQL", "MongoDB", "Prisma", "Drizzle ORM",
    "Redis", "BullMQ", "WebSockets", "Socket.IO", "Server-Sent Events", "AWS", "Docker", "CI/CD", "Stripe", "Twilio",
    "AI-assisted development", "AI automation", "High-Load Systems",
    "System Design", "Multi-Tenant SaaS", "Microservices",
  ],
} as const;

export const skillGroups = [
  { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"] },
  { label: "Frontend & Mobile", items: ["React.js", "Next.js", "Server Actions", "React Native", "Redux", "React Query", "Tailwind CSS", "Material UI", "jQuery", "SSR / ISR"] },
  { label: "Backend & APIs", items: ["Node.js", "Express.js", "Flask", "RESTful APIs", "tRPC", "oRPC", "Webhooks", "Authentication"] },
  { label: "Databases & ORMs", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Drizzle ORM"] },
  { label: "Real-time & Queues", items: ["WebSockets", "Socket.IO", "Firebase", "Postgres LISTEN/NOTIFY", "Server-Sent Events", "Redis", "BullMQ"] },
  { label: "Cloud & DevOps", items: ["AWS EC2", "AWS S3", "AWS ECS", "Load Balancing", "Queue-based Auto Scaling", "Docker", "CI/CD", "Vercel", "Netlify", "Git & GitHub"] },
  { label: "Payments & Messaging", items: ["Stripe (multi-currency subscriptions)", "Razorpay", "PayPal", "Paystack", "Twilio SMS"] },
  { label: "AI & Automation", items: ["AI features inside apps", "AI-assisted development (Claude Code, Cursor)", "AI automation", "Machine Learning", "Deep Learning", "Selenium", "Puppeteer", "BeautifulSoup"] },
  { label: "Architecture & Product", items: ["System Design", "Multi-Tenant SaaS", "High-Load Systems", "Microservices", "Distributed Systems", "Event-Driven Architecture", "App Modernization"] },
] as const;

export const industries = [
  "SaaS and business automation", "iGaming and online gambling platforms", "FinTech and payments", "Web3 apps",
  "high-load and real-time systems", "cloud-native and distributed systems", "AI products", "SaaS for contractors", "modernizing older apps",
] as const;

/** One entry per company; roles inside it are newest first. */
export const experience = [
  {
    company: "TruxWorks",
    period: "Oct 2026 – now",
    current: true,
    location: "Remote, US client (New York)",
    roles: [
      {
        title: "Full Stack Engineer",
        period: "",
        points: [
          "Own the product end to end for a multi-tenant SaaS platform that contractors use to run their business, from requirements and architecture to production releases.",
          "Built contractor dashboards for leads, customers, estimates, projects, scheduling and finances.",
          "Added AI assistance for job planning and business questions, answered from the app's own data.",
          "Built SMS workflows on Twilio, including campaign compliance requirements.",
          "Built a website builder so contractors can create landing pages and manage their business details.",
          "Designed the multi-tenant setup with secure data isolation and admin controls.",
          "Handle debugging, performance and responsive UI work directly with the client.",
        ],
      },
    ],
    stack: "Next.js, React, REST APIs, Twilio, AI integrations, multi-tenant SaaS",
  },
  {
    company: "Brandeducer Digital Solutions",
    period: "Jun 2023 – Oct 2026",
    current: false,
    location: "Gurugram, India",
    roles: [
      {
        title: "Full Stack Engineer",
        period: "Jul 2024 – Oct 2026 · on-site",
        points: [
          "Led a team of four across 10+ SaaS modules in production: code reviews, sprint planning and mentoring junior developers.",
          "Owned 5+ client accounts in Australia and Europe, from requirement calls and scoping to milestones and post-launch support.",
          "Built real-time chat and notifications with Socket.IO across Next.js web apps and React Native mobile apps.",
          "Built an enterprise CRM with real-time lead tracking and analytics dashboards. Sales response time dropped 40%.",
          "Built a multi-tenant background job platform on Redis and BullMQ with 99.9% job reliability under heavy load.",
          "Integrated Stripe multi-currency subscription billing across 3 SaaS platforms, including webhooks and failed-payment recovery.",
          "Tuned PostgreSQL queries through Prisma: average API response times down 35% on the busiest endpoints.",
          "Deployed and maintained apps on AWS, Docker and Vercel.",
        ],
      },
      {
        title: "Frontend Developer",
        period: "Jun 2023 – Jun 2024 · hybrid",
        points: [
          "Built responsive Next.js frontends with SSR and ISR. Key client pages loaded 45% faster.",
          "Wrote 15+ Python scrapers (Selenium, BeautifulSoup) that automated about 90% of manual data research.",
          "Built UI systems with Tailwind CSS, Material UI and Redux across web and mobile.",
        ],
      },
    ],
    stack: "Next.js, React, React Native, Node.js, Python, PostgreSQL, Prisma, Redis, BullMQ, Stripe, Tailwind CSS, AWS",
  },
];


/** Kinds of products built, grouped by domain. Client and product names are left out on purpose. */
export const projects = [
  {
    name: "iGaming & casino",
    description: "Frontends and backends for iGaming and online casino platforms, where lots of players act at the same time: real-time updates over WebSockets, high-load APIs and payment flows.",
    result: "",
    stack: ["Node.js", "WebSockets", "Redis", "PostgreSQL"],
  },
  {
    name: "E-commerce",
    description: "Online stores with product catalogues, carts, checkout and order management, with payments through Stripe, Razorpay, PayPal and Paystack.",
    result: "",
    stack: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
  },
  {
    name: "Marketplaces",
    description: "Multi-sided marketplaces with separate buyer, seller and admin areas: listings, search, orders, payments and notifications.",
    result: "",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"],
  },
  {
    name: "AI assistance",
    description: "AI assistants inside products that answer questions from the app's own data, and AI research tools that turn live trend signals into structured reports with PDF export.",
    result: "99.9% of background jobs complete",
    stack: ["Next.js", "Python", "Redis", "BullMQ"],
  },
  {
    name: "SaaS & CRM",
    description: "Multi-tenant SaaS platforms with secure data isolation, including a CRM with real-time lead tracking and analytics, and an all-in-one platform for contractors.",
    result: "Sales response 40% faster",
    stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    name: "FinTech & payments",
    description: "Multi-currency subscription billing across 3 SaaS platforms, with webhook handling, retries and failed-payment recovery.",
    result: "",
    stack: ["Stripe", "Node.js", "Redis", "BullMQ"],
  },
  {
    name: "Mobile apps",
    description: "React Native apps with sign-in, authenticated APIs, real-time chat and notifications shared with the web version.",
    result: "",
    stack: ["React Native", "Socket.IO", "REST APIs"],
  },
  {
    name: "Web3",
    description: "Web3 application frontends and the APIs behind them.",
    result: "",
    stack: ["React", "Next.js", "Node.js"],
  },
  {
    name: "Tools & content sites",
    description: "Fast, search-friendly sites with calculators, guides, smart search and keyboard navigation, built with server rendering.",
    result: "Pages load 45% faster",
    stack: ["Next.js", "TypeScript", "SSR / ISR"],
  },
] as const;

export const writing = [
  { title: "Stripe will retry your webhook. Your system must not double-charge.", text: "Verify fast, dedupe in Redis with SET NX, queue with BullMQ using the event ID as the job ID, and keep a unique constraint as the final guard." },
  { title: "Scaling workers on queue depth instead of servers", text: "A Redis queue with AWS ECS workers that scale up and down with the backlog, so 100 jobs or 100K jobs cost what they should." },
  { title: "User management with Prisma and Server Actions", text: "Search, cursor pagination and revalidatePath in one place instead of a pile of API routes." },
  { title: "Getting better code out of Claude Code with Skills", text: "Reusable instructions for code review, debugging and framework conventions, improved every time the output is weak." },
  { title: "Why I told a client to rebuild their prototype", text: "Starting over instead of patching an early prototype, and what that taught me about client trust and testing before launch." },
] as const;

export const education = [
  { title: "B.Tech, Computer Science", detail: "STAREX Institute of Education · 2019 – 2023" },
  { title: "JavaScript Algorithms and Data Structures", detail: "freeCodeCamp certification" },
  { title: "Responsive Web Design", detail: "freeCodeCamp certification" },
] as const;

export const seoKeywords = [
  "Harsh Kumar full stack developer",
  "Harsh Kumar software developer",
  "full stack developer India",
  "full stack developer Gurugram",
  "full stack developer Gurgaon",
  "remote full stack developer",
  "Next.js developer India",
  "React developer Gurugram",
  "React Native developer India",
  "Node.js developer India",
  "backend engineer India",
  "SaaS application developer",
  "multi-tenant SaaS developer",
  "real-time application developer",
  "iGaming developer",
  "FinTech payments developer",
  "Web3 developer India",
  "Python automation engineer",
  "AWS cloud developer",
  "PostgreSQL Redis developer",
  "Stripe integration developer",
];

export const lastUpdated = "2026-11-21";

/** Short, unambiguous facts. Shown on the homepage and reused in llms.txt so search and AI answers quote them correctly. */
export const quickFacts = [
  { label: "Role", value: "Full Stack Developer" },
  { label: "Experience", value: "3.5 years (since June 2023)" },
  { label: "Currently", value: "Full Stack Engineer at TruxWorks" },
  { label: "Based in", value: "Gurugram, Haryana, India" },
  { label: "Core stack", value: "React, Next.js, Node.js, Python, PostgreSQL, AWS" },
  { label: "Open to", value: "Remote full stack, frontend, backend and senior engineer roles; freelance" },
] as const;

export const faqItems = [
  { question: "Who is Harsh Kumar?", answer: "I'm a Full Stack Engineer based in Gurugram, India, with 3.5 years of experience building web and mobile products for SaaS, FinTech, iGaming, Web3 and AI companies. I'm currently a Full Stack Engineer at TruxWorks, building a multi-tenant SaaS platform for a US client." },
  { question: "What does Harsh Kumar work with?", answer: "Mostly TypeScript and Python: React, Next.js and React Native on the front end; Node.js, Express, Flask, tRPC and oRPC on the back end; PostgreSQL, MySQL, MongoDB, Prisma and Drizzle for data; Redis, BullMQ, WebSockets and SSE for real-time and background work; AWS, Docker and Vercel for deployment." },
  { question: "Can I hire Harsh Kumar for a freelance project?", answer: "Yes. I take on freelance work: Next.js and React websites, React Native apps, SaaS MVPs, Node.js APIs, payment integrations and Python automation. I work remotely with clients anywhere." },
  { question: "Does Harsh Kumar work with international clients?", answer: "Yes. I currently work remotely for a US client, and before that I handled delivery and post-launch support for 5+ clients in Australia and Europe. I'm open to remote full stack, frontend, backend and senior software engineer roles." },
  { question: "What results has Harsh Kumar delivered?", answer: "A few numbers from past projects: background jobs running at 99.9% reliability, pages loading 45% faster, APIs responding 35% faster, a CRM that made sales response 40% faster, and about 90% less manual research work through automation." },
  { question: "How do I contact Harsh Kumar?", answer: "Email harshkumar672001@gmail.com or message +91 8800288159 on WhatsApp." },
];

export const indexedPages = [
  { path: "/", title: "Harsh Kumar | Full Stack Developer", priority: "1.0", frequency: "weekly" },
  { path: "/about", title: "About Harsh Kumar: Full Stack Developer in Gurugram", priority: "0.9", frequency: "monthly" },
  { path: "/freelance-developer", title: "Freelance Full Stack Developer in India | Harsh Kumar", priority: "0.9", frequency: "monthly" },
  { path: "/services", title: "Hire a Full Stack, Next.js and SaaS Developer", priority: "0.9", frequency: "monthly" },
  { path: "/projects", title: "Projects | Harsh Kumar", priority: "0.8", frequency: "monthly" },
  { path: "/contact", title: "Contact Harsh Kumar: Remote Full Stack Developer", priority: "0.8", frequency: "monthly" },
] as const;
