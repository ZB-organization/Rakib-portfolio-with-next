"use client";

import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  industry?: string;
  isFeatured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isShopify: boolean;
}

const ProjectCard = ({ project, index, isShopify }: ProjectCardProps) => {
  const isFeatured = project.isFeatured === true;

  return (
    <div className="group relative h-full">
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
          className={`relative flex flex-col h-full bg-white dark:bg-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
            isFeatured
              ? "rounded-[1.5rem] border-0"
              : "rounded-3xl border border-slate-200 dark:border-slate-700"
          }`}
        >
          {/* Image Section */}
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-700 rounded-t-[1.5rem]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={index < 3}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Industry Badge */}
            {project.industry && (
              <span className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 text-xs font-semibold rounded-full text-slate-900 dark:text-white shadow-sm">
                {project.industry}
              </span>
            )}

            {/* Featured Badge */}
            {isFeatured && (
              <span className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Featured
              </span>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-t-[1.5rem]">
              <span
                className={`opacity-0 group-hover:opacity-100 text-white ${
                  isShopify ? "bg-emerald-600" : "bg-blue-600"
                } px-5 py-2 rounded-full font-bold text-sm transition-all duration-300`}
              >
                View Case Study
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-1 p-6">
            {project.category && (
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                {project.category}
              </span>
            )}

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h3>

            <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
