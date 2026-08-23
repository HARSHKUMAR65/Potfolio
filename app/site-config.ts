const fallbackSiteUrl = "https://responsive-3d-redesign.anesh11.chatgpt.site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, "");

export const profile = {
  name: "Harsh Kumar",
  alternateName: "HARSHKUMAR65",
  title: "Senior Full Stack Developer & Technical Lead",
  email: "harshkumar672001@gmail.com",
  phone: "+91 8800288159",
  whatsapp: "918800288159",
  location: "Gurugram, Haryana, India",
  github: "https://github.com/HARSHKUMAR65",
  linkedin: "https://www.linkedin.com/in/harsh-kumar-1849b61b8/",
  employer: "Brandeducer Digital Solutions",
  description:
    "Harsh Kumar is a Senior Full Stack Developer and Technical Lead based in Gurugram, India, specializing in Next.js, React, Node.js, SaaS development, real-time systems, AWS, PostgreSQL, Redis, BullMQ, and Python automation.",
  skills: [
    "Next.js", "React", "React Native", "TypeScript", "JavaScript", "Node.js", "Express.js", "Python",
    "PostgreSQL", "MongoDB", "Prisma", "Redis", "BullMQ", "Socket.IO", "WebSockets", "AWS",
    "Docker", "Stripe", "SaaS Architecture", "AI Automation", "Technical Leadership", "System Design",
  ],
} as const;

export const seoKeywords = [
  "Harsh Kumar full stack developer",
  "Harsh Kumar software engineer",
  "senior full stack developer India",
  "full stack developer Gurugram",
  "full stack developer Gurgaon",
  "remote full stack developer",
  "Next.js developer India",
  "React developer Gurugram",
  "Node.js developer India",
  "hire senior full stack developer",
  "technical lead India",
  "SaaS application developer",
  "SaaS architect India",
  "real-time application developer",
  "AI automation developer",
  "Python automation engineer",
  "AWS cloud developer",
  "PostgreSQL Redis developer",
  "Stripe integration developer",
  "full stack product engineer",
];

export const faqItems = [
  {
    question: "Who is Harsh Kumar?",
    answer:
      "Harsh Kumar is a Senior Full Stack Developer and Technical Lead based in Gurugram, Haryana, India. He has more than three years of experience building SaaS platforms, enterprise CRM products, real-time applications, and automation systems for international clients.",
  },
  {
    question: "Which technologies does Harsh Kumar work with?",
    answer:
      "His core technologies include Next.js, React, React Native, TypeScript, JavaScript, Node.js, Express.js, Python, PostgreSQL, MongoDB, Prisma, Redis, BullMQ, Socket.IO, AWS, Docker, and Stripe.",
  },
  {
    question: "Can Harsh Kumar work remotely or with international clients?",
    answer:
      "Yes. Harsh is open to remote full-stack developer, senior software engineer, product engineer, and technical lead opportunities. He has managed Australian and European client accounts from discovery through deployment and support.",
  },
  {
    question: "What kinds of software projects can Harsh Kumar build?",
    answer:
      "He builds custom SaaS platforms, React and Next.js websites, enterprise CRM systems, real-time chat and notification systems, subscription products, background job platforms, AI-assisted workflows, and Python automation tools.",
  },
  {
    question: "What results has Harsh Kumar delivered?",
    answer:
      "His work includes 99.9% background job reliability, 45% faster page loads, 35% faster API response times, 40% faster sales response, and automation of 90% of manual research workflows.",
  },
  {
    question: "How can I hire or contact Harsh Kumar?",
    answer:
      "Email harshkumar672001@gmail.com or contact him on WhatsApp at +91 8800288159 to discuss full-stack development, Next.js, SaaS architecture, automation, or technical leadership opportunities.",
  },
];

export const indexedPages = [
  { path: "/", title: "Harsh Kumar — Senior Full Stack Developer", priority: "1.0", frequency: "weekly" },
  { path: "/about", title: "About Harsh Kumar — Full Stack Developer in Gurugram", priority: "0.9", frequency: "monthly" },
  { path: "/services", title: "Hire a Full Stack, Next.js and SaaS Developer", priority: "0.9", frequency: "monthly" },
  { path: "/projects", title: "SaaS Projects and Full Stack Engineering Case Studies", priority: "0.8", frequency: "monthly" },
  { path: "/contact", title: "Contact Harsh Kumar — Remote Full Stack Developer", priority: "0.8", frequency: "monthly" },
] as const;
