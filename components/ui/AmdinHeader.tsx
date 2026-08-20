"use client";

import { useEffect, useState } from "react";
import { Bell, Menu, Sun, Moon } from "lucide-react";

export default function Header({
  title,
  onMenuClick,
}: {
  title: string;
  onMenuClick?: () => void;
}) {
  const [isDark, setIsDark] = useState(false);

  // Read the current state from the <html> class on mount
  // (already set by the theme-init script before hydration).
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("haxia-theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="p-1 text-white/60 hover:text-white lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-[17px] font-semibold tracking-tight text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="rounded-lg p-2 text-white/60 transition hover:bg-white/5 hover:text-white"
        >
          {isDark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
        </button>

        <button className="relative rounded-lg p-2 text-white/60 transition hover:bg-white/5 hover:text-white">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-haxia-orange" />
        </button>
        <div className="flex items-center gap-2.5 border-l border-white/10 pl-3 sm:pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-haxia-orange/20 text-xs font-medium text-haxia-orange">
            BA
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium leading-none text-white">Bethel A.</p>
            <p className="mt-0.5 text-[11px] leading-none text-white/50">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}