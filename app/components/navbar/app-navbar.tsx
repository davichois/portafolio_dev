"use client";

import Link from "next/link";
import { Code, CodeXml, Github, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "ABOUT", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CONTACT", href: "/#contact" },
];

export default function AppNavbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeReady(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-3 sm:px-8 md:px-12 lg:px-20 backdrop-blur-xl bg-background/70">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to home"
          className="inline-flex items-center gap-2 font-semibold tracking-tight"
        >
          <Code className="h-4 w-4"/>
          <span>davichois</span>
          <CodeXml className="h-4 w-4" />
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* GitHub */}
          <Link
            href="https://github.com/davichois"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {themeReady ? (
              isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <Moon className="h-4 w-4 opacity-0" />
            )}
          </button>

          {/* Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 px-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground/40 hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
