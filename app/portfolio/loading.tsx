// app/portfolio/loading.tsx
export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-6 py-20 lg:px-8">
      <div className="mx-auto h-10 w-64 rounded bg-haxia-slate/10" />
      <div className="mx-auto mt-4 h-4 w-96 max-w-full rounded bg-haxia-slate/10" />
      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-haxia-slate/10 p-0">
            <div className="aspect-[3/2] w-full rounded-t-2xl bg-haxia-slate/10" />
            <div className="space-y-3 p-6">
              <div className="h-5 w-3/4 rounded bg-haxia-slate/10" />
              <div className="h-4 w-full rounded bg-haxia-slate/10" />
              <div className="h-4 w-2/3 rounded bg-haxia-slate/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}