// app/components/hero.tsx
"use client";

import {
  ArrowRight,
  Github,
  Globe,
  Layers,
  Linkedin,
  ShoppingBag,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useFilter } from "../context/FilterContext";

// --- SUB-COMPONENT: Zero-Layout-Shift Image Loader ---
const HeroImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    /* 1. HARD-CODED ASPECT RATIO: Reserves space immediately */
    <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
      
      {/* 2. SKELETON: Runs while image is loading */}
      <div
        className={`absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse transition-opacity duration-500 
        ${isLoaded ? "opacity-0" : "opacity-100"}`}
      />

      {/* 3. IMAGE: Hidden (opacity-0) until the 'onLoad' event fires */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className={`object-cover transition-all duration-700 ease-out
          ${isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-xl scale-105"}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

// --- MAIN COMPONENT ---
const Hero: React.FC = () => {
  const { platform } = useFilter();

  const content = {
    shopify: {
      badge: "Accepting Shopify Plus Projects",
      titleStart: "Scaling Brands on",
      titleHighlight: "Shopify.",
      description:
        "Expert Shopify Development for high-growth e-commerce brands. I build custom themes, private apps, and headless storefronts that convert visitors into loyal customers.",
      statIcon: <ShoppingBag size={24} />,
      statLabel: "Stores Launched",
      cta: "Scale Your Store",
    },
    wordpress: {
      badge: "Accepting Custom WP Projects",
      titleStart: "Digital Experiences on",
      titleHighlight: "WordPress.",
      description:
        "High-performance WordPress development for businesses and publishers. I build custom themes, plugins, and headless setups that are fast, secure, and easy to manage.",
      statIcon: <Layers size={24} />,
      statLabel: "Sites Launched",
      cta: "Start Your Build",
    },
  };

  const current = platform === "shopify" ? content.shopify : content.wordpress;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-300 bg-white dark:bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-indigo-50 dark:from-indigo-900/10 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 -z-10 w-64 h-64 bg-green-200 dark:bg-green-800 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* --- TEXT CONTENT --- */}
          <div
            key={platform}
            className="flex-1 text-center lg:text-left animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            {/* Dynamic Badge */}
            <div
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-colors duration-300
              ${
                platform === "shopify"
                  ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                  : "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
              }
            `}
            >
              <span className="relative flex h-3 w-3">
                <span
                  className={`animate-pulse absolute inline-flex h-full w-full rounded-full opacity-75 
                  ${platform === "shopify" ? "bg-green-400" : "bg-blue-400"}`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 
                  ${
                    platform === "shopify"
                      ? "bg-green-600 dark:bg-green-500"
                      : "bg-blue-600 dark:bg-blue-500"
                  }`}
                ></span>
              </span>
              <span>{current.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
              {current.titleStart}{" "}
              <span
                className={`gradient-text ${
                  platform === "wordpress" ? "from-blue-600 to-indigo-600" : ""
                }`}
              >
                {current.titleHighlight}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed min-h-[84px]">
              {current.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="/projects"
                className={`group w-full sm:w-auto flex items-center justify-center text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl dark:shadow-none ${
                  platform === "shopify"
                    ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200"
                    : "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                }`}
              >
                View Case Studies
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className={`w-full sm:w-auto flex items-center justify-center bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold text-lg transition-all ${
                  platform === "shopify"
                    ? "hover:border-green-600 hover:text-green-700 dark:hover:text-green-400"
                    : "hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-400"
                }`}
              >
                {current.cta}
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-slate-400">
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* --- IMAGE & STATS --- */}
          <div className="flex-1 relative min-w-0">
            <HeroImage
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600"
              alt="Ecommerce Growth"
            />

            {/* Floating Card 1 */}
            <div
              key={platform + "stat1"}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center 
                  ${
                    platform === "shopify"
                      ? "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400"
                      : "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                  }`}
                >
                  {current.statIcon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">50+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{current.statLabel}</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl z-20 hidden sm:block border border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Globe size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">$10M+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Client Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;