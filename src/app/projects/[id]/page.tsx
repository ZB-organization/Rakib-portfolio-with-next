"use client";
import { PROJECTS } from "@/lib/constants";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Github,
  Globe,
  Image as ImageIcon,
  Layers,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Image from "next/image.js";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { id } = React.use(params);
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) {
    notFound();
  }

  const liveHref = project.links?.live || "";
  const repoHref = project.links?.repo || "";

  const galleryImages = (project as any).gallery || [
    project.image,
    project.image,
    project.image,
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-['Inter'] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HEADER */}
      <div className="bg-white pb-12 pt-24 shadow-sm dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
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
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-indigo-700"
              >
                View Live <ArrowUpRight size={18} className="ml-2" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT CONTENT */}
          <div className="space-y-8 lg:col-span-2">
            {/* GALLERY */}
            <div className="flex flex-col gap-8 pb-8">
              {galleryImages.map((img: string, index: number) => (
                <div
                  key={index}
                  className=" sticky overflow-hidden rounded-3xl border bg-white shadow-sm"
                  style={{
                    top: `${80 + index * 40}px`,
                    zIndex: 10 + index,
                  }}
                >
                  <div className="flex items-center justify-between border-b bg-slate-50 px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                      <ImageIcon size={14} />
                      Gallery View {index + 1}
                    </div>
                  </div>
                  <div className="w-full h-60 sm:h-80 md:h-96 relative">
                    <Image
                      src={img}
                      alt={`View ${index + 1}`}
                      fill
                      className="object-cover rounded-b-3xl"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* OVERVIEW */}
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm dark:bg-slate-900 dark:text-slate-100">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                <Layers size={18} />
                Project Overview
              </h2>

              <p className="mb-4 text-base sm:text-lg font-medium">
                {project.description}
              </p>

              <p className="text-base sm:text-lg">{project.overview?.intro}</p>
              <p className="mt-4 text-base sm:text-lg">
                {project.overview?.outcome}
              </p>
            </div>

            {/* CHALLENGES */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Technical Challenges</h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.challenges?.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm dark:bg-slate-900 dark:text-slate-100"
                  >
                    <AlertCircle size={20} className="mb-4 text-red-500" />
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="mb-4 text-sm">{item.challenge}</p>
                    <p className="text-sm font-medium text-green-600">
                      Solution: {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMPACT CHART */}
            {project.chartData && (
              <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm dark:bg-slate-900 dark:text-slate-100">
                <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
                  <TrendingUp size={18} />
                  Impact Analysis
                </h2>

                <div className="w-full h-72 sm:h-80 md:h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={project.chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
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
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6 lg:sticky lg:top-8 lg:h-fit">
            {/* PROJECT INFO */}
            <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900 dark:text-slate-100">
              <h3 className="mb-6 text-lg font-bold">Project Info</h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <Calendar size={20} />
                  <div>{project.duration}</div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={20} />
                  <div>{project.clientRegion || "Global"}</div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} />
                  <div>Completed / Live</div>
                </div>
              </div>

              <div className="mt-8 border-t pt-6">
                <h4 className="mb-4 text-sm font-bold">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.stack?.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-slate-100 px-3 py-1 font-bold dark:bg-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RESOURCES */}
            <div className="rounded-3xl bg-indigo-900 p-6 text-white shadow-lg">
              <h3 className="mb-4 text-lg font-bold">Resources</h3>

              {liveHref && (
                <a
                  href={liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3 hover:bg-white/20"
                >
                  <span className="flex items-center gap-2">
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
                  <span className="flex items-center gap-2">
                    <Github size={18} /> Source Code
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-red-600 px-6 sm:px-10 py-3 sm:py-4 text-lg font-bold text-white hover:bg-red-700"
          >
            Start Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
