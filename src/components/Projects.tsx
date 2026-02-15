"use client";

import { useFilter } from "@/context/FilterContext";
import { PROJECTS } from "@/lib/constants";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Loader2,
  Star,
  X,
} from "lucide-react";
import Image from "next/image.js";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

const FilterGroup = ({
  title,
  options,
  selected,
  onChange,
}: {
  title: string;
  options: string[];
  selected: string[];
  onChange: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 py-5 last:border-0">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-1 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white"
      >
        {title}
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {isOpen && (
        <div className="mt-3 space-y-2">
          {options.map((option) => {
            const isChecked = selected.includes(option);

            return (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-all
                  ${
                    isChecked
                      ? "bg-slate-900 border-slate-900 dark:bg-white dark:border-white"
                      : "bg-white border-slate-300 dark:bg-slate-800 dark:border-slate-600"
                  }`}
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
                  className={`text-sm transition-colors
                  ${
                    isChecked
                      ? "text-slate-900 dark:text-white font-bold"
                      : "text-slate-600 dark:text-slate-400"
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

/* ---------------- MAIN COMPONENT ---------------- */

const INITIAL_VISIBLE = 6;
const LOAD_INCREMENT = 3;

const Projects: React.FC<{ hideHeader?: boolean }> = ({
  hideHeader = false,
}) => {
  const { platform } = useFilter();
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedStack, setSelectedStack] = useState<string[]>([]);

  /* ---------------- PLATFORM FILTER ---------------- */

  const platformProjects = useMemo(() => {
    return PROJECTS.filter(
      (p) => p.platform === platform || p.platform === "all",
    );
  }, [platform]);

  /* ---------------- SEARCH + FILTER ---------------- */

  const filteredProjects = useMemo(() => {
    const q = search.trim().toLowerCase();

    return platformProjects.filter((project) => {
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.stack.some((s) => s.toLowerCase().includes(q));

      const matchesIndustry =
        selectedIndustries.length === 0 ||
        selectedIndustries.includes(project.industry);

      const matchesStack =
        selectedStack.length === 0 ||
        project.stack.some((s) => selectedStack.includes(s));

      return matchesSearch && matchesIndustry && matchesStack;
    });
  }, [search, selectedIndustries, selectedStack, platformProjects]);

  const projectsToShow = hideHeader
    ? filteredProjects.slice(0, INITIAL_VISIBLE)
    : filteredProjects.slice(0, visibleCount);

  const hasMore = !hideHeader && visibleCount < filteredProjects.length;

  /* ---------------- INFINITE SCROLL ---------------- */

  useEffect(() => {
    if (!hasMore || hideHeader) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + LOAD_INCREMENT);
        }
      },
      { threshold: 1 },
    );

    const current = loadMoreRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      try {
        observer.disconnect();
      } catch {}
    };
  }, [hasMore, hideHeader]);

  /* ---------------- RENDER ---------------- */

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsToShow.map((project) => {
            const isFeatured = (project as any).isFeatured === true;

            return (
              <div key={project.id} className="group">
                <Link
                  href={`/projects/${project.id}`}
                  className="block bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      width={200}
                      height={200}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                    <p className="text-sm text-slate-500 line-clamp-2">
                      {project.description}
                    </p>

                    {isFeatured && (
                      <div className="mt-3 text-xs font-bold text-amber-500 flex items-center gap-1">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {hasMore && (
          <div ref={loadMoreRef} className="py-12 flex justify-center">
            <Loader2 className="animate-spin" />
          </div>
        )}

        {hideHeader && (
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-xs uppercase"
            >
              View Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
