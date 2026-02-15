"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Platform = "shopify" | "wordpress";

interface FilterContextType {
  platform: Platform;
  togglePlatform: () => void;
  setPlatform: (platform: Platform) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  /* ---------------- INITIAL STATE ---------------- */
  const getInitialPlatform = (): Platform => {
    if (typeof window === "undefined") return "shopify";

    // URL param has priority
    const urlPlatform = searchParams?.get("platform");
    if (urlPlatform === "shopify" || urlPlatform === "wordpress")
      return urlPlatform;

    // fallback to localStorage
    const stored = localStorage.getItem("site_platform") as Platform;
    if (stored === "shopify" || stored === "wordpress") return stored;

    return "shopify";
  };

  const [platform, setPlatformState] = useState<Platform>(getInitialPlatform);

  /* ---------------- SYNC URL + LOCALSTORAGE ---------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;

    // save current platform to localStorage
    localStorage.setItem("site_platform", platform);

    // update URL param if needed
    const currentUrlParam = searchParams?.get("platform");
    if (currentUrlParam !== platform) {
      const params = new URLSearchParams(searchParams?.toString() || "");
      params.set("platform", platform);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [platform, pathname, searchParams, router]);

  /* ---------------- UTILITY ---------------- */
  const togglePlatform = () =>
    setPlatformState((prev) => (prev === "shopify" ? "wordpress" : "shopify"));
  const setPlatform = (p: Platform) => setPlatformState(p);

  return (
    <FilterContext.Provider value={{ platform, togglePlatform, setPlatform }}>
      {children}
    </FilterContext.Provider>
  );
};

/* ---------------- CUSTOM HOOK ---------------- */
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter must be used within a FilterProvider");
  return context;
};
