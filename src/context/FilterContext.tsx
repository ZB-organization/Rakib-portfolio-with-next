"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type Platform = "shopify" | "wordpress";

interface FilterContextType {
  platform: Platform;
  togglePlatform: () => void;
  setPlatform: (platform: Platform) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({
  children,
  initialPlatform = "shopify",
}: {
  children: ReactNode;
  initialPlatform?: Platform;
}) => {
  const [platform, setPlatform] = useState<Platform>(initialPlatform);

  const togglePlatform = () =>
    setPlatform((prev) => (prev === "shopify" ? "wordpress" : "shopify"));

  const value = useMemo(
    () => ({ platform, togglePlatform, setPlatform }),
    [platform],
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter must be used within a FilterProvider");
  return context;
};
