"use client";
import { useFilter } from "@/context/FilterContext";
import React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

// --- DATA DEFINITIONS ---

const SHOPIFY_CHART = [
  { subject: "Liquid / OS 2.0", A: 98, fullMark: 100 },
  { subject: "Page Builders", A: 95, fullMark: 100 },
  { subject: "Performance", A: 92, fullMark: 100 },
  { subject: "UX / CRO", A: 88, fullMark: 100 },
  { subject: "Email / Klaviyo", A: 85, fullMark: 100 },
  { subject: "App Integrations", A: 90, fullMark: 100 },
];

const WP_CHART = [
  { subject: "Theme Dev", A: 94, fullMark: 100 },
  { subject: "Elementor / Divi", A: 98, fullMark: 100 },
  { subject: "Speed & Security", A: 90, fullMark: 100 },
  { subject: "Plugin Dev", A: 82, fullMark: 100 },
  { subject: "WooCommerce", A: 95, fullMark: 100 },
  { subject: "Headless / API", A: 85, fullMark: 100 },
];

const SHOPIFY_SKILLS = [
  {
    label: "Theme Sections (Liquid)",
    percentage: 96,
    skills: [
      "OS 2.0 sections",
      "Custom blocks + settings",
      "Metafields + dynamic sources",
      "Reusable section patterns",
    ],
  },
  {
    label: "Page Builders",
    percentage: 95,
    skills: ["PageFly", "GemPages", "Replo", "LayoutHub"],
  },
  {
    label: "Speed Optimization",
    percentage: 92,
    skills: [
      "Lighthouse + CWV audit",
      "Script and app bloat cleanup",
      "Image strategy (WebP)",
      "Lazy load + critical CSS",
    ],
  },
  {
    label: "CRO and Storefront UX",
    percentage: 88,
    skills: [
      "PDP and collection UX",
      "Cart drawer improvements",
      "Trust + offer sections",
      "Mobile conversion fixes",
    ],
  },
  {
    label: "Shopify Email Templates",
    percentage: 84,
    skills: [
      "Branded Shopify Email layouts",
      "Campaign templates",
      "Automation-ready blocks",
      "Cross-device rendering",
    ],
  },
  {
    label: "Shopify Integrations",
    percentage: 78,
    skills: [
      "Theme app embeds",
      "App install support",
      "Third-party widgets",
      "Tracking placement",
    ],
  },
];

const WP_SKILLS = [
  {
    label: "WordPress Theme Dev",
    percentage: 94,
    skills: [
      "Custom PHP Themes",
      "Child Themes",
      "Template Hierarchy",
      "Gutenberg Blocks",
    ],
  },
  {
    label: "Visual Builders",
    percentage: 98,
    skills: ["Elementor Pro", "Divi", "Oxygen Builder", "Bricks"],
  },
  {
    label: "Speed & Security",
    percentage: 90,
    skills: [
      "Caching (WP Rocket)",
      "Database Cleanup",
      "Malware Removal",
      "Security Hardening",
    ],
  },
  {
    label: "WooCommerce",
    percentage: 95,
    skills: [
      "Custom Checkout",
      "Product Templates",
      "Payment Gateways",
      "Subscription Setup",
    ],
  },
  {
    label: "Plugin Development",
    percentage: 82,
    skills: [
      "Custom Post Types (CPT)",
      "Shortcodes",
      "Admin Dashboard Widgets",
      "API Integrations",
    ],
  },
  {
    label: "Migration & Maintenance",
    percentage: 88,
    skills: [
      "Site Migration",
      "Server Management",
      "DNS Configuration",
      "Regular Backups",
    ],
  },
];

// --- COMPONENTS ---

const SkillBar: React.FC<{
  label: string;
  percentage: number;
  skills: string[];
  colorClass: string;
  bgClass: string;
}> = ({ label, percentage, skills, colorClass, bgClass }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
    <div className="flex justify-between items-center mb-3">
      <h4 className="font-bold text-slate-900 dark:text-white tracking-tight">
        {label}
      </h4>
      <span className={`font-bold ${colorClass}`}>{percentage}%</span>
    </div>

    <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full mb-4 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${bgClass}`}
        style={{ width: `${percentage}%` }}
      />
    </div>

    <div className="grid grid-cols-2 gap-y-2">
      {skills.map((skill) => (
        <div
          key={skill}
          className="flex items-center text-xs text-slate-500 dark:text-slate-400 font-medium"
        >
          <div className={`w-1 h-1 rounded-full mr-2 ${bgClass} opacity-60`} />
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const Expertise: React.FC = () => {
  // 2. Get Platform Context
  const { platform } = useFilter();
  const isShopify = platform === "shopify";

  // 3. Define Dynamic Data & Colors
  const chartData = isShopify ? SHOPIFY_CHART : WP_CHART;
  const skillsList = isShopify ? SHOPIFY_SKILLS : WP_SKILLS;

  // Colors: Emerald for Shopify, Blue for WP
  const themeColors = isShopify
    ? {
        text: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-600 dark:bg-emerald-500",
        stroke: "#10b981", // Emerald 500
        fill: "#10b981",
      }
    : {
        text: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-600 dark:bg-blue-500",
        stroke: "#3b82f6", // Blue 500
        fill: "#3b82f6",
      };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            {isShopify ? "Shopify Expertise" : "WordPress Expertise"}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {isShopify
              ? "Specialised in Shopify theme sections, page builders, and storefront performance for conversion-focused stores."
              : "Expert in custom WordPress development, high-performance visual builders, and secure e-commerce integrations."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Chart Card */}
          <div className="w-full lg:w-[45%] bg-white dark:bg-slate-800 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center tracking-tight">
              Skills Overview
            </h3>

            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={chartData}
                >
                  <PolarGrid
                    stroke="#e2e8f0"
                    className="opacity-20 dark:opacity-10"
                  />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "#64748b", fontSize: 12, fontWeight: 600 }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke={themeColors.stroke}
                    fill={themeColors.fill}
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 flex justify-center items-center space-x-2 text-slate-400 dark:text-slate-500 font-medium">
              <span
                className={`w-3 h-3 rounded-full ${themeColors.bg} opacity-40`}
              />
              <span className="text-sm">
                {isShopify
                  ? "Shopify Delivery Strength"
                  : "WordPress Delivery Strength"}
              </span>
            </div>
          </div>

          {/* Skill Bars */}
          <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsList.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                skills={skill.skills}
                colorClass={themeColors.text}
                bgClass={themeColors.bg}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
