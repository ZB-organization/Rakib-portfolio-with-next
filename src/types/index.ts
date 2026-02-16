// Add this new type
export type Platform = "shopify" | "wordpress" | "all";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: string[];
  platform: Platform; // <-- ADD THIS LINE
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Themes" | "Apps" | "Headless" | "Plus" | "Migrations";
  difficulty: "Advanced" | "Intermediate";
  image: string;
  stack: string[];
  stats: {
    label: string;
    value: string;
  }[];
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  platform?: Platform; // <-- Optional for testimonials
}
