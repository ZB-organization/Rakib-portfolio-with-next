// app/projects/[id]/loading.tsx
// Optional: Provides loading UI while page is being generated

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-100  dark:bg-slate-950">
      {/* Header Skeleton */}
      <div className="bg-white pb-12 pt-24 shadow-sm dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="mb-2 h-5 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-12 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            </div>
            <div className="h-12 w-32 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content Skeleton */}
          <div className="space-y-8 lg:col-span-2">
            {/* Gallery Skeletons */}
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800"
              />
            ))}

            {/* Overview Skeleton */}
            <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-900">
              <div className="mb-6 h-8 w-48 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <aside className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-24 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800"
                />
              ))}
            </div>
            <div className="h-96 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800" />
          </aside>
        </div>
      </div>
    </div>
  );
}
