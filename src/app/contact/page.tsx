"use client";

import { useFilter } from "@/context/FilterContext";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  HelpCircle,
  Layout,
  Mail,
  MapPin,
  Monitor,
  Send,
  Shield,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import React, { useState } from "react";

// --- Types ---
interface ThemeColors {
  primary: string;
  primaryHover: string;
  bgLight: string;
  bgLightHover: string;
  border: string;
  borderHover: string;
  text: string;
  textLight: string;
  ring: string;
}

// --- Components ---

const FAQItem: React.FC<{
  question: string;
  answer: string;
  themeColors: ThemeColors;
}> = ({ question, answer, themeColors }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 dark:border-slate-700 dark:bg-slate-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between text-left"
      >
        <h3
          className={`text-lg font-semibold text-slate-900 transition-colors ${themeColors.text} dark:text-white`}
        >
          {question}
        </h3>
        <ChevronDown
          size={20}
          className={`${themeColors.text} transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "mt-4 max-h-48" : "max-h-0"
        }`}
      >
        <p className="font-light leading-relaxed text-slate-600 dark:text-slate-400">
          {answer}
        </p>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{
  id: string;
  title: string;
  desc: string;
  price: string;
  icon: React.ReactNode;
  selected: boolean;
  onSelect: (id: string) => void;
  themeColors: ThemeColors;
}> = ({ id, title, desc, price, icon, selected, onSelect, themeColors }) => (
  <div
    onClick={() => onSelect(id)}
    className={`cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
      selected
        ? `${themeColors.border} ${themeColors.bgLight} shadow-md dark:bg-opacity-50 `
        : `border-slate-100 bg-white ${themeColors.borderHover} dark:border-slate-700 dark:bg-slate-800`
    }`}
  >
    <div className="mb-4 flex items-center">
      <div
        className={`mr-4 flex h-12 w-12 items-center justify-center rounded-lg ${
          selected
            ? `${themeColors.primary} text-white`
            : `${themeColors.bgLight} ${themeColors.text} dark:bg-opacity-20`
        }`}
      >
        {icon}
      </div>
      <h4
        className={`text-lg font-bold tracking-tight ${
          selected ? `${themeColors.text}` : "text-slate-900 dark:text-white"
        }`}
      >
        {title}
      </h4>
    </div>
    <p
      className={`text-sm font-light leading-relaxed py-2 ${
        selected ? "text-slate-600" : "text-slate-900 dark:text-slate-400"
      }`}
    >
      {desc}
    </p>
    <p className={`font-bold ${themeColors.text}`}>{price}</p>
  </div>
);

export default function Contact() {
  // 2. Get Platform Context
  const { platform } = useFilter();
  const isShopify = platform === "shopify";

  // 3. Define Dynamic Colors based on Platform
  const colors: ThemeColors = isShopify
    ? {
        primary: "bg-emerald-500",
        primaryHover: "hover:bg-emerald-600",
        bgLight: "bg-emerald-50",
        bgLightHover: "hover:bg-emerald-50",
        border: "border-emerald-500",
        borderHover: "hover:border-emerald-200",
        text: "text-emerald-600 dark:text-emerald-400",
        textLight: "text-emerald-500",
        ring: "focus:border-emerald-500",
      }
    : {
        primary: "bg-blue-600",
        primaryHover: "hover:bg-blue-700",
        bgLight: "bg-blue-50",
        bgLightHover: "hover:bg-blue-50",
        border: "border-blue-500",
        borderHover: "hover:border-blue-200",
        text: "text-blue-600 dark:text-blue-400",
        textLight: "text-blue-500",
        ring: "focus:border-blue-500",
      };

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    projectType: "",
    name: "",
    email: "",
    company: "",
    timeline: "",
    budget: 5000,
    projectTitle: "",
    message: "",
    features: [] as string[],
  });

  // Reset form when platform changes
  const [prevPlatform, setPrevPlatform] = useState(platform);
  if (platform !== prevPlatform) {
    setPrevPlatform(platform);
    setFormData((prev) => ({ ...prev, projectType: "", features: [] }));
    setStep(1);
  }

  // --- Dynamic Data Lists ---

  const projectOptions = isShopify
    ? [
        {
          id: "theme",
          title: "Theme Build / Customization",
          desc: "OS 2.0 sections, Liquid edits, PDP and collection improvements.",
          price: "From $500",
          icon: <Monitor size={24} />,
        },
        {
          id: "builder",
          title: "Landing Page (PageFly)",
          desc: "Figma to PageFly/GemPages with responsive QA and clean flow.",
          price: "From $250",
          icon: <ShoppingBag size={24} />,
        },
        {
          id: "bugfix",
          title: "Bug Fixing + QA",
          desc: "Fix layout breaks, app conflicts, and template bugs safely.",
          price: "$35 / hour",
          icon: <Smartphone size={24} />,
        },
        {
          id: "audit",
          title: "Speed + CRO Audit",
          desc: "Performance, SEO hygiene, and conversion review.",
          price: "$150 flat",
          icon: <HelpCircle size={24} />,
        },
      ]
    : [
        {
          id: "wp-theme",
          title: "Custom Theme Dev",
          desc: "Bespoke WordPress themes built from scratch or starter themes.",
          price: "From $800",
          icon: <Layout size={24} />,
        },
        {
          id: "wp-plugin",
          title: "Plugin / Functionality",
          desc: "Custom plugins, API integrations, and PHP logic.",
          price: "From $400",
          icon: <Database size={24} />,
        },
        {
          id: "wp-fix",
          title: "Maintenance & Fixes",
          desc: "Security patches, updates, and fixing broken layouts.",
          price: "$40 / hour",
          icon: <Shield size={24} />,
        },
        {
          id: "wp-speed",
          title: "Speed Optimization",
          desc: "Caching setup, image optimization, and database cleanup.",
          price: "$200 flat",
          icon: <Code2 size={24} />,
        },
      ];

  const featuresList = isShopify
    ? [
        { id: "custom-sections", label: "Custom Liquid sections" },
        { id: "builder-page", label: "PageFly / GemPages build" },
        { id: "pdp-ux", label: "PDP UX Improvements" },
        { id: "speed", label: "Speed optimization (CWV)" },
        { id: "seo", label: "SEO fixes (Liquid/Meta)" },
        { id: "apps", label: "App integration" },
      ]
    : [
        { id: "custom-post", label: "Custom Post Types (CPT)" },
        { id: "elementor", label: "Elementor / Divi Widget" },
        { id: "acf", label: "ACF Implementation" },
        { id: "security", label: "Security Hardening" },
        { id: "migration", label: "Migration to WP" },
        { id: "api", label: "3rd Party API Setup" },
      ];

  const faqs = isShopify
    ? [
        {
          q: "How fast can you start?",
          a: "Small tasks: 24-48 hours. Full builds: Scheduled after scope review.",
        },
        {
          q: "Do you work with PageFly?",
          a: "Yes. I build pixel-perfect layouts from Figma to PageFly/GemPages.",
        },
        {
          q: "Do you do SEO?",
          a: "Yes. I handle technical SEO (Liquid, Schema, Meta) and speed.",
        },
      ]
    : [
        {
          q: "Do you use Elementor?",
          a: "Yes, I can build custom Elementor widgets or full themes.",
        },
        {
          q: "Can you fix a hacked site?",
          a: "Yes, I perform malware removal and security hardening.",
        },
        {
          q: "Do you build Headless WP?",
          a: "Yes, using Next.js or Gatsby with WordPress as the CMS.",
        },
      ];

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Map ID to readable label based on current list
    const selectedProject = projectOptions.find(
      (p) => p.id === formData.projectType,
    );
    const projectTypeLabel = selectedProject
      ? selectedProject.title
      : formData.projectType;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
      platform: isShopify ? "Shopify" : "WordPress", // Added platform field
      project_type: projectTypeLabel,
      project_type_key: formData.projectType,
      company: formData.company,
      timeline: formData.timeline,
      budget: formData.budget,
      project_title: formData.projectTitle,
      message: formData.message,
      features: formData.features.join(", "),
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables!");
      alert("Configuration error: Missing API keys.");
      setIsSubmitting(false);
      return;
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        setIsSubmitting(false);
        setSubmitted(true);
      },
      (err) => {
        console.log("FAILED...", err);
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      },
    );
  };

  return (
    // haha
    <div className="min-h-screen bg-slate-50 transition-colors duration-300 dark:bg-slate-900 font-['Inter']">
      {/* Header Space */}
      <section className="border-b border-slate-100 bg-white pt-28 pb-10 dark:border-slate-800 dark:bg-slate-900 transition-colors sm:pt-32 md:pt-40 md:pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Build Your{" "}
            <span className={colors.text}>
              {isShopify ? "Shopify Store" : "WordPress Site"}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg md:text-xl">
            {isShopify
              ? "Need a clean theme build, PageFly landing page, or complex Liquid customization? Share your goals below."
              : "Looking for a custom theme, plugin development, or a high-performance site revamp? Let's discuss your needs."}
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] border bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-800 dark:shadow-none sm:p-10 md:p-14">
            {submitted ? (
              <div className="animate-in fade-in zoom-in py-20 text-center duration-500">
                <div
                  className={`mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400`}
                >
                  <CheckCircle2 size={56} />
                </div>
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Inquiry received
                </h2>
                <p className="mx-auto mb-10 max-w-md text-lg font-light text-slate-500 dark:text-slate-400">
                  Thanks, {formData.name}. I will review your details and reply
                  with a clear plan.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className={`font-bold underline-offset-4 hover:underline ${colors.text}`}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-12">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                      Project inquiry
                    </h2>
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      Step {step}{" "}
                      <span className="mx-1 text-slate-200 dark:text-slate-700">
                        /
                      </span>{" "}
                      3
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                    <div
                      className={`progress-fill h-full rounded-full transition-all duration-500 ${colors.primary}`}
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>

                  <form onSubmit={handleSubmit} className="mt-8">
                    {/* Step 1 */}
                    {step === 1 && (
                      <div className="animate-in slide-in-from-right-4 space-y-8 duration-300">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                          What type of {isShopify ? "Shopify" : "WordPress"}{" "}
                          help do you need?
                        </h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-slate-900 dark:text-white">
                          {projectOptions.map((option) => (
                            <ProjectCard
                              key={option.id}
                              {...option}
                              themeColors={colors}
                              selected={formData.projectType === option.id}
                              onSelect={(id) =>
                                setFormData({ ...formData, projectType: id })
                              }
                            />
                          ))}
                        </div>
                        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-end">
                          <button
                            type="button"
                            onClick={nextStep}
                            disabled={!formData.projectType}
                            className={`w-full sm:w-auto flex items-center justify-center rounded-2xl px-8 py-4 font-bold text-white shadow-xl transition-all hover:translate-x-1 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-none ${colors.primary} ${colors.primaryHover}`}
                          >
                            Next step <ArrowRight size={20} className="ml-2" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div className="animate-in slide-in-from-right-4 space-y-8 duration-300">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                          Your details
                        </h3>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                              Full name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className={`w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-slate-900 outline-none transition-all focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 ${colors.ring}`}
                              placeholder="John Doe"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                              Email address *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              className={`w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-slate-900 outline-none transition-all focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 ${colors.ring}`}
                              placeholder="john@example.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                              {isShopify ? "Store URL" : "Website URL"}
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                              className={`w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-slate-900 outline-none transition-all focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 ${colors.ring}`}
                              placeholder="https://yourdomain.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                              Timeline
                            </label>
                            <select
                              value={formData.timeline}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  timeline: e.target.value,
                                })
                              }
                              className={`w-full cursor-pointer appearance-none rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-slate-900 outline-none transition-all focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 ${colors.ring}`}
                            >
                              <option value="">Select timeframe</option>
                              <option value="asap">ASAP</option>
                              <option value="1-week">Within 1 week</option>
                              <option value="2-3-weeks">2-3 weeks</option>
                              <option value="1-month">Within 1 month</option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            Budget (USD)
                          </label>
                          <div className="px-2">
                            <input
                              type="range"
                              min="200"
                              max="15000"
                              step="100"
                              value={formData.budget}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  budget: parseInt(e.target.value),
                                })
                              }
                              className={`h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 dark:bg-slate-700 accent-${isShopify ? "emerald" : "blue"}-500`}
                              // Inline style needed for range accent color if Tailwind class doesn't pick up dynamic template literal immediately in all configs
                              style={{
                                accentColor: isShopify ? "#10b981" : "#2563eb",
                              }}
                            />
                            <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                              <span className="font-mono text-sm font-bold text-slate-400 dark:text-slate-500">
                                $200
                              </span>
                              <span
                                className={`font-mono text-xl font-black ${colors.text}`}
                              >
                                $
                                {formData.budget >= 15000
                                  ? "15K+"
                                  : formData.budget.toLocaleString()}
                              </span>
                              <span className="font-mono text-sm font-bold text-slate-400 dark:text-slate-500">
                                $15K+
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between pt-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-4 font-bold text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                          >
                            Previous
                          </button>
                          <button
                            type="button"
                            onClick={nextStep}
                            className={`flex items-center rounded-2xl px-10 py-4 font-bold text-white shadow-xl transition-all dark:shadow-none ${colors.primary} ${colors.primaryHover}`}
                          >
                            Next step <ArrowRight size={20} className="ml-2" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div className="animate-in slide-in-from-right-4 space-y-8 duration-300">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                          Project details
                        </h3>

                        <div className="space-y-2">
                          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            Project title
                          </label>
                          <input
                            type="text"
                            value={formData.projectTitle}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                projectTitle: e.target.value,
                              })
                            }
                            className={`w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-slate-900 outline-none transition-all focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 ${colors.ring}`}
                            placeholder="e.g. Site Revamp 2.0"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            Goals and issues *
                          </label>
                          <textarea
                            rows={5}
                            required
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            className={`w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 text-slate-900 outline-none transition-all focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:bg-slate-900 ${colors.ring}`}
                            placeholder="What is not working now, what you want to improve, and any reference sites."
                          />
                        </div>

                        <div className="space-y-4">
                          <label className="block text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            What should be included?
                          </label>
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {featuresList.map((feature) => (
                              <label
                                key={feature.id}
                                className={`flex cursor-pointer items-center rounded-2xl border p-4 transition-all ${
                                  formData.features.includes(feature.id)
                                    ? `${colors.border} ${colors.bgLight} dark:bg-opacity-10`
                                    : `border-slate-100 ${colors.borderHover} dark:border-slate-700 dark:hover:bg-slate-700`
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  className="hidden"
                                  checked={formData.features.includes(
                                    feature.id,
                                  )}
                                  onChange={() =>
                                    handleFeatureToggle(feature.id)
                                  }
                                />
                                <div
                                  className={`mr-3 flex h-5 w-5 items-center justify-center rounded-md border-2 ${
                                    formData.features.includes(feature.id)
                                      ? `${colors.primary} border-transparent`
                                      : "border-slate-300 dark:border-slate-600"
                                  }`}
                                >
                                  {formData.features.includes(feature.id) && (
                                    <CheckCircle2
                                      size={12}
                                      className="text-white"
                                    />
                                  )}
                                </div>
                                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                  {feature.label}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-between">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-4 font-bold text-slate-400 transition-colors hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
                          >
                            Previous
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full sm:w-auto flex items-center justify-center rounded-2xl px-8 py-4 font-bold text-white shadow-xl transition-all disabled:opacity-70 dark:shadow-none ${colors.primary} ${colors.primaryHover}`}
                          >
                            {isSubmitting ? (
                              <div className="flex items-center tracking-tight">
                                <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
                                Sending...
                              </div>
                            ) : (
                              <div className="flex items-center tracking-tight">
                                Submit inquiry{" "}
                                <Send size={20} className="ml-3" />
                              </div>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Direct Contact Methods */}
      <section className="bg-white py-16 sm:py-20 md:py-24 transition-colors dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Other ways to reach me
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group rounded-[2rem] border border-slate-100 bg-slate-50 p-10 text-center transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50 dark:hover:shadow-none">
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${colors.bgLight} ${colors.text} transition-transform group-hover:scale-110 dark:bg-opacity-20`}
              >
                <Mail size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Email
              </h3>
              <a
                href="mailto:hello@yourdomain.com"
                className={`font-bold hover:underline ${colors.text}`}
              >
                hello@yourdomain.com
              </a>
            </div>

            <div className="group rounded-3xl sm:rounded-[2rem] border border-slate-100 bg-slate-50 p-6 text-center transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50 dark:hover:shadow-none sm:p-8 md:p-10">
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${colors.bgLight} ${colors.text} transition-transform group-hover:scale-110 dark:bg-opacity-20`}
              >
                <Calendar size={32} />
              </div>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Discovery call
              </h2>
              <button className={`font-bold hover:underline ${colors.text}`}>
                Book a session
              </button>
            </div>

            <div className="group rounded-[2rem] border border-slate-100 bg-slate-50 p-10 text-center transition-all hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50 dark:hover:shadow-none">
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${colors.bgLight} ${colors.text} transition-transform group-hover:scale-110 dark:bg-opacity-20`}
              >
                <MapPin size={32} />
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Location
              </h3>
              <p className={`font-bold tracking-tight ${colors.text}`}>
                Working globally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 sm:py-20 md:py-24 transition-colors dark:bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-base font-light text-slate-500 dark:text-slate-400 sm:text-lg">
              Common questions about my {isShopify ? "Shopify" : "WordPress"}{" "}
              services
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                themeColors={colors}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
