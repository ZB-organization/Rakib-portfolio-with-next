"use client";

import { useFilter } from "@/context/FilterContext";
import { PROJECTS } from "@/lib/constants";
import { ChevronDown, ChevronUp, Filter, Loader2, X } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

/* =========================
   Sidebar Filter Group
========================= */
const FilterGroup = ({
  title,
  options,
  selected,
  onChange,
  accentColor,
}: {
  title: string;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
  accentColor: string;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 py-5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex w-full items-center justify-between py-1 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:${accentColor} transition-colors`}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {isOpen && (
        <div className="mt-3 space-y-2 animate-in slide-in-from-top-1 duration-200">
          {options.map((option) => {
            const isChecked = selected.includes(option);
            const checkboxStyles = isChecked
              ? `bg-slate-900 border-slate-900 dark:bg-white dark:border-white`
              : "bg-white border-slate-300 dark:bg-slate-800 dark:border-slate-600";

            return (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-200 ${checkboxStyles}`}
                >
                  {isChecked && (
                    <X size={10} className="text-white dark:text-slate-900" />
                  )}
                </div>
                <input
                  type="checkbox"
                  className="hidden"
                  checked={isChecked}
                  onChange={() => onChange(option)}
                />
                <span
                  className={`text-sm transition-colors ${
                    isChecked
                      ? "text-slate-900 dark:text-white font-bold"
                      : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200"
                  }`}
                >
                  {option}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* =========================
   Projects Component
========================= */
const Projects: React.FC<{ hideHeader?: boolean }> = ({
  hideHeader = false,
}) => {
  const { platform } = useFilter();

  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedStack, setSelectedStack] = useState<string[]>([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const isShopify = platform === "shopify";

  const accentText = isShopify
    ? "text-emerald-600 dark:text-emerald-400"
    : "text-blue-600 dark:text-blue-400";
  const accentHover = isShopify
    ? "hover:text-emerald-600 dark:hover:text-emerald-400"
    : "hover:text-blue-600 dark:hover:text-blue-400";

  const currentCategories = useMemo(() => {
    if (isShopify)
      return [
        "All Work",
        "Themes",
        "Page Builders",
        "Bug Fixing",
        "Figma to Shopify",
        "Speed",
        "SEO",
      ];
    return [
      "All Work",
      "Custom Themes",
      "Plugins",
      "Content Sites",
      "Corporate",
    ];
  }, [isShopify]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveCategory("All Work");
      setSelectedIndustries([]);
      setSelectedStack([]);
      setSearch("");
      setVisibleCount(6);
    }, 0);
    return () => clearTimeout(timer);
  }, [platform]);

  const platformProjects = useMemo(
    () =>
      PROJECTS.filter((p) => p.platform === platform || p.platform === "all"),
    [platform],
  );
  const industries = useMemo(
    () =>
      Array.from(
        new Set(platformProjects.map((p) => p.industry).filter(Boolean)),
      ).sort(),
    [platformProjects],
  );
  const techStack = useMemo(
    () => Array.from(new Set(platformProjects.flatMap((p) => p.stack))).sort(),
    [platformProjects],
  );

  const filteredProjects = useMemo(() => {
    return platformProjects.filter((project) => {
      if (hideHeader) return true;
      const q = search.toLowerCase();
      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.stack.some((s) => s.toLowerCase().includes(q));
      const matchesCategory =
        activeCategory === "All Work" ||
        (project.category && project.category.includes(activeCategory)) ||
        (activeCategory === "Speed" && project.stack.includes("Performance"));
      const matchesIndustry =
        selectedIndustries.length === 0 ||
        (project.industry && selectedIndustries.includes(project.industry));
      const matchesStack =
        selectedStack.length === 0 ||
        project.stack.some((s) => selectedStack.includes(s));
      return (
        matchesSearch && matchesCategory && matchesIndustry && matchesStack
      );
    });
  }, [
    search,
    activeCategory,
    selectedIndustries,
    selectedStack,
    hideHeader,
    platformProjects,
  ]);

  const projectsToShow = hideHeader
    ? filteredProjects.slice(0, 6)
    : filteredProjects.slice(0, visibleCount);
  const hasMore = !hideHeader && visibleCount < filteredProjects.length;

  useEffect(() => {
    if (hideHeader) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore)
          setTimeout(() => setVisibleCount((prev) => prev + 3), 600);
      },
      { threshold: 1.0 },
    );
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasMore, hideHeader]);

  const toggleFilter = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
  ) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value],
    );
  };
  const clearAllFilters = () => {
    setActiveCategory("All Work");
    setSelectedIndustries([]);
    setSelectedStack([]);
    setSearch("");
  };
  const activeFilterCount =
    selectedIndustries.length +
    selectedStack.length +
    (activeCategory !== "All Work" ? 1 : 0);

  return (
    <section
      className={`py-24 transition-colors duration-300  ${hideHeader ? "" : "bg-white dark:bg-slate-950 min-h-screen"}`}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Header */}
        {!hideHeader && (
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
              Selected{" "}
              <span
                className={isShopify ? "text-emerald-600" : "text-blue-600"}
              >
                Work
              </span>
            </h1>
          </div>
        )}

        {/* Layout: Sidebar + Projects */}
        <div
          className={`flex flex-col lg:flex-row gap-12 items-start ${hideHeader ? "justify-center" : ""}`}
        >
          {/* Left Sidebar */}
          {!hideHeader && (
            <aside
              className={`lg:w-64 lg:sticky lg:top-24 shrink-0 ${showMobileFilters ? "block" : "hidden lg:block"} w-full bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl lg:bg-transparent lg:dark:bg-transparent lg:p-0 lg:rounded-none transition-colors`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white flex items-center gap-2">
                  <Filter size={16} /> Filters
                </h3>
                {activeFilterCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className={`text-[10px] font-bold uppercase ${accentText} hover:underline decoration-2 underline-offset-2 transition-colors`}
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="relative mb-8">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className={`w-full pl-9 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white focus:border-transparent focus:ring-1 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 ${isShopify ? "focus:ring-emerald-500" : "focus:ring-blue-500"}`}
                />
              </div>

              <div className="space-y-2">
                <FilterGroup
                  title="Industry"
                  options={industries}
                  selected={selectedIndustries}
                  onChange={(val) => toggleFilter(setSelectedIndustries, val)}
                  accentColor={accentHover}
                />
                <FilterGroup
                  title="Tech Stack"
                  options={techStack}
                  selected={selectedStack}
                  onChange={(val) => toggleFilter(setSelectedStack, val)}
                  accentColor={accentHover}
                />
              </div>
            </aside>
          )}

          {/* Projects Grid */}
          <div className="flex-1 w-full">
            {/* Category Tabs */}
            {!hideHeader && (
              <div className="mb-8 overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide">
                <div className="flex gap-2">
                  {currentCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? `bg-slate-900 text-white shadow-lg dark:bg-white dark:text-slate-900` : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:text-white"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projectsToShow.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                 
                  isShopify={isShopify}
                />
              ))}
            </div>

            {/* Infinite Scroll Loader */}
            {hasMore && (
              <div
                ref={loadMoreRef}
                className="py-16 flex justify-center w-full"
              >
                <Loader2 className="animate-spin text-slate-400" size={20} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
