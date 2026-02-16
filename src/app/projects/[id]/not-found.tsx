// app/projects/[id]/not-found.tsx
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6 dark:bg-slate-950">
      <div className="text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-red-500 dark:bg-red-900/20">
          <AlertCircle size={40} />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white">
          Project Not Found
        </h1>
        <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
          The project you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-700"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
