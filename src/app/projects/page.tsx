"use client";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import { useFilter } from "@/context/FilterContext";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of successful Shopify and WordPress e-commerce projects.",
};

export default function ProjectsPage() {
  const { platform } = useFilter();
  return (
    <main className="pt-20">
      <Projects key={platform} hideHeader={false} />

      <CTA />
    </main>
  );
}
