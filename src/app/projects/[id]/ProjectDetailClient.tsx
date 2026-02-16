"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Globe,
  Image as ImageIcon,
  TrendingUp,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ProjectDetailClientProps {
  project: any;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const liveHref = project.links?.live || "";
  const repoHref = project.links?.repo || "";

  const galleryImages =
    project.gallery?.length > 0
      ? project.gallery
      : [project.image, project.image, project.image];

  return (
    <div className="min-h-screen bg-slate-100   text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HEADER */}
      <div className="bg-white pb-12 pt-24 shadow-sm dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <Link href="/projects" className="hover:text-indigo-600">
                  Projects
                </Link>
                <span>/</span>
                <span className="text-indigo-600 dark:text-indigo-400">
                  Case Study
                </span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
            </div>

            {liveHref && (
              <a
                href={liveHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                View Live <ArrowUpRight size={18} className="ml-2" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT SIDE */}
          <div className="space-y-8 lg:col-span-2">
            {/* GALLERY */}
            <div className="flex flex-col gap-8 pb-8">
              {galleryImages.map((img: string, index: number) => (
                <div
                  key={index}
                  className="sticky overflow-hidden rounded-3xl border bg-white shadow-sm"
                  style={{
                    top: `${80 + index * 40}px`,
                    zIndex: 10 + index,
                  }}
                >
                  <div className="flex items-center justify-between border-b bg-slate-50/90 px-6 py-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                      <ImageIcon size={14} />
                      Gallery View {index + 1}
                    </div>
                  </div>

                  <div className="relative w-full aspect-video">
                    <Image
                      src={img}
                      alt={`View ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CHART (unchanged logic) */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                <TrendingUp size={18} />
                Impact Analysis
              </h2>

              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={project.chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis hide domain={[0, 6]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="LoadTime"
                      stroke="#ef4444"
                      strokeWidth={3}
                    />
                    <Line
                      type="monotone"
                      dataKey="Conversion"
                      stroke="#10b981"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6 lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-3xl bg-indigo-900 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-lg font-bold">Resources</h3>

              {liveHref && (
                <a
                  href={liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 hover:bg-white/20"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Globe size={18} /> Website
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              )}

              {repoHref && (
                <a
                  href={repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 hover:bg-white/20"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Github size={18} /> Source Code
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-red-600 to-red-700 p-12 text-center text-white shadow-xl">
            <h2 className="mb-6 text-4xl font-black tracking-tight">
              Ready to build something amazing?
            </h2>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-white px-10 py-4 text-lg font-bold text-red-600"
              >
                Start Project <ArrowRight className="ml-2 inline h-5 w-5" />
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-red-300 px-10 py-4 text-lg font-bold text-white"
              >
                More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
