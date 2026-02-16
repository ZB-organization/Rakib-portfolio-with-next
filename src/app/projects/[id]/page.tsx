// app/projects/[id]/page.tsx
// Next.js 14+ App Router version
// Design Variant: "Dashboard Card UI" with Stacking Images & Card-Style CTA
// Layout: Modular Cards + Sticky Stacking Gallery + Right Sidebar

import CTA from "@/components/CTA";
import { PROJECTS } from "@/lib/constants";
import {
  AlertCircle,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Github,
  Globe,
  Image as ImageIcon,
  Layers,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImpactChart from "./impact-chart";

type Params = Promise<{ id: string }>;

interface ProjectDetailProps {
  params: Params;
}

// Generate static params for static generation
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectDetailProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  // Await params in Next.js 15+
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  // Use notFound() for 404 handling
  if (!project) {
    notFound();
  }

  const liveHref = project.links?.live || "";
  const repoHref = project.links?.repo || "";

  // Simulate Gallery (Duplicate main image if no gallery array exists)
  const galleryImages = (project as any).gallery || [
    project.image,
    project.image,
    project.image,
  ];

  return (
    <div className="min-h-screen bg-slate-100  text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HEADER / BREADCRUMB AREA */}
      <div className="bg-white pb-12 pt-24 shadow-sm dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <Link
                  href="/projects"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Projects
                </Link>
                <span>/</span>
                <span className="text-indigo-600 dark:text-indigo-400">
                  Case Study
                </span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {project.title}
              </h1>
            </div>

            <div className="flex gap-3">
              {liveHref && (
                <a
                  href={liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 dark:shadow-none"
                >
                  View Live <ArrowUpRight size={18} className="ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="space-y-8 lg:col-span-2">
            {/* STACKING IMAGES SECTION */}
            <div className="flex flex-col gap-8 pb-8">
              {galleryImages.map((img: string, index: number) => (
                <div
                  key={index}
                  className="sticky overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                  // Stacking Logic: Index controls Top offset and Z-index
                  style={{
                    top: `${80 + index * 40}px`,
                    zIndex: 10 + index,
                  }}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-6 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-800/50">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                      <ImageIcon size={14} />
                      Gallery View {index + 1}
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-red-400/40" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400/40" />
                      <div className="h-2 w-2 rounded-full bg-green-400/40" />
                    </div>
                  </div>
                  <Image
                    src={img}
                    alt={`${project.title} - View ${index + 1}`}
                    width={1200}
                    height={800}
                    className="h-auto w-full object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Overview Card */}
            <div className="relative z-20 rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900 md:p-10">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30">
                  <Layers size={18} />
                </span>
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none text-slate-600 dark:prose-invert dark:text-slate-400">
                <p className="mb-4 text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                  {project.description}
                </p>
                <p>{project.overview.intro}</p>
                <p>{project.overview.outcome}</p>
              </div>
            </div>

            {/* Challenges Grid */}
            <div className="relative z-20">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Technical Challenges
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.challenges.map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-slate-900"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white dark:bg-red-900/20">
                      <AlertCircle size={20} />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.challenge}
                    </p>
                    <div className="border-t border-slate-100 pt-4 dark:border-slate-800">
                      <p className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                        Solution:
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Chart Card */}
            <div className="relative z-20 rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30">
                    <TrendingUp size={18} />
                  </span>
                  Impact Analysis
                </h2>
              </div>

              <ImpactChart data={project.chartData} />

              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                {project.achievements.map((a, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800"
                  >
                    <CheckCircle2 size={16} className="mb-2 text-green-500" />
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {a.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-8 lg:h-fit">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900"
                >
                  <div className="text-2xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Project Details Box */}
            <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
              <h3 className="mb-6 text-lg font-bold text-slate-900 dark:text-white">
                Project Info
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Calendar className="mt-0.5 text-slate-400" size={20} />
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-500">
                      Timeline
                    </div>
                    <div className="font-medium text-slate-900 dark:text-slate-200">
                      {project.duration}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 text-slate-400" size={20} />
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-500">
                      Region
                    </div>
                    <div className="font-medium text-slate-900 dark:text-slate-200">
                      {project.clientRegion || "Global"}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 text-slate-400" size={20} />
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-500">
                      Status
                    </div>
                    <div className="font-medium text-slate-900 dark:text-slate-200">
                      Completed / Live
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800">
                <h4 className="mb-4 text-sm font-bold text-slate-900 dark:text-white">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Box */}
            <div className="rounded-3xl bg-indigo-900 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-lg font-bold">Resources</h3>
              <div className="space-y-3">
                {liveHref ? (
                  <a
                    href={liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/20"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Globe size={18} /> Website
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 opacity-50">
                    <span className="flex items-center gap-2 font-medium">
                      <Globe size={18} /> Offline
                    </span>
                  </div>
                )}

                {repoHref ? (
                  <a
                    href={repoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/20"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Github size={18} /> Source Code
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 opacity-50">
                    <span className="flex items-center gap-2 font-medium">
                      <Github size={18} /> Private Repo
                    </span>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* CTA CARD (Matches Dashboard Theme) */}
        <CTA />
      </div>
    </div>
  );
}
