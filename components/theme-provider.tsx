"use client";

import { useEffect } from "react";

export function ThemeProvider() {
  useEffect(() => {
    const apply = (theme: string) => document.documentElement.classList.toggle("dark", theme === "dark" || theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
    const saved = localStorage.getItem("janseva-theme");
    if (saved) apply(saved);
    fetch("/api/settings").then((r) => r.ok ? r.json() : null).then((data) => data && (localStorage.setItem("janseva-theme", data.settings.theme), apply(data.settings.theme)));
    const update = (event: Event) => apply((event as CustomEvent<string>).detail);
    addEventListener("janseva-theme", update);
    return () => removeEventListener("janseva-theme", update);
  }, []);
  return null;
}
