import CTA from "@/components/CTA";
import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional Shopify and WordPress development services for high-performance e-commerce stores.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <Services />
      <CTA />
    </main>
  );
}
