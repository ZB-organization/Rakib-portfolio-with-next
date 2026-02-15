import { Service, Testimonial } from "@/types";


export const SERVICES: Service[] = [
  {
    id: "themes",
    title: "Custom Theme and Section Development",
    description: "Custom Online Store 2.0 sections and theme improvements built in Liquid with clean, maintainable code and strong performance.",
    icon: "Monitor",
    platform: "shopify", // <--- Added Tag
    points: [
      "Custom OS 2.0 sections",
      "Pixel-accurate implementation",
      "Clean, maintainable Liquid",
      "Mobile-first responsive layouts",
    ],
  },
  {
    id: "pagebuilders",
    title: "Page Builder Landing Pages",
    description: "High-converting landing pages built in PageFly, GemPages, Replo, or LayoutHub, matched to your brand and optimized for mobile.",
    icon: "Layers",
    platform: "shopify",
    points: [
      "PageFly builds and fixes",
      "GemPages product and funnel pages",
      "Replo premium layouts",
      "LayoutHub quick builds",
    ],
  },
  {
    id: "figma",
    title: "Figma to Shopify Implementation",
    description: "Figma designs converted into Shopify sections or page builder templates with consistent spacing, typography, and responsive behavior.",
    icon: "PenTool",
    platform: "shopify",
    points: [
      "Figma to Liquid sections",
      "Figma to PageFly or GemPages",
      "Reusable blocks and components",
      "Cross-device QA",
    ],
  },
  {
    id: "speed",
    title: "Shopify Speed Optimization",
    description: "Speed improvements focused on Lighthouse metrics, Core Web Vitals, and real storefront usability without breaking the design.",
    icon: "Gauge",
    platform: "shopify",
    points: [
      "Lighthouse and CWV audit",
      "Image and script optimization",
      "Theme bloat cleanup",
      "Faster mobile load time",
    ],
  },
  {
    id: "email",
    title: "Shopify Email Template Design",
    description: "Clean, branded Shopify Email templates for campaigns and automations, built to render well across major inboxes.",
    icon: "Mail",
    platform: "shopify",
    points: [
      "Branded template system",
      "Campaign and automation layouts",
      "Mobile-friendly email design",
      "Reliable rendering and testing",
    ],
  },
  {
    id: "cro",
    title: "Storefront Conversion Improvements",
    description: "Practical UI improvements that reduce friction and improve add-to-cart flow, product clarity, and mobile usability.",
    icon: "TrendingUp",
    platform: "shopify",
    points: [
      "PDP and collection page UX",
      "Cart drawer and mini-cart tuning",
      "Trust blocks and offer sections",
      "Layout and spacing fixes",
    ],
  },
  {
    id: "migration",
    title: "Theme Migration and Rebuild Support",
    description: "Safe storefront migration help for theme upgrades, Online Store 2.0 rebuilds, and builder-to-theme transitions.",
    icon: "Repeat",
    platform: "shopify",
    points: [
      "Theme upgrade support",
      "OS 2.0 section rebuilding",
      "Template and redirect checks",
      "Post-migration QA",
    ],
  },
  {
    id: "support",
    title: "Ongoing Store Support",
    description: "Ongoing fixes, new sections, landing pages, and monthly improvements for active Shopify stores.",
    icon: "LifeBuoy",
    platform: "shopify",
    points: [
      "Bug fixing and maintenance",
      "New sections every month",
      "Landing page iterations",
      "Priority turnaround for retainer clients",
    ],
  },
  // --- DUMMY WORDPRESS SERVICE (FOR TESTING) ---
  {
    id: "wp-dev",
    title: "Custom WordPress Development",
    description: "High-performance WordPress sites built with custom themes or Elementor/Divi.",
    icon: "Globe", // You might need to import Globe if not available, or reuse Monitor
    platform: "wordpress",
    points: [
      "Custom Theme Development",
      "Plugin Customization",
      "Speed Optimization",
      "Security Hardening",
    ],
  },
];

// ------------------------------------------------------------------
// TYPES (Project, Metrics, etc.)
// ------------------------------------------------------------------

export type ProjectMetric = { label: string; value: string };
export type ChartPoint = {
  name: string;
  LoadTime?: number; // Made optional to match usage
  Conversion?: number;
  Satisfaction?: number;
};

export type ArchitectureTech = {
  name: string;
  desc: string;
  tone: "blue" | "green" | "yellow" | "purple";
};

export type ChallengeItem = {
  title: string;
  challenge: string;
  solution: string;
};

export type ProcessStep = {
  title: string;
  desc: string;
  range: string;
};

export type Achievement = {
  title: string;
  desc: string;
};

export interface Project {
  id: string;
  isFeatured?: boolean; // Made optional
  title: string;
  description: string;
  category: string;
  platform: 'shopify' | 'wordpress' | 'all'; // <--- ADDED THIS
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  industry: string;
  image: string;
  gallery: string[];
  stack: string[];
  duration: string;
  clientRegion?: string;
  projectType?: string;
  links: {
    live: string;
    repo?: string;
    figma?: string;
    adminPreview?: string;
  };
  highlights?: string[];
  stats: { label: string; value: string }[];
  chartData: { name: string; LoadTime?: number; Conversion?: number; Satisfaction?: number }[];
  overview: {
    intro: string;
    outcome: string;
  };
  architecture: {
    tech: { name: string; desc: string; tone: "blue" | "green" | "yellow" | "purple" }[];
    system: {
      frontend: string[];
      backend: string[];
      data: string[];
    };
  };
  challenges: { title: string; challenge: string; solution: string }[];
  process: { title: string; desc: string; range: string }[];
  achievements: { title: string; desc: string }[];
}

// ------------------------------------------------------------------
// PROJECTS
// ------------------------------------------------------------------

