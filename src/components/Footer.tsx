import {
  ArrowUpRight,
  Github,
  Heart,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
    {
      icon: <Mail size={18} />,
      href: "mailto:hello@rakibul.dev",
      label: "Email",
    },
  ];

  const sitemap = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = ["Shopify Dev", "Headless Builds", "App Dev", "Performance"];

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 pt-24 pb-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 mb-20">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group mb-6"
            >
              <div className="relative h-10 w-10 rounded-xl overflow-hidden p-[2px] shadow-sm transition-all duration-500 group-hover:shadow-indigo-500/25 group-hover:scale-105">
                <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)]" />
                <div className="relative h-full w-full bg-slate-50 dark:bg-slate-950 rounded-[9px] flex items-center justify-center">
                  <span className="font-black text-sm tracking-tighter text-slate-900 dark:text-white relative top-[1px]">
                    RH
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Rakibul.
              </span>
            </Link>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-sm font-medium">
              Architecting high-performance digital experiences for ambitious
              brands. Specialized in Shopify & Headless commerce.
            </p>

            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
                All Systems Operational
              </span>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Sitemap */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {sitemap.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-500 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-500 transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {currentYear} Rakibul Hashan. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
            >
              Twitter <ArrowUpRight size={12} />
            </a>

            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium pl-4 border-l border-slate-200 dark:border-slate-800">
              <span>Made with</span>
              <Heart
                size={12}
                className="text-rose-500 fill-rose-500 animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
