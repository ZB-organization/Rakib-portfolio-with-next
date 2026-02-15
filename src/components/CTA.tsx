"use client";

import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-white py-20 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-slate-900 px-6 py-16 text-center shadow-2xl dark:bg-indigo-950 md:px-12 md:py-24">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Gradient Orbs */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-[100px] mix-blend-screen" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-violet-500/20 blur-[80px]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                Available for new projects
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Ready to build something <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                extraordinary?
              </span>
            </h2>

            {/* Subtext */}
            <p className="mx-auto mb-8 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-400">
              Stop settling for standard themes. Let&apos;s architect a
              high-performance digital experience that scales with your
              ambition.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-white px-8 py-3 text-base sm:text-lg font-bold text-slate-900 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105 hover:bg-indigo-50 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)] active:scale-95"
              >
                <Sparkles size={20} className="text-indigo-600" />
                Start a Project
              </Link>

              <Link
                href="/about"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-transparent px-6 py-3 text-base sm:text-lg font-bold text-white transition-all hover:border-white/10 hover:bg-white/10"
              >
                <Mail
                  size={20}
                  className="text-slate-400 transition-colors group-hover:text-white"
                />
                Contact Me
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