export const PROJECTS: Project[] = [
  // --- 1. FEATURED / ONGOING ---
  {
    id: "1",
    isFeatured: true,
    title: "Vilasha",
    description: "Premium fashion storefront focused on merchandising, clean navigation, and conversion-first product pages.",
    category: "Themes",
    platform: "shopify", // <--- Added Tag
    difficulty: "Intermediate",
    industry: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1600"
    ],
    stack: ["Shopify", "Liquid", "Tailwind", "JavaScript", "SEO"],
    duration: "Ongoing",
    clientRegion: "India",
    projectType: "Theme Build",
    links: { live: "https://vilasha.in/" },
    highlights: ["Homepage merchandising tuning", "PDP sizing & trust blocks", "Mobile performance cleanup"],
    stats: [{ label: "Industry", value: "Fashion" }, { label: "Focus", value: "Conversion" }, { label: "Work", value: "Theme" }],
    chartData: [{ name: "Week 1", LoadTime: 2.9, Conversion: 2.2 }, { name: "Week 6", LoadTime: 1.2, Conversion: 3.5 }],
    overview: { intro: "A fashion-first storefront needing premium feel and fast mobile loading.", outcome: "Refined theme for smoother purchase path." },
    architecture: {
      tech: [{ name: "Shopify", desc: "Storefront", tone: "blue" }, { name: "Liquid", desc: "Templates", tone: "green" }],
      system: { frontend: ["Theme sections"], backend: ["Admin config"], data: ["Products"] }
    },
    challenges: [{ title: "Merchandising", challenge: "Products needed better visibility.", solution: "Improved collection hierarchy." }],
    process: [{ title: "Build", desc: "Theme updates", range: "Week 1-4" }],
    achievements: [{ title: "Better UX", desc: "Clearer buying path." }]
  },
  {
    id: "2",
    title: "MaleIQ Wellness Funnel",
    description: "PageFly landing page for a wellness brand, optimized for long-form persuasion and mobile reading.",
    category: "Page Builders",
    platform: "shopify",
    difficulty: "Advanced",
    industry: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1550572017-4fcdbb560447?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600"
    ],
    stack: ["Shopify", "PageFly", "Custom CSS", "CRO"],
    duration: "Ongoing",
    clientRegion: "International",
    projectType: "Landing Page",
    links: { live: "https://maleiq.com/products/erectile-dysfunction-treatments" },
    highlights: ["Long-form layout structure", "Mobile typography tuning", "Checkout handoff optimization"],
    stats: [{ label: "Builder", value: "PageFly" }, { label: "Goal", value: "Higher CVR" }, { label: "Focus", value: "Mobile" }],
    chartData: [{ name: "Week 1", Conversion: 1.9 }, { name: "Week 6", Conversion: 3.5 }],
    overview: { intro: "High-traffic landing page needing better structure.", outcome: "Improved narrative flow and CTA rhythm." },
    architecture: {
      tech: [{ name: "PageFly", desc: "Builder", tone: "green" }],
      system: { frontend: ["Landing Layout"], backend: ["Checkout"], data: ["Content"] }
    },
    challenges: [{ title: "Readability", challenge: "Dense text on mobile.", solution: "Improved spacing and typography." }],
    process: [{ title: "Optimize", desc: "Mobile-first tweaks", range: "Week 1-3" }],
    achievements: [{ title: "Higher Trust", desc: "Better proof placement." }]
  },
  {
    id: "3",
    title: "Able Trailers",
    description: "Automotive storefront with structured collections, parts-style navigation, and catalog-first usability.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Automotive",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1486262715619-01b80258e0a5?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1600"
    ],
    stack: ["Shopify", "Liquid", "Navigation UX", "SEO"],
    duration: "Ongoing",
    clientRegion: "Australia",
    projectType: "Theme Build",
    links: { live: "https://abletrailers.com.au/" },
    highlights: ["Catalog structure cleanup", "Parts-style navigation", "SEO hygiene"],
    stats: [{ label: "Industry", value: "Auto" }, { label: "Focus", value: "Catalog" }, { label: "Work", value: "Theme" }],
    chartData: [{ name: "Week 1", Satisfaction: 4.1 }, { name: "Week 6", Satisfaction: 4.7 }],
    overview: { intro: "Heavy catalog needing better organization.", outcome: "Simplified menus and filtering." },
    architecture: {
      tech: [{ name: "Shopify", desc: "Platform", tone: "blue" }],
      system: { frontend: ["Menus"], backend: ["Collections"], data: ["Fitment"] }
    },
    challenges: [{ title: "Navigation", challenge: "Too many categories.", solution: "Mega-menu implementation." }],
    process: [{ title: "Structure", desc: "Catalog audit", range: "Week 1-2" }],
    achievements: [{ title: "Faster Finding", desc: "Reduced clicks to product." }]
  },
  {
    id: "4",
    title: "Senteurs Bauloises",
    description: "Bug fixes and theme stabilization for a fragrance store, keeping design consistent across templates.",
    category: "Bug Fixing",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Beauty & Skincare",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1596462502278-27bfdd403cc2?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1600"
    ],
    stack: ["Shopify", "Liquid", "Debugging", "QA"],
    duration: "Ongoing",
    clientRegion: "France",
    projectType: "Bug Fixing",
    links: { live: "https://senteursbauloises.fr/" },
    highlights: ["Template logic fixes", "Mobile responsiveness patch", "Cart flow stabilization"],
    stats: [{ label: "Work", value: "Fixes" }, { label: "Focus", value: "Stability" }, { label: "Industry", value: "Beauty" }],
    chartData: [{ name: "Week 1", Satisfaction: 4.0 }, { name: "Week 6", Satisfaction: 4.8 }],
    overview: { intro: "Visual regressions and broken flows.", outcome: "Stable theme with no design breaks." },
    architecture: {
      tech: [{ name: "Liquid", desc: "Debugging", tone: "yellow" }],
      system: { frontend: ["Templates"], backend: ["Settings"], data: ["Products"] }
    },
    challenges: [{ title: "Regressions", challenge: "Fixes breaking other pages.", solution: "Isolated CSS scope." }],
    process: [{ title: "Patch", desc: "Code fixes", range: "Week 1" }],
    achievements: [{ title: "Stability", desc: "Error-free shopping path." }]
  },
  {
    id: "5",
    title: "Posh Whimsy Sales Page",
    description: "Figma-to-PageFly build with pixel-perfect spacing and responsive behavior.",
    category: "Figma to Shopify",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1520975958225-8f12f4a02f6b?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1520975958225-8f12f4a02f6b?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=1600"
    ],
    stack: ["PageFly", "Figma", "CSS", "Responsive"],
    duration: "Ongoing",
    clientRegion: "International",
    projectType: "Landing Page",
    links: { live: "https://poshwhimsy.store/pages/salespage" },
    highlights: ["Pixel-perfect Figma match", "Mobile stacking logic", "Reusable blocks"],
    stats: [{ label: "Source", value: "Figma" }, { label: "Tool", value: "PageFly" }, { label: "Focus", value: "Design" }],
    chartData: [{ name: "Week 1", Satisfaction: 4.5 }, { name: "Week 6", Satisfaction: 4.9 }],
    overview: { intro: "Direct design translation required.", outcome: "1:1 match with Figma file." },
    architecture: {
      tech: [{ name: "PageFly", desc: "Builder", tone: "green" }],
      system: { frontend: ["Layout"], backend: ["Blocks"], data: ["Assets"] }
    },
    challenges: [{ title: "Spacing", challenge: "Builder defaults differ from Figma.", solution: "Custom padding classes." }],
    process: [{ title: "Build", desc: "Layout assembly", range: "Week 1-2" }],
    achievements: [{ title: "Accuracy", desc: "Exact design match." }]
  },
  {
    id: "6",
    title: "PrintPeak Storefront",
    description: "Tech product store improvements focusing on specs, trust signals, and clarity.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1600"
    ],
    stack: ["Shopify", "Liquid", "UX", "Metafields"],
    duration: "Ongoing",
    clientRegion: "International",
    projectType: "Theme Build",
    links: { live: "https://printpeak.store/products/test-printer" },
    highlights: ["Spec-first PDP layout", "Trust badge placement", "Mobile hierarchy"],
    stats: [{ label: "Industry", value: "Tech" }, { label: "Focus", value: "Specs" }, { label: "Work", value: "UX" }],
    chartData: [{ name: "Week 1", Conversion: 2.0 }, { name: "Week 6", Conversion: 3.1 }],
    overview: { intro: "Technical products need clear specs.", outcome: "Readable spec blocks and trust signals." },
    architecture: {
      tech: [{ name: "Shopify", desc: "Platform", tone: "blue" }],
      system: { frontend: ["PDP"], backend: ["Metafields"], data: ["Specs"] }
    },
    challenges: [{ title: "Complexity", challenge: "Too much info.", solution: "Tabbed spec sections." }],
    process: [{ title: "Refine", desc: "Layout tweaks", range: "Week 1-3" }],
    achievements: [{ title: "Clarity", desc: "Easier to compare products." }]
  },
  // --- 2. CUSTOM CODED PROJECTS ---
  {
    id: "7",
    title: "The Metal Foundry",
    description: "Custom memorial plaque product page with extensive personalization options.",
    category: "Custom Coded",
    platform: "shopify",
    difficulty: "Advanced",
    industry: "Home & Garden",
    image: "https://images.unsplash.com/photo-1628147309830-10900b84d436?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1628147309830-10900b84d436?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Liquid", "JavaScript", "Custom Fields", "Personalization"],
    duration: "Completed",
    clientRegion: "UK",
    projectType: "Custom Dev",
    links: { live: "https://www.themetalfoundry.uk/products/memorials-memorial-plaques-personalised-memorial-brass-plaque-cat" },
    highlights: ["Complex personalization inputs", "Live preview logic", "Custom cart attributes"],
    stats: [{ label: "Type", value: "Custom" }, { label: "Feature", value: "Personalization" }, { label: "Industry", value: "Decor" }],
    chartData: [],
    overview: { intro: "Needed a way to handle complex engraving options.", outcome: "Seamless custom input flow." },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "8",
    title: "Atlantic Fine Furniture",
    description: "High-end furniture store with a focus on catalog presentation and imagery.",
    category: "Custom Coded",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Furniture",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify", "Liquid", "CSS", "Mega Menu"],
    duration: "Completed",
    projectType: "Store Build",
    links: { live: "https://atlanticfinefurniture.com/" },
    highlights: ["Clean catalog grid", "Fast image loading", "Custom navigation"],
    stats: [{ label: "Type", value: "Store" }, { label: "Industry", value: "Furniture" }, { label: "Style", value: "Minimal" }],
    chartData: [],
    overview: { intro: "Showcasing fine furniture requires high-quality assets.", outcome: "Elegant, fast-loading storefront." },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "9",
    title: "BabyBub (Shopify Plus)",
    description: "High-volume store for maternity products. Optimized for scale and conversion.",
    category: "Shopify Plus",
    platform: "shopify",
    difficulty: "Advanced",
    industry: "Maternity & Baby",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1555252333-9f8e92e65df4?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify Plus", "Liquid", "Scripts", "Checkout Ext."],
    duration: "Recent",
    projectType: "Plus Store",
    links: { live: "https://www.babybub.com/" },
    highlights: ["High-volume optimization", "Custom checkout tweaks", "Upsell integration"],
    stats: [{ label: "Plan", value: "Plus" }, { label: "Industry", value: "Baby" }, { label: "Focus", value: "Scale" }],
    chartData: [],
    overview: { intro: "Shopify Plus store needing robust performance.", outcome: "Stable, high-converting architecture." },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  // --- 3. PAGE BUILDER PROJECTS (GemPages / PageFly / Shogun) ---
  {
    id: "10",
    title: "YourDayly Gut Health",
    description: "GemPages landing page focused on health benefits and subscription conversion.",
    category: "Page Builders",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&q=80&w=1600"],
    stack: ["GemPages", "Subscription App", "CSS"],
    duration: "Completed",
    links: { live: "https://www.yourdayly.com/products/dayly-gut-health" },
    highlights: ["Subscription flow integration", "Benefit iconography", "Mobile speed optimization"],
    stats: [{ label: "Tool", value: "GemPages" }, { label: "Focus", value: "Subs" }, { label: "Industry", value: "Health" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "11",
    title: "Ceuticalia Immunity",
    description: "Clean, trustworthy medical-style product page built with GemPages.",
    category: "Page Builders",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=1600"],
    stack: ["GemPages", "Trust Badges", "Mobile UX"],
    duration: "Completed",
    links: { live: "https://ceuticalia.com/products/immunite-defenses-naturelles" },
    highlights: ["Medical aesthetic", "Clear dosage info", "Trust badges"],
    stats: [{ label: "Tool", value: "GemPages" }, { label: "Style", value: "Clean" }, { label: "Industry", value: "Health" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "12",
    title: "Boardy Fitness",
    description: "Dynamic fitness product page with video integration and feature breakdowns.",
    category: "Figma to Shopify",
    platform: "shopify",
    difficulty: "Advanced",
    industry: "Fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1600"],
    stack: ["PageFly", "Video", "Figma"],
    duration: "Completed",
    links: { live: "https://boardyfitness.com/products/boardy-fitness-board" },
    highlights: ["Video background sections", "Interactive feature list", "Figma match"],
    stats: [{ label: "Tool", value: "PageFly" }, { label: "Asset", value: "Video" }, { label: "Industry", value: "Fitness" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "13",
    title: "Fading Culture",
    description: "Shogun-built landing page for a trendy consumer product.",
    category: "Page Builders",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Consumer Goods",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shogun", "Liquid", "Marketing"],
    duration: "Completed",
    links: { live: "https://fadingculture.com/products/the-fadify-2-0" },
    highlights: ["Shogun visual editor", "Custom sections", "Marketing tracking"],
    stats: [{ label: "Tool", value: "Shogun" }, { label: "Focus", value: "Marketing" }, { label: "Industry", value: "Retail" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  // --- 4. THEME & STORE BUILDS (General) ---
  {
    id: "14",
    title: "Sea Cycle Swim",
    description: "Eco-friendly swimwear brand with a clean, ocean-inspired aesthetic.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1566421992-a1b7e28945a0?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify", "Theme Settings", "Branding"],
    duration: "Recent",
    links: { live: "https://www.seacycleswim.com/" },
    highlights: ["Visual storytelling", "Brand color integration", "Clean navigation"],
    stats: [{ label: "Industry", value: "Swim" }, { label: "Style", value: "Eco" }, { label: "Work", value: "Build" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "15",
    title: "HyHy Tech",
    description: "Industrial technology storefront for a US-based client.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Technology & Industrial",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1531297461136-82lw9f3e7949?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify", "B2B Features", "Catalog"],
    duration: "Ongoing",
    clientRegion: "USA",
    links: { live: "https://hyhytech.com/" },
    highlights: ["Technical specs display", "Clean B2B layout", "Search optimization"],
    stats: [{ label: "Industry", value: "Industrial" }, { label: "Region", value: "USA" }, { label: "Focus", value: "B2B" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "16",
    title: "Sweven Plates (POD)",
    description: "Print-on-demand store for custom 3D gel number plates.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Advanced",
    industry: "Automotive",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1494905998402-395d579af905?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify", "POD App", "Custom Options"],
    duration: "Completed",
    links: { live: "https://www.sweven-plates.co.uk/products/3d-gel-number-plates" },
    highlights: ["Custom product builder", "POD integration", "UK compliance checks"],
    stats: [{ label: "Type", value: "POD" }, { label: "Industry", value: "Auto" }, { label: "Feature", value: "Customizer" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "17",
    title: "Maville en Diamant",
    description: "French jewelry store with a luxurious, minimal design.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify", "Translation", "Luxury UI"],
    duration: "Ongoing",
    clientRegion: "France",
    links: { live: "https://mavilleendiamant.fr/" },
    highlights: ["Elegant typography", "High-res gallery", "French localization"],
    stats: [{ label: "Industry", value: "Jewelry" }, { label: "Region", value: "France" }, { label: "Style", value: "Luxury" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "18",
    title: "Stopuzzle",
    description: "Niche puzzle store with a focus on engaging product visuals.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Beginner",
    industry: "Toys & Games",
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify", "Theme Setup", "Grid Layout"],
    duration: "Recent",
    links: { live: "https://stopuzzle.com/" },
    highlights: ["Clean grid layout", "Fast navigation", "Mobile optimized"],
    stats: [{ label: "Industry", value: "Toys" }, { label: "Type", value: "Store" }, { label: "Work", value: "Setup" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "19",
    title: "Ubiskin",
    description: "Skincare brand store featuring PageFly product pages.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Beauty & Skincare",
    image: "https://images.unsplash.com/photo-1556228720-1957be83f793?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1556228720-1957be83f793?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1571781535606-2187d60927df?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify", "PageFly", "Beauty Theme"],
    duration: "Recent",
    links: { live: "https://ubiskin.com/" },
    highlights: ["Landing page integration", "Skin care education blocks", "Review sections"],
    stats: [{ label: "Industry", value: "Beauty" }, { label: "Tool", value: "PageFly" }, { label: "Focus", value: "Ed." }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  {
    id: "20",
    title: "Sarah's Whisper",
    description: "Jewelry and gift shop targeting US and Chinese markets.",
    category: "Themes",
    platform: "shopify",
    difficulty: "Intermediate",
    industry: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1600"],
    stack: ["Shopify", "Localization", "Gifting"],
    duration: "Recent",
    clientRegion: "USA / China",
    links: { live: "https://www.sarahswhisper.com/" },
    highlights: ["Multi-region support", "Gifting options", "Elegant layout"],
    stats: [{ label: "Industry", value: "Jewelry" }, { label: "Market", value: "Intl." }, { label: "Work", value: "Build" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  },
  // --- DUMMY WORDPRESS PROJECT (FOR TESTING) ---
  {
    id: "wp-1",
    title: "TechFlow Blog",
    description: "A high-traffic WordPress technology news portal with custom Elementor widgets.",
    category: "WordPress",
    platform: "wordpress",
    difficulty: "Intermediate",
    industry: "Technology",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1600",
    gallery: ["https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1600"],
    stack: ["WordPress", "Elementor", "PHP", "MySQL"],
    duration: "Recent",
    clientRegion: "USA",
    projectType: "Content Site",
    links: { live: "#" },
    highlights: ["Custom Elementor Widgets", "SEO Optimized", "Speed 95+"],
    stats: [{ label: "Platform", value: "WP" }, { label: "Type", value: "Blog" }, { label: "Tech", value: "PHP" }],
    chartData: [],
    overview: { intro: "", outcome: "" },
    architecture: { tech: [], system: { frontend: [], backend: [], data: [] } },
    challenges: [], process: [], achievements: []
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Founder",
    company: "Luxe Apparel",
    content: "Alex transformed our Shopify store. Our mobile conversion rate doubled in just two months after the redesign.",
    avatar: "https://picsum.photos/seed/sarah/100/100",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Ecommerce Director",
    company: "ProFitness",
    content: "The custom B2B application Alex built for us saved our team 20 hours of manual work every week.",
    avatar: "https://picsum.photos/seed/mike/100/100",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "CMO",
    company: "Glow Skincare",
    content: "Our headless launch was flawless. The speed improvements alone have significantly boosted our organic search traffic.",
    avatar: "https://picsum.photos/seed/emily/100/100",
    rating: 5,
  },
];