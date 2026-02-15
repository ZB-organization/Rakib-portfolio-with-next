"use client";

import CTA from "@/components/CTA";
import { useFilter } from "@/context/FilterContext";
import { Download, Globe, Mail, ShoppingBag, TrendingUp } from "lucide-react";
import Image from "next/image";
import rakib from "../../../public/rakibGlass.jpeg";
export default function About() {
  const { platform } = useFilter();
  const isShopify = platform === "shopify";

  const config = isShopify
    ? {
        theme: {
          accentText: "text-emerald-600 dark:text-emerald-400",
          accentBg: "bg-emerald-600 dark:bg-emerald-500",
          icon: <ShoppingBag size={20} />,
          button: "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500",
          gradient: "gradient-text",
        },
        profile: {
          specialization: "Shopify Plus Expert",
          roiLabel: "Client ROI",
          roiValue: "Average +25% CVR",
        },
        hero: {
          titleStart: "Building commerce that",
          titleHighlight: "powers the future.",
          intro:
            "I'm a Shopify-focused engineer with a deep passion for e-commerce growth. For over 8 years, I've helped brands move from basic storefronts to high-performance, conversion-optimized machines.",
          bio1: "My expertise lies at the intersection of technical excellence and business results. I architect systems that handle millions in revenue, from custom Shopify Plus scripts to headless storefronts.",
          bio2: "From boutique brands to multinational corporations, my goal is always frictionless shopping experiences.",
        },
        recognitions: [
          {
            type: "Official Partner",
            title: "Shopify Plus Partner",
            desc: "Certified excellence in Plus store management.",
          },
          {
            type: "Speaker",
            title: "Shopify Unite 2023",
            desc: "Presented on Headless Storefront Performance.",
          },
        ],
        experience: [
          {
            year: "2020 - Present",
            title: "Lead Shopify Architect",
            company: "Commerce Growth Agency",
          },
          {
            year: "2016 - 2020",
            title: "Independent Shopify Dev",
            company: "Freelance Portfolio",
          },
        ],
      }
    : {
        theme: {
          accentText: "text-blue-600 dark:text-blue-400",
          accentBg: "bg-blue-600 dark:bg-blue-500",
          icon: <Globe size={20} />,
          button: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500",
          gradient:
            "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500",
        },
        profile: {
          specialization: "Custom WP Expert",
          roiLabel: "Performance",
          roiValue: "99/100 Speed Scores",
        },
        hero: {
          titleStart: "Crafting digital experiences",
          titleHighlight: "that scale globally.",
          intro:
            "I'm a WordPress-focused engineer building secure and scalable content platforms.",
          bio1: "From custom PHP themes to headless WP with Next.js and WPGraphQL.",
          bio2: "Every project is optimized for performance, security, and maintainability.",
        },
        recognitions: [
          {
            type: "Certified Expert",
            title: "Codeable Expert",
            desc: "Top 2% of WordPress developers globally.",
          },
          {
            type: "Contributor",
            title: "WordPress Core",
            desc: "Open-source contributor.",
          },
        ],
        experience: [
          {
            year: "2020 - Present",
            title: "Lead WP Architect",
            company: "Digital Enterprise Solutions",
          },
          {
            year: "2016 - 2020",
            title: "Senior PHP Developer",
            company: "Creative Web Agency",
          },
        ],
      };

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* LEFT SIDEBAR */}
            <div className="w-full lg:w-1/3">
              <div className="relative lg:sticky lg:top-32">
                <Image
                  width={600}
                  height={600}
                  src={rakib}
                  alt="Alex Chen"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto rounded-[2rem] sm:rounded-[2.5rem] shadow-xl dark:shadow-none mb-6 sm:mb-8 border dark:border-slate-800"
                />

                <div className="bg-slate-50 dark:bg-slate-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-5 border dark:border-slate-700 transition-colors">
                  {/* Specialization */}
                  <InfoItem
                    icon={config.theme.icon}
                    label="Specialization"
                    value={config.profile.specialization}
                    accent={config.theme.accentText}
                  />

                  <InfoItem
                    icon={<Mail size={20} />}
                    label="Email"
                    value="hello@alexchen.dev"
                    accent={
                      isShopify
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-blue-600 dark:text-blue-400"
                    }
                  />

                  <InfoItem
                    icon={<TrendingUp size={20} />}
                    label={config.profile.roiLabel}
                    value={config.profile.roiValue}
                    accent={
                      isShopify
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-blue-600 dark:text-blue-400"
                    }
                  />

                  <button
                    className={`w-full flex items-center justify-center text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold sm:font-bold mt-4 transition-all shadow-lg dark:shadow-none ${config.theme.button}`}
                  >
                    <Download size={20} className="mr-2" />
                    Download Services Deck
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full lg:w-2/3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 sm:mb-8 tracking-tight leading-tight">
                {config.hero.titleStart}{" "}
                <span className={config.theme.gradient}>
                  {config.hero.titleHighlight}
                </span>
              </h1>

              <div className="prose prose-base sm:prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 max-w-none space-y-5 font-light">
                <p>{config.hero.intro}</p>
                <p>{config.hero.bio1}</p>
                <p>{config.hero.bio2}</p>
              </div>

              <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
                <Timeline
                  title="Recognitions"
                  items={config.recognitions}
                  accentText={config.theme.accentText}
                  accentBg={config.theme.accentBg}
                />

                <Timeline
                  title="Experience"
                  items={config.experience}
                  accentText={
                    isShopify
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-blue-600 dark:text-blue-400"
                  }
                  accentBg={
                    isShopify
                      ? "bg-indigo-600 dark:bg-indigo-500"
                      : "bg-blue-600 dark:bg-blue-500"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

/* ===============================
   Reusable Components
================================ */

function InfoItem({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <div
        className={`w-10 h-10 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm ${accent}`}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          {label}
        </div>
        <div className="font-semibold text-slate-900 dark:text-white">
          {value}
        </div>
      </div>
    </div>
  );
}

function Timeline({
  title,
  items,
  accentText,
  accentBg,
}: {
  title: string;
  items: Array<{
    type?: string;
    year?: string;
    title: string;
    company?: string;
    desc?: string;
  }>;
  accentText: string;
  accentBg: string;
}) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
        {title}
      </h3>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            className="relative pl-7 sm:pl-8 pb-8 sm:pb-10 last:pb-0"
          >
            {index !== items.length - 1 && (
              <div className="absolute left-[2px] sm:left-[3px] top-3 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800" />
            )}

            <div
              className={`absolute left-[-1px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-white dark:ring-slate-900 ${accentBg}`}
            />

            {item.type && (
              <div
                className={`font-bold text-xs mb-1 uppercase tracking-widest ${accentText}`}
              >
                {item.type}
              </div>
            )}

            <div
              className={`font-bold text-xs mb-1 uppercase tracking-widest ${accentText}`}
            >
              {item.year}
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
              {item.title}
            </h4>

            <p className="text-slate-500 dark:text-slate-400 font-light text-sm">
              {item.company || item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
