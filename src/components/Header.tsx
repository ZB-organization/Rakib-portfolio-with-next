"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useFilter } from "../context/FilterContext"; // your context

/* ---------------- PLATFORM SWITCH COMPONENT ---------------- */
type PlatformSwitchProps = {
  mobile?: boolean;
};

function PlatformSwitch({ mobile = false }: PlatformSwitchProps) {
  const { platform, togglePlatform } = useFilter();

  return (
    <button
      onClick={togglePlatform}
      className={`relative flex items-center gap-2 rounded-full border transition-all duration-300 overflow-hidden group ${
        mobile ? "px-2 py-1.5" : "px-3 py-1.5"
      } ${
        platform === "shopify"
          ? "bg-emerald-50/50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800"
          : "bg-blue-50/50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
      }`}
    >
      <span
        className={`text-[10px] font-bold uppercase ${
          platform === "shopify"
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-slate-400"
        }`}
      >
        Shopify
      </span>

      <div className="w-8 h-4 rounded-full bg-slate-200 dark:bg-slate-700 p-0.5">
        <div
          className={`w-3 h-3 rounded-full transition-transform duration-300 ${
            platform === "shopify"
              ? "translate-x-0 bg-emerald-500"
              : "translate-x-4 bg-blue-500"
          }`}
        />
      </div>

      <span
        className={`text-[10px] font-bold uppercase ${
          platform === "wordpress"
            ? "text-blue-600 dark:text-blue-400"
            : "text-slate-400"
        }`}
      >
        WP
      </span>
    </button>
  );
}

/* ---------------- HEADER COMPONENT ---------------- */
export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  /* -------- THEME -------- */
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed z-50 left-1/2 -translate-x-1/2 flex items-center justify-between
          top-4 md:top-6 w-[95%] md:w-[90%] lg:max-w-5xl rounded-full
          py-3 px-6 border transition-all duration-300
          ${
            scrolled
              ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl border-slate-200/60 dark:border-slate-800/60"
              : "bg-white/30 dark:bg-slate-950/30 backdrop-blur-md border-transparent"
          }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="h-10 w-10 rounded-xl bg-slate-900 dark:bg-white flex items-center justify-center">
            <span className="font-black text-white dark:text-slate-900">
              RH
            </span>
          </div>
          <span className="font-bold text-lg text-slate-900 dark:text-white">
            Rakibul.
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                isActive(link.path)
                  ? "bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-3">
          <PlatformSwitch />

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full text-sm font-bold transition hover:-translate-y-0.5"
          >
            Let’s Talk
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="md:hidden flex items-center gap-2">
          <PlatformSwitch mobile />
          <button onClick={toggleTheme}>
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks
            .concat({ name: "Contact", path: "/contact" })
            .map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-black transition ${
                  isActive(link.path)
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-900 dark:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
