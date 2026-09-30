"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Load enhancement code after the server-rendered page has painted. */
export default function MotionDirector() {
  const pathname = usePathname();
  useEffect(() => {
    let cancelled = false;
    let revision = 0;
    let teardown: (() => void) | undefined;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const initialize = () => {
      const current = ++revision;
      teardown?.(); teardown = undefined;
      if (preference.matches) return;
      import("./motion-runtime").then(({ mountMotion }) => {
        if (!cancelled && current === revision) teardown = mountMotion();
      }).catch(() => { /* Content and native controls remain usable without motion. */ });
    };
    const frame = requestAnimationFrame(initialize);
    preference.addEventListener("change", initialize);
    return () => { cancelled = true; revision++; cancelAnimationFrame(frame); preference.removeEventListener("change", initialize); teardown?.(); };
  }, [pathname]);
  return <div className="motion-cursor" aria-hidden="true" />;
}
