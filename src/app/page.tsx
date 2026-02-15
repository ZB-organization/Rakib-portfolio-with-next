"use client"
import CTA from "@/components/CTA";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { useFilter } from "@/context/FilterContext";

export default function HomePage() {
  const { platform } = useFilter();
  return (
    <main className="w-full">
      <Hero />
      <Services />

      {/* Case Studies Section */}
      <div className="bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto pt-24 px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Case Studies
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real results for high-growth brands. Explore how I&apos;ve scaled
            businesses through technical excellence.
          </p>
        </div>
        <Projects key={platform} hideHeader={true} />
      </div>

      <Expertise />
      <Testimonials />
      <CTA />
    </main>
  );
}
