"use client";

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import ContactForm from "./components/contact-form";
import { faqItems, profile, siteUrl } from "./site-config";

const competencies = [
  { number: "01", title: "SaaS Architecture", description: "Scalable modules, multi-tenant products, and production-ready platform foundations.", tags: ["System design", "Multi-tenant", "Scale"] },
  { number: "02", title: "Technical Leadership", description: "Planning, code reviews, mentoring, and delivery ownership across a four-person team.", tags: ["Team lead", "Mentoring", "Delivery"] },
  { number: "03", title: "Full Stack Engineering", description: "Fast, accessible products across React, Next.js, Node.js, APIs, and databases.", tags: ["Next.js", "Node.js", "React"] },
  { number: "04", title: "Real-time Systems", description: "Responsive chat, notifications, WebSocket flows, and concurrent user experiences.", tags: ["Socket.io", "WebSockets", "Events"] },
  { number: "05", title: "Client Partnership", description: "Clear ownership from discovery and scoping through launch and long-term support.", tags: ["Scoping", "Milestones", "Support"] },
  { number: "06", title: "Performance", description: "Faster APIs, sharper queries, optimized rendering, and reliable background processing.", tags: ["PostgreSQL", "SSR / ISR", "BullMQ"] },
];

const projects = [
  {
    index: "01",
    name: "Trend2SaaS",
    type: "AI-powered trend analysis platform",
    description: "Transforms live trend signals into structured SaaS opportunities—complete with problem, audience, monetization, and why-now insight.",
    stack: ["Next.js", "Python", "Redis", "BullMQ"],
    outcomes: ["99.9% reliable asynchronous analysis workflow", "One-click structured PDF report generation", "Architecture built for real-time AI expansion"],
    signal: "AI workflow",
  },
  {
    index: "02",
    name: "Claritools",
    type: "Calculator and practical guide platform",
    description: "A search-first public product that helps users discover useful finance, career, and technology tools in fewer steps.",
    stack: ["Next.js", "Search UX", "Responsive UI", "SEO"],
    outcomes: ["Keyboard-friendly discovery experience", "Useful tools reachable in fewer than three clicks", "Fast, accessible, production-ready frontend"],
    signal: "Product UX",
  },
];

const stackGroups = [
  { label: "Languages", items: "JavaScript · TypeScript · Python · SQL" },
  { label: "Frontend", items: "Next.js · React · React Native · Tailwind" },
  { label: "Backend", items: "Node.js · Express · Flask · REST APIs" },
  { label: "Data", items: "PostgreSQL · MongoDB · Prisma · Redis" },
  { label: "Cloud", items: "AWS · Docker · CI/CD · Vercel" },
  { label: "Systems", items: "BullMQ · Socket.io · WebSockets" },
  { label: "Payments", items: "Stripe · Subscriptions · Webhooks" },
  { label: "Automation", items: "Selenium · Puppeteer · BeautifulSoup" },
];

const homepageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Harsh Kumar — Senior Full Stack Developer and Technical Lead",
      dateCreated: "2026-08-23",
      dateModified: "2026-08-23",
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ],
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={diagonal ? "M7 17 17 7M8 7h9v9" : "M5 12h14M13 6l6 6-6 6"} /></svg>;
}

