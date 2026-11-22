"use client";
import { useSyncExternalStore } from "react";

const format = () => new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }).format(new Date());

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

/** Current time in Gurugram. Renders nothing on the server so hydration never mismatches. */
export default function LocalTime() {
  const time = useSyncExternalStore(subscribe, format, () => "");
  if (!time) return null;
  return <> It&apos;s {time.toLowerCase()} here right now.</>;
}
