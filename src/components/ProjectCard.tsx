"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Layers, Star } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  industry?: string;
  stack: string[];
  links?: {
    live?: string;
  };
  isFeatured?: boolean;
}

const ProjectCard = ({ project, isShopify }: { project: Project; isShopify: boolean }) => {
  const liveHref = project.links?.live || "";
  const showLive = Boolean(liveHref);
  const isFeatured = project.isFeatured === true;

  return (
    <div className="group relative h-full">
      {/* FEATURED CARD STYLING */}
      <div
        className={`h-full rounded-[1.7rem] transition-all duration-300 ${
          isFeatured
            ? `p-[3px] bg-gradient-to-br ${
                isShopify
                  ? "from-emerald-500 via-teal-500 to-cyan-500"
                  : "from-blue-500 via-indigo-500 to-violet-500"
              } shadow-2xl`
            : "p-0"
        }`}
      >
        <Link
          href={`/projects/${project.id}`}
          className={`relative flex flex-col h-full bg-white dark:bg-slate-800 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-1 transition-all duration-300 ${
            isFeatured
              ? "rounded-[1.5rem] border-0"
              : "rounded-3xl border border-slate-200 dark:border-slate-700"
          }`}
        >
          {/* Image Area */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
            />

            {/* FEATURED BADGE */}
            {isFeatured && (
              <div className="absolute top-0 right-0 z-20">
                <div
                  className={`${
                    isShopify ? "bg-emerald-500" : "bg-blue-600"
                  } text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-bl-xl shadow-md flex items-center gap-1`}
                >
                  <Star size={10} fill="currentColor" /> Featured
                </div>
              </div>
            )}

            {/* Industry Tags */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              {project.industry && (
                <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm border border-slate-100/50 dark:border-transparent">
                  {project.industry}
                </span>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
              <span className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-xs transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                View Case Study
              </span>
              {showLive && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(liveHref, "_blank");
                  }}
                  className={`p-3 bg-slate-900 text-white border border-white/20 rounded-full hover:${
                    isShopify ? "bg-emerald-600" : "bg-blue-600"
                  } transition-colors transform translate-y-2 group-hover:translate-y-0 delay-75 duration-300 shadow-lg`}
                  title="Open Live Site"
                >
                  <ExternalLink size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex flex-col flex-1 p-8">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                <Layers
                  size={14}
                  className={
                    isFeatured
                      ? isShopify
                        ? "text-emerald-500"
                        : "text-blue-500"
                      : isShopify
                      ? "text-emerald-600"
                      : "text-blue-600"
                  }
                />
                {project.category}
              </div>
              <h3
                className={`text-2xl font-bold text-slate-900 dark:text-white leading-tight ${
                  isShopify
                    ? "group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                    : "group-hover:text-blue-600 dark:group-hover:text-blue-400"
                } transition-colors mb-3`}
              >
                {project.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 px-2.5 py-1.5 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 px-1 py-1">
                    + {project.stack.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
