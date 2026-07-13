// app/portfolio/[slug]/loading.tsx
export default function Loading() {
  return (
    <div className="animate-pulse">
      <section className="bg-white pb-12 pt-20 lg:pt-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="h-4 w-32 rounded bg-haxia-slate/10" />
          <div className="mt-8 h-6 w-24 rounded-full bg-haxia-slate/10" />
          <div className="mt-4 h-10 w-2/3 rounded bg-haxia-slate/10" />
          <div className="mt-3 h-4 w-full max-w-xl rounded bg-haxia-slate/10" />
        </div>
      </section>
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="aspect-[16/10] w-full rounded-2xl bg-haxia-slate/10" />
        </div>
      </section>
    </div>
  );
}