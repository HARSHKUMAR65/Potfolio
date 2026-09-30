import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function mountMotion() {
    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    const cleanups: Array<() => void> = [];
    const media = gsap.matchMedia();
    const listen = (element: EventTarget, name: string, fn: EventListener) => {
      element.addEventListener(name, fn);
      cleanups.push(() => element.removeEventListener(name, fn));
    };

    const context = gsap.context(() => {
      const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a[href^="#"]'));
      const sections = links.map(link => ({ link, section: document.querySelector(link.hash) }));
      let currentLink: HTMLAnchorElement | undefined;
      const updateNavigation = () => {
        const middle = window.innerHeight * 0.48;
        const activeLink = sections.find(({ section }) => {
          const rect = section?.getBoundingClientRect();
          return rect && rect.top <= middle && rect.bottom > middle;
        })?.link;
        if (activeLink === currentLink) return;
        currentLink?.removeAttribute("aria-current");
        activeLink?.setAttribute("aria-current", "location");
        currentLink = activeLink;
      };
      ScrollTrigger.create({
        start: 0, end: "max",
        onUpdate: (self) => {
          root.style.setProperty("--page-progress", String(self.progress));
          document.querySelector(".topbar")?.classList.toggle("is-scrolled", self.scroll() > 60);
          updateNavigation();
        },
      });


      media.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 1051px) and (min-height: 740px)", fine: "(hover: hover) and (pointer: fine)" }, ({ conditions }) => {
        if (!conditions?.motion) return;
        const eventCleanups: Array<() => void> = [];
        const bind = (element: EventTarget, name: string, fn: EventListener) => {
          element.addEventListener(name, fn);
          eventCleanups.push(() => element.removeEventListener(name, fn));
        };

        if (document.querySelector(".cinematic-hero")) {
          // Never conceal already-readable content if the motion chunk arrives late.
          if (performance.now() < 1600 && window.scrollY < 40) {
            gsap.timeline({ defaults: { ease: "power3.out" } })
              .from(".hero-letter", { yPercent: 105, rotation: 4, duration: 0.65, stagger: 0.025 })
              .from(".hero-art", { scale: 0.94, rotation: 3, duration: 0.9 }, 0);
          }
          const ambient = gsap.timeline({ paused: true, repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } })
            .to(".orbit-ring", { rotation: "+=25", duration: 8, stagger: 0.6 }, 0)
            .to(".orbit-core, .orbit-satellite", { y: -10, duration: 4, stagger: 0.6 }, 0)
            .to(".floating-label", { y: -7, duration: 4, stagger: 0.7 }, 0);
          let heroVisible = false;
          const syncAmbient = () => ambient.paused(!heroVisible || document.hidden);
          const observer = new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; syncAmbient(); }, { rootMargin: "80px" });
          observer.observe(document.querySelector(".cinematic-hero")!);
          bind(document, "visibilitychange", syncAmbient);
          eventCleanups.push(() => observer.disconnect());
          if (conditions.desktop) {
            gsap.to(".orbital-machine", { y: 65, rotation: 18, scale: 1.15, ease: "none", scrollTrigger: { trigger: ".cinematic-hero", start: "top top", end: "bottom top", scrub: 0.8 } });
            gsap.to(".hero-word:last-child", { xPercent: 12, ease: "none", scrollTrigger: { trigger: ".cinematic-hero", start: "top top", end: "bottom top", scrub: 0.7 } });
          }
        }

        const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal], .profile-story, .profile-facts, .service-directory-card, .case-study, .contact-direct-card, .profile-page-cta, .profile-columns article");
        reveals.forEach((element) => {
          if (element.matches(".section-heading, .experience-intro, .stack-card") || element.closest(".competency-card") || (conditions.desktop && element.closest(".project-list"))) return;
          gsap.from(element, { y: conditions.desktop ? 38 : 20, opacity: 0, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 94%", once: true } });
        });

        // Preserve the original semantic heading and accessible name while revealing words.
        document.querySelectorAll<HTMLElement>(".section-heading h2, .experience-intro h2, .freelance-copy h2, .contact-content h2, .profile-page-intro h1").forEach(heading => {
          const original = heading.innerHTML;
          const previousLabel = heading.getAttribute("aria-label");
          const label = heading.innerText.replace(/\s+/g, " ").trim();
          heading.setAttribute("aria-label", label);
          const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
          const nodes: (Node & ChildNode)[] = [];
          while (walker.nextNode()) nodes.push(walker.currentNode as Node & ChildNode);
          nodes.forEach(node => {
            const fragment = document.createDocumentFragment();
            node.textContent?.split(/(\s+)/).forEach(word => {
              if (!word.trim()) { fragment.append(document.createTextNode(word)); return; }
              const mask = document.createElement("span"); mask.className = "motion-word-mask"; mask.setAttribute("aria-hidden", "true");
              const inner = document.createElement("span"); inner.className = "motion-word"; inner.textContent = word;
              mask.appendChild(inner); fragment.appendChild(mask);
            });
            node.replaceWith(fragment);
          });
          gsap.from(heading.querySelectorAll(".motion-word"), { yPercent: 110, rotation: 2, duration: 0.65, stagger: 0.035, ease: "power3.out", scrollTrigger: { trigger: heading, start: "top 92%", once: true } });
          eventCleanups.push(() => { heading.innerHTML = original; if (previousLabel === null) heading.removeAttribute("aria-label"); else heading.setAttribute("aria-label", previousLabel); });
        });

        document.querySelectorAll<HTMLElement>(".competency-card").forEach((card, index) => {
          gsap.from(card, { y: conditions.desktop ? 65 + (index % 3) * 18 : 25, opacity: 0, duration: 0.75, delay: conditions.desktop ? (index % 3) * 0.07 : 0, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 94%", once: true } });
        });
        document.querySelectorAll<HTMLElement>(".stack-card").forEach((card, index) => {
          gsap.from(card, { x: (index % 2 ? 1 : -1) * (conditions.desktop ? 35 : 15), opacity: 0.25, ease: "none", scrollTrigger: { trigger: card, start: "top 96%", end: "top 70%", scrub: 0.25 } });
          gsap.from(card, { "--row-line": 0, ease: "none", scrollTrigger: { trigger: card, start: "top 92%", end: "top 58%", scrub: 0.25 } });
        });
        document.querySelectorAll<HTMLElement>(".engagement-list article, .experience-points li").forEach((row,index) => {
          gsap.from(row, { x: conditions.desktop ? 36 : 18, opacity: 0, duration: 0.55, delay: index % 3 * 0.07, scrollTrigger: { trigger: row, start: "top 94%", once: true } });
        });
        if (document.querySelector(".capability-marquee")) {
          gsap.to(".capability-marquee > div", { xPercent: -18, ease: "none", scrollTrigger: { trigger: ".capability-marquee", start: "top bottom", end: "bottom top", scrub: 0.35 } });
          gsap.to(".capability-marquee i", { rotation: 90, ease: "none", scrollTrigger: { trigger: ".capability-marquee", start: "top bottom", end: "bottom top", scrub: 0.35 } });
        }
        if (document.querySelector(".freelance-banner")) gsap.from(".freelance-banner", { "--banner-line": 0, ease: "none", scrollTrigger: { trigger: ".freelance-banner", start: "top 85%", end: "top 35%", scrub: 0.35 } });

        if (conditions.desktop && document.querySelector(".story-scenes")) {
          root.classList.add("story-motion");
          const scenes = gsap.utils.toArray<HTMLElement>(".story-scene");
          gsap.set(scenes.slice(1), { autoAlpha: 0, y: 45, clipPath: "inset(100% 0 0 0)" });
          const story = gsap.timeline({ scrollTrigger: { trigger: ".manifesto-section", start: "top top", end: "bottom bottom", scrub: 0.45 } });
          story.to(".story-track span", { scaleX: 1, ease: "none", duration: 3 }, 0);
          scenes.slice(1).forEach((scene, index) => {
            story.to(scenes[index], { autoAlpha: 0, y: -35, clipPath: "inset(0 0 100% 0)", duration: 0.45, ease: "power2.inOut" }, index + 0.6)
              .to(scene, { autoAlpha: 1, y: 0, clipPath: "inset(0% 0 0 0)", duration: 0.6, ease: "power2.out" }, index + 0.87);
          });
          story.to(".manifesto-section", { backgroundColor: "#e5eaf0", duration: 0.7 }, 0.65)
            .to(".manifesto-section", { backgroundColor: "#eee6d8", duration: 0.7 }, 1.65);

        }

        const work = document.querySelector<HTMLElement>(".projects-section");
        const track = document.querySelector<HTMLElement>(".project-list");
        if (conditions.desktop && work && track) {
          root.classList.add("projects-motion");
          const horizontal = gsap.to(track, { x: () => -(track.scrollWidth - track.clientWidth), ease: "none", scrollTrigger: { trigger: work, start: "top top", end: () => "+=" + Math.max(track.scrollWidth - track.clientWidth, 650), pin: true, refreshPriority: 1, scrub: 0.7, invalidateOnRefresh: true, anticipatePin: 1 } });
          document.querySelectorAll<HTMLElement>(".project-card").forEach((card,index) => {
            const sequence = gsap.timeline({ scrollTrigger: index === 0 ? { trigger: work, start: "top 60%", once: true } : { trigger: card, containerAnimation: horizontal, start: "left 85%", once: true } });
            const bars = card.querySelectorAll(".concept-chart i");
            const tiles = card.querySelectorAll(".concept-tools > span");
            if (bars.length) sequence.from(bars, { scaleY: 0.08, transformOrigin: "bottom", stagger: 0.055, duration: 0.6, ease: "power3.out" });
            if (tiles.length) sequence.from(tiles, { y: 25, opacity: 0, stagger: 0.09, duration: 0.55 });
            sequence.from(card.querySelectorAll(".project-body li"), { y: 15, opacity: 0, stagger: 0.07, duration: 0.45 }, 0.15);
          });
          gsap.from(".project-visual", { clipPath: "inset(12% 8% 12% 8%)", duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: work, start: "top 70%", once: true } });
        }

        if (!conditions.desktop) {
          document.querySelectorAll<HTMLElement>(".project-visual").forEach(visual => {
            const bars = visual.querySelectorAll(".concept-chart i");
            const tiles = visual.querySelectorAll(".concept-tools > span");
            if (bars.length) gsap.from(bars, { scaleY: 0.08, transformOrigin: "bottom", stagger: 0.04, duration: 0.5, scrollTrigger: { trigger: visual, start: "top 75%", once: true } });
            if (tiles.length) gsap.from(tiles, { y: 18, opacity: 0, stagger: 0.07, duration: 0.45, scrollTrigger: { trigger: visual, start: "top 75%", once: true } });
          });
        }

        if (document.querySelector(".footer-wordmark")) gsap.from(".footer-wordmark span, .footer-wordmark i", { yPercent: 75, rotation: 3, ease: "none", scrollTrigger: { trigger: ".footer-wordmark", start: "top bottom", end: "top 70%", scrub: 0.7 } });

        document.querySelectorAll<HTMLElement>(".manifesto-metrics strong, .impact-grid strong").forEach((element) => {
          const original = element.textContent ?? "";
          const value = parseFloat(original);
          const suffix = original.replace(/[\d.]/g, "");
          const decimals = original.includes(".") ? 1 : 0;
          const counter = { value: 0 };
          let lastText = "";
          gsap.to(counter, { value, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 92%", once: true }, onUpdate: () => { const nextText = counter.value.toFixed(decimals) + suffix; if (nextText !== lastText) { element.textContent = nextText; lastText = nextText; } }, onComplete: () => { element.textContent = original; } });
          eventCleanups.push(() => { element.textContent = original; });
        });

        if (document.querySelector(".timeline-rail")) gsap.from(".timeline-rail", { scaleY: 0, transformOrigin: "top", ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 80%", end: "bottom 70%", scrub: true } });
        if (document.querySelector(".contact-orbit")) gsap.to(".contact-orbit", { rotation: 100, ease: "none", scrollTrigger: { trigger: ".contact-section", start: "top bottom", end: "bottom top", scrub: 1 } });

        if (conditions.fine && conditions.desktop) {
          const cursor = document.querySelector<HTMLElement>(".motion-cursor");
          if (cursor) {
            const moveX = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power3" });
            const moveY = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power3" });
            bind(window, "pointermove", ((event: PointerEvent) => {
              moveX(event.clientX); moveY(event.clientY);
              cursor.classList.add("is-visible");
              cursor.classList.toggle("is-hovering", !!(event.target as Element)?.closest("a, button, summary, input, textarea"));
            }) as EventListener);
            bind(document, "pointerleave", (() => cursor.classList.remove("is-visible")) as EventListener);
          }
          document.querySelectorAll<HTMLElement>(".tilt-card").forEach(card => {
            gsap.set(card, { "--tilt-x": "0deg", "--tilt-y": "0deg" });
            const tiltX = gsap.quickTo(card, "--tilt-x", { duration: 0.3 });
            const tiltY = gsap.quickTo(card, "--tilt-y", { duration: 0.3 });
            let rect: DOMRect;
            bind(card, "pointerenter", (() => { rect = card.getBoundingClientRect(); }) as EventListener);
            bind(card, "pointermove", ((event: PointerEvent) => {
              if (!rect || event.pointerType === "touch") return;
              const x = (event.clientX - rect.left) / rect.width, y = (event.clientY - rect.top) / rect.height;
              tiltX((0.5-y)*5); tiltY((x-0.5)*6);
            }) as EventListener);
            bind(card, "pointerleave", (() => { tiltX(0); tiltY(0); }) as EventListener);
            eventCleanups.push(() => { gsap.killTweensOf(card); card.style.removeProperty("--tilt-x"); card.style.removeProperty("--tilt-y"); });
          });
          document.querySelectorAll<HTMLElement>(".button, .nav-cta, .brand-mark").forEach((button) => {
            const x = gsap.quickTo(button, "x", { duration: 0.3, ease: "power3.out" });
            const y = gsap.quickTo(button, "y", { duration: 0.3, ease: "power3.out" });
            bind(button, "pointermove", ((event: PointerEvent) => {
              const rect = button.getBoundingClientRect();
              x((event.clientX - rect.left - rect.width / 2) * 0.14);
              y((event.clientY - rect.top - rect.height / 2) * 0.2);
            }) as EventListener);
            bind(button, "pointerleave", (() => { x(0); y(0); }) as EventListener);
            bind(button, "blur", (() => { x(0); y(0); }) as EventListener);
            eventCleanups.push(() => { gsap.killTweensOf(button); button.style.transform = ""; });
          });
        }
        return () => {
          eventCleanups.forEach((fn) => fn());
          root.classList.remove("story-motion", "projects-motion");
          document.querySelector(".motion-cursor")?.classList.remove("is-visible");
        };
      });

      // Keep native <details> semantics; animate its measured height in both directions.
      document.querySelectorAll<HTMLDetailsElement>(".faq-item").forEach((details) => {
        const summary = details.querySelector("summary");
        if (!summary) return;
        let expanded = details.open;
        listen(summary, "click", ((event: Event) => {
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
          event.preventDefault();
          const from = details.getBoundingClientRect().height;
          expanded = !expanded;
          gsap.killTweensOf(details);
          details.style.height = "auto";
          details.open = true;
          const to = expanded ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + 2;
          gsap.fromTo(details, { height: from }, { height: to, duration: 0.4, ease: "power3.inOut", onComplete: () => { details.open = expanded; details.style.height = ""; ScrollTrigger.refresh(); } });
        }) as EventListener);
        cleanups.push(() => { gsap.killTweensOf(details); details.style.height = ""; });
      });
    });

    let active = true;
    document.fonts.ready.then(() => { if (active) ScrollTrigger.refresh(); });
    const refresh = () => ScrollTrigger.refresh();
    listen(window, "load", refresh);
    return () => {
      active = false;
      cleanups.forEach((fn) => fn());
      media.revert();
      context.revert();
      root.classList.remove("story-motion", "projects-motion");
      root.style.removeProperty("--page-progress");
    };
}
