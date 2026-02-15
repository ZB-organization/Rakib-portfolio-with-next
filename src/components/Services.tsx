"use client";

import {
  ArrowRight,
  BarChart3,
  Box,
  Code2,
  Database,
  Globe,
  Layout,
  Mail,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import { useFilter } from "@/context/FilterContext";
import { SERVICES } from "@/lib/constants";

const getTheme = (index: number) => {
  const themes = [
    {
      bg: "bg-emerald-50 dark:bg-slate-900",
      border: "border-emerald-200 dark:border-emerald-900/50",
      iconBox:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
      title: "text-emerald-950 dark:text-white",
      accent: "bg-emerald-600 hover:bg-emerald-700 text-white",
    },
    {
      bg: "bg-violet-50 dark:bg-slate-900",
      border: "border-violet-200 dark:border-violet-900/50",
      iconBox:
        "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
      title: "text-violet-950 dark:text-white",
      accent: "bg-violet-600 hover:bg-violet-700 text-white",
    },
    {
      bg: "bg-blue-50 dark:bg-slate-900",
      border: "border-blue-200 dark:border-blue-900/50",
      iconBox:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      title: "text-blue-950 dark:text-white",
      accent: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  ];

  return themes[index % themes.length];
};

const getIcon = (name: string, className: string) => {
  switch (name) {
    case "Monitor":
      return <Box className={className} />;
    case "Layers":
      return <Layout className={className} />;
    case "PenTool":
      return <Code2 className={className} />;
    case "Gauge":
      return <Zap className={className} />;
    case "Mail":
      return <Mail className={className} />;
    case "Repeat":
      return <Database className={className} />;
    case "TrendingUp":
      return <BarChart3 className={className} />;
    case "Globe":
      return <Globe className={className} />;
    default:
      return <Terminal className={className} />;
  }
};

const Services: React.FC = () => {
  const { platform } = useFilter();
  const isShopify = platform === "shopify";

  const filteredServices = SERVICES.filter(
    (s) => s.platform === platform || s.platform === "all",
  );

  return (
    <section className="relative bg-white py-32 dark:bg-slate-950">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 bg-gradient-to-b ${
            isShopify
              ? "from-indigo-50/50 dark:from-indigo-950/30"
              : "from-blue-50/50 dark:from-blue-950/30"
          } to-transparent opacity-50 blur-3xl transition-colors duration-500`}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-slate-800 dark:bg-slate-900">
            <Sparkles
              className={`h-5 w-5 ${isShopify ? "text-indigo-500" : "text-blue-500"} animate-pulse`}
            />
            <span className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
              Core Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            We Build <br />
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                isShopify
                  ? "from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
                  : "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
              }`}
            >
              {isShopify ? "E-Commerce Giants." : "Digital Platforms."}
            </span>
          </h2>
        </div>

        {/* Services Cards */}
        <div key={platform} className="flex flex-col gap-8 pb-20">
          {filteredServices.map((service, index) => {
            const theme = getTheme(index);
            const stickyTop = 100 + index * 15;

            return (
              <div
                key={service.id}
                className={`sticky rounded-xl border shadow-2xl transition-all duration-500 dark:shadow-none ${theme.bg} ${theme.border}`}
                style={{ top: `${stickyTop}px`, zIndex: index + 1 }}
              >
                <div className="flex flex-col gap-8 p-6 md:p-12 lg:flex-row lg:items-center">
                  {/* Left */}
                  <div className="shrink-0 lg:w-[35%] flex flex-col items-center lg:items-start">
                    <div
                      className={`mb-6 flex h-20 w-20 items-center justify-center rounded-xl ${theme.iconBox}`}
                    >
                      {getIcon(service.icon, "h-10 w-10")}
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-center lg:text-left ${theme.title}`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col gap-6 lg:w-[65%]">
                    <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300">
                      {service.description}
                    </p>

                    <div className="flex flex-col gap-4 border-t border-black/5 pt-6 dark:border-white/5 xl:flex-row xl:items-center xl:justify-between">
                      <div className="flex flex-wrap gap-2">
                        {service.points
                          .slice(0, 3)
                          .map((point: string, idx: number) => (
                            <span
                              key={idx}
                              className="rounded-xl border border-black/5 bg-white/60 px-3 py-1 text-sm font-bold text-slate-700 backdrop-blur-sm dark:border-white/5 dark:bg-slate-800/50 dark:text-slate-300"
                            >
                              {point}
                            </span>
                          ))}
                      </div>

                      <Link
                        href="/contact"
                        className={`group flex items-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base font-bold shadow-lg transition-all hover:scale-105 active:scale-95 ${theme.accent}`}
                      >
                        Start Project
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No services found for this category.
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-slate-400">
            Looking for something else?{" "}
            <Link
              href="/contact"
              className={`underline decoration-2 underline-offset-4 ${
                isShopify
                  ? "text-indigo-600 hover:text-indigo-500"
                  : "text-blue-600 hover:text-blue-500"
              }`}
            >
              Let&apos;s build a custom solution.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