const vertexShaderSource = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShaderSource = `
precision highp float;

uniform vec2 resolution;
uniform vec2 pointer;
uniform float time;
uniform float scroll;

mat2 rotation(float angle) {
  float sine = sin(angle);
  float cosine = cos(angle);
  return mat2(cosine, -sine, sine, cosine);
}

float torus(vec3 point, vec2 size) {
  vec2 ring = vec2(length(point.xz) - size.x, point.y);
  return length(ring) - size.y;
}

float capsule(vec3 point, vec3 a, vec3 b, float radius) {
  vec3 delta = point - a;
  vec3 axis = b - a;
  float projection = clamp(dot(delta, axis) / dot(axis, axis), 0.0, 1.0);
  return length(delta - axis * projection) - radius;
}

float scene(vec3 point) {
  point.xz *= rotation(time * 0.24 + scroll * 1.35 + pointer.x * 0.34);
  point.xy *= rotation(0.35 + scroll * 0.53 + pointer.y * 0.23);

  vec3 ringA = point;
  ringA.yz *= rotation(0.62 + sin(time * 0.37) * 0.13);
  float outerRing = torus(ringA, vec2(1.31, 0.11));

  vec3 ringB = point;
  ringB.xy *= rotation(1.57);
  ringB.yz *= rotation(time * 0.18 + scroll * 0.72);
  float middleRing = torus(ringB, vec2(1.04, 0.078));

  vec3 ringC = point;
  ringC.xz *= rotation(0.7);
  ringC.xy *= rotation(time * -0.35);
  float innerRing = torus(ringC, vec2(0.76, 0.055));

  float core = length(point) - (0.39 + sin(time * 0.9) * 0.025);
  vec3 satellitePoint = point - vec3(cos(time * 0.73) * 1.3, sin(time * 0.73) * 0.2, sin(time * 0.73) * 1.3);
  float satellite = length(satellitePoint) - 0.11;
  float axis = capsule(point, vec3(-1.64, 0.0, 0.0), vec3(1.64, 0.0, 0.0), 0.012);

  return min(min(min(outerRing, middleRing), min(innerRing, core)), min(satellite, axis));
}

vec3 surfaceNormal(vec3 point) {
  vec2 offset = vec2(0.002, 0.0);
  return normalize(vec3(
    scene(point + offset.xyy) - scene(point - offset.xyy),
    scene(point + offset.yxy) - scene(point - offset.yxy),
    scene(point + offset.yyx) - scene(point - offset.yyx)
  ));
}

float random(vec2 point) {
  return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y;
  float screenRatio = resolution.x / resolution.y;
  float mobile = step(screenRatio, 0.85);
  uv.x -= mix(0.17, 0.0, mobile) * (1.0 - min(scroll * 0.55, 1.0));
  uv.y += mix(0.0, 0.08, mobile);

  vec3 origin = vec3(0.0, 0.0, 5.4 + sin(scroll * 0.32) * 0.42);
  vec3 ray = normalize(vec3(uv * mix(2.35, 2.85, mobile), -2.55));
  ray.xz *= rotation(pointer.x * 0.055);
  ray.yz *= rotation(pointer.y * 0.04);

  vec3 color = vec3(0.010, 0.011, 0.024);
  float distanceTravelled = 0.0;
  float glow = 0.0;
  bool hit = false;

  for (int index = 0; index < 76; index++) {
    vec3 point = origin + ray * distanceTravelled;
    float distanceToScene = scene(point);
    glow += 0.0045 / (0.04 + abs(distanceToScene) * 11.0);

    if (distanceToScene < 0.0017) {
      vec3 normal = surfaceNormal(point);
      vec3 keyLight = normalize(vec3(-2.0, 2.8, 3.0));
      vec3 fillLight = normalize(vec3(2.8, -1.4, 2.0));
      float key = max(dot(normal, keyLight), 0.0);
      float fill = max(dot(normal, fillLight), 0.0);
      float rim = pow(1.0 - max(dot(normal, -ray), 0.0), 2.2);
      vec3 cyan = vec3(0.11, 0.92, 1.0);
      vec3 violet = vec3(0.54, 0.22, 1.0);
      vec3 silver = vec3(0.8, 0.88, 1.0);
      color += cyan * key * 0.7 + violet * fill * 0.52 + silver * rim * 0.75;
      color += cyan * 0.11 + violet * 0.06;
      hit = true;
      break;
    }

    distanceTravelled += distanceToScene * 0.68;
    if (distanceTravelled > 10.0) break;
  }

  color += vec3(0.06, 0.53, 0.85) * glow * 0.56;
  color += vec3(0.37, 0.12, 0.72) * glow * 0.35;

  float grain = random(gl_FragCoord.xy + time * 3.0) * 0.028;
  color += grain * vec3(0.4, 0.44, 0.58);
  color *= 1.0 - smoothstep(0.38, 1.2, length(uv)) * 0.54;
  if (!hit) color += vec3(0.007, 0.011, 0.022);

  gl_FragColor = vec4(pow(color, vec3(0.9)), 1.0);
}`;

function WebGLScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "high-performance" });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertex = compile(gl.VERTEX_SHADER, vertexShaderSource);
    const fragment = compile(gl.FRAGMENT_SHADER, fragmentShaderSource);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return;

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "resolution");
    const pointer = gl.getUniformLocation(program, "pointer");
    const time = gl.getUniformLocation(program, "time");
    const scroll = gl.getUniformLocation(program, "scroll");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let currentPointerX = 0;
    let currentPointerY = 0;
    let currentScroll = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, window.innerWidth < 760 ? 1 : 1.4);
      canvas.width = Math.round(window.innerWidth * ratio);
      canvas.height = Math.round(window.innerHeight * ratio);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolution, canvas.width, canvas.height);
    };

    const onPointerMove = (event: globalThis.PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const draw = (now: number) => {
      currentPointerX += (pointerX - currentPointerX) * 0.045;
      currentPointerY += (pointerY - currentPointerY) * 0.045;
      currentScroll += (window.scrollY / Math.max(window.innerHeight, 1) - currentScroll) * 0.065;
      gl.uniform2f(pointer, currentPointerX, currentPointerY);
      gl.uniform1f(time, reduceMotion.matches ? 0 : now * 0.001);
      gl.uniform1f(scroll, currentScroll);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = window.requestAnimationFrame(draw);
    };

    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl-scene" aria-label="Interactive three-dimensional animated scene" role="img" />;
}

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    cardRef.current.style.setProperty("--tilt-x", `${(0.5 - y) * 9}deg`);
    cardRef.current.style.setProperty("--tilt-y", `${(x - 0.5) * 11}deg`);
    cardRef.current.style.setProperty("--spot-x", `${x * 100}%`);
    cardRef.current.style.setProperty("--spot-y", `${y * 100}%`);
  };

  const resetTilt = () => {
    cardRef.current?.style.setProperty("--tilt-x", "0deg");
    cardRef.current?.style.setProperty("--tilt-y", "0deg");
  };

  return <div ref={cardRef} className={`tilt-card ${className}`} onPointerMove={onPointerMove} onPointerLeave={resetTilt}>{children}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let scrollFrame = 0;
    let pointerFrame = 0;

    const updateScroll = () => {
      const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / scrollable, 1);
      const heroProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      const manifesto = document.getElementById("manifesto");
      const chapterDistance = manifesto ? Math.max(manifesto.offsetHeight - window.innerHeight, 1) : 1;
      const chapterProgress = manifesto ? Math.max(0, Math.min((window.scrollY - manifesto.offsetTop) / chapterDistance, 1)) : 0;
      root.style.setProperty("--page-progress", progress.toFixed(4));
      root.style.setProperty("--hero-progress", heroProgress.toFixed(4));
      root.style.setProperty("--scene-progress", chapterProgress.toFixed(4));
      root.style.setProperty("--scroll-shift", `${Math.min(window.scrollY * 0.12, 120)}px`);
      scrollFrame = 0;
    };

    const scheduleScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
    };

    const updatePointer = (event: globalThis.PointerEvent) => {
      if (event.pointerType === "touch" || pointerFrame) return;
      pointerFrame = window.requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", ((event.clientX / window.innerWidth - 0.5) * 2).toFixed(3));
        root.style.setProperty("--pointer-y", ((event.clientY / window.innerHeight - 0.5) * 2).toFixed(3));
        pointerFrame = 0;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("in-view"); });
    }, { threshold: 0.14, rootMargin: "0px 0px -7% 0px" });

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element, index) => {
      element.style.setProperty("--reveal-order", String(index % 6));
      observer.observe(element);
    });

    updateScroll();
    window.addEventListener("scroll", scheduleScroll, { passive: true });
    window.addEventListener("resize", scheduleScroll);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      observer.disconnect();
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      window.removeEventListener("scroll", scheduleScroll);
      window.removeEventListener("resize", scheduleScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData).replace(/</g, "\\u003c") }} />
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <WebGLScene />
      <div className="film-grain" aria-hidden="true" />
      <div className="world-layer" aria-hidden="true"><div className="world-grid" /><div className="world-glow world-glow-one" /><div className="world-glow world-glow-two" /></div>

      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Harsh Kumar home">
          <span className="brand-mark">HK</span><span className="brand-copy">Harsh Kumar<small>Full Stack Engineer</small></span>
        </a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="/services" onClick={closeMenu}>Services</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#stack" onClick={closeMenu}>Stack</a>
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <Arrow /></a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
      </header>

      <main id="main">
        <section className="cinematic-hero" id="top">
          <div className="hero-coordinates"><span>28.4595° N</span><span>77.0266° E</span></div>
          <div className="cinematic-copy" data-reveal>
            <div className="eyebrow"><i /> Senior full stack engineer · technical lead</div>
            <h1 aria-label="Harsh Kumar — Senior Full Stack Developer, Next.js Engineer and Technical Lead"><span>HARSH</span><span>KUMAR</span></h1>
            <p>Senior full stack developer in Gurugram, India creating immersive digital products, scalable SaaS platforms, real-time systems, and intelligent automation. Available remotely worldwide.</p>
            <div className="cinematic-actions"><a className="button button-primary" href="/#contact">Start a project <Arrow /></a><a className="button button-ghost" href="#work">Selected work <Arrow /></a></div>
          </div>
          <div className="hero-index"><span>AVAILABLE WORLDWIDE</span><span>EST. 2023</span></div>
          <a className="cinematic-scroll" href="#manifesto"><span>SCROLL TO EXPLORE</span><i /></a>
        </section>

        <section className="manifesto-section" id="manifesto">
          <div className="manifesto-sticky">
            <div className="manifesto-copy" data-reveal><p className="section-kicker">ENGINEERING × EXPERIENCE</p><h2>I don&apos;t just<br /><span>build websites.</span><br />I build <em>impact.</em></h2><p>From architecture to animation, every detail is designed to move the product—and the business—forward.</p></div>
            <div className="manifesto-metrics"><div><strong>10+</strong><span>PRODUCT MODULES</span></div><div><strong>99.9%</strong><span>JOB RELIABILITY</span></div><div><strong>45%</strong><span>FASTER EXPERIENCE</span></div></div>
          </div>
        </section>

        <div className="capability-marquee" aria-label="Engineering capabilities"><div><span>FULL STACK ENGINEERING</span><i>✳</i><span>IMMERSIVE WEB</span><i>✳</i><span>SAAS ARCHITECTURE</span><i>✳</i><span>AI AUTOMATION</span><i>✳</i><span>REAL-TIME SYSTEMS</span><i>✳</i><span>FULL STACK ENGINEERING</span><i>✳</i><span>IMMERSIVE WEB</span><i>✳</i><span>SAAS ARCHITECTURE</span><i>✳</i></div></div>

        <section className="section-wrap content-section" id="expertise">
          <div className="section-heading" data-reveal>
            <p className="section-kicker">01 / EXPERTISE</p><h2>Strategy in the front.<br /><em>Strong systems</em> underneath.</h2>
            <p>I combine product thinking, engineering depth, and delivery leadership to move ambitious ideas into production.</p>
          </div>
          <div className="competency-grid">
            {competencies.map((item) => <TiltCard key={item.title} className="competency-card"><article data-reveal><div className="card-number">{item.number}</div><h3>{item.title}</h3><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="card-axis" aria-hidden="true" /></article></TiltCard>)}
          </div>
        </section>

        <section className="section-wrap content-section projects-section" id="work">
          <div className="section-heading split-heading" data-reveal>
            <div><p className="section-kicker">02 / SELECTED WORK</p><h2>Built to solve.<br /><em>Designed to scale.</em></h2></div>
            <p>Two focused products combining dependable architecture with simple, useful user experiences.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => <TiltCard className="project-card" key={project.name}><article data-reveal>
              <div className="project-head"><span className="project-index">{project.index}</span><span className="project-signal"><i /> {project.signal}</span></div>
              <div className="project-body">
                <div className="project-main"><p>{project.type}</p><h3>{project.name}</h3><div className="tag-row stack-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
                <p className="project-description">{project.description}</p><ul>{project.outcomes.map((outcome) => <li key={outcome}><span>↗</span>{outcome}</li>)}</ul>
              </div><div className="project-plane" aria-hidden="true"><span /><span /><span /></div>
            </article></TiltCard>)}
          </div>
        </section>

        <section className="section-wrap content-section experience-section" id="experience">
          <div className="experience-intro" data-reveal>
            <p className="section-kicker">03 / EXPERIENCE</p><h2>Leading from<br /><em>idea to impact.</em></h2>
            <p>Hands-on engineering leadership with ownership across product architecture, team delivery, and global client relationships.</p>
            <div className="availability-card"><i /><span>Open to senior engineering<br />and technical lead roles</span></div>
          </div>
          <div className="timeline" data-reveal>
            <div className="timeline-rail"><i /></div>
            <article className="timeline-card">
              <div className="timeline-meta"><span>MAY 2023 — PRESENT</span><span>GURGAON · INDIA · REMOTE</span></div>
              <p className="company">Brandeducer Digital Solutions</p><h3>Full Stack Developer<br />&amp; Team Lead</h3>
              <p className="timeline-summary">Leading full-stack delivery across SaaS, CRM, real-time systems, automation tools, and high-performance web applications.</p>
              <div className="impact-grid"><div><strong>40%</strong><span>Faster client sales response</span></div><div><strong>35%</strong><span>Lower average API response time</span></div><div><strong>45%</strong><span>Improved key page load speed</span></div><div><strong>90%</strong><span>Manual research automated</span></div></div>
              <ul className="experience-points"><li>Led a four-person engineering team across 10+ production SaaS modules.</li><li>Managed 5+ Australian and European client accounts end-to-end.</li><li>Built multi-tenant job systems, enterprise CRM, subscriptions, and real-time messaging.</li><li>Owned code reviews, sprint planning, technical mentoring, and release quality.</li></ul>
              <div className="experience-stack">React · Next.js · Node.js · PostgreSQL · MongoDB · Redis · AWS</div>
            </article>
          </div>
        </section>

        <section className="section-wrap content-section stack-section" id="stack">
          <div className="section-heading split-heading" data-reveal>
            <div><p className="section-kicker">04 / TOOLKIT</p><h2>A versatile stack.<br /><em>One clear standard.</em></h2></div>
            <p>The tools change. The goal stays the same: reliable systems, clean delivery, and a product people enjoy using.</p>
          </div>
          <div className="stack-grid">{stackGroups.map((group, index) => <article key={group.label} className="stack-card" data-reveal><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{group.label}</h3><p>{group.items}</p></div></article>)}</div>
          <div className="credentials-row" data-reveal><div><span>EDUCATION</span><strong>B.Tech · Computer Science</strong><small>STAREX Institute of Education · 2019—2023</small></div><div><span>CERTIFICATION</span><strong>Responsive Web Design</strong><small>freeCodeCamp</small></div></div>
        </section>

        <section className="section-wrap content-section faq-section" id="faq">
          <div className="section-heading split-heading" data-reveal><div><p className="section-kicker">05 / COMMON QUESTIONS</p><h2>Useful answers.<br /><em>No guesswork.</em></h2></div><p>Everything you need to know before hiring a senior full stack developer, Next.js engineer, or technical lead.</p></div>
          <div className="faq-list">{faqItems.map((item, index) => <details key={item.question} className="faq-item" data-reveal><summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.question}</h3><i>+</i></summary><p>{item.answer}</p></details>)}</div>
          <nav className="profile-directory" aria-label="More about Harsh Kumar" data-reveal><a href="/about"><span>01</span><strong>Complete professional profile</strong><i>↗</i></a><a href="/services"><span>02</span><strong>Development services</strong><i>↗</i></a><a href="/projects"><span>03</span><strong>Projects and case studies</strong><i>↗</i></a><a href="/contact"><span>04</span><strong>Contact and availability</strong><i>↗</i></a></nav>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-frame" data-reveal>
            <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
            <div className="contact-content">
              <p className="section-kicker">06 / LET&apos;S BUILD</p><h2>Have a complex idea?<br /><em>Let&apos;s make it clear.</em></h2>
              <p>Open to Senior Full Stack Engineer, Technical Lead, Product Engineer, and remote full-stack opportunities.</p>
              <div className="contact-actions"><a className="button button-primary" href="mailto:harshkumar672001@gmail.com">Email me <Arrow /></a><a className="button button-ghost" href="https://wa.me/918800288159" target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a></div>
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="home-contact-form"><ContactForm compact /></div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <div><span className="brand-mark">HK</span><p>Senior Full Stack Engineer<br />Technical Lead</p></div><p>Gurgaon, Haryana, India · Open to remote</p>
        <div className="social-links"><a href="https://github.com/HARSHKUMAR65" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/in/harsh-kumar-1849b61b8/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div>
        <nav className="footer-page-links" aria-label="Portfolio pages"><a href="/about">About</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/contact">Contact</a><a href="/sitemap.xml">Sitemap</a></nav>
      </footer>
      <a className="quick-contact" href="mailto:harshkumar672001@gmail.com" aria-label="Email Harsh Kumar"><span /><b>Let&apos;s talk</b></a>
    </div>
  );
}
