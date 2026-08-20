import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Pencil, Tag, Clock, CircleDot } from "lucide-react";
import { services } from "@/data/admin-services";

const statusStyles: Record<string, string> = {
  Published: "bg-emerald-400/15 text-emerald-400",
  Draft: "bg-haxia-orange/15 text-haxia-orange",
  Archived: "bg-white/10 text-white/50",
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/admin/services"
        className="mb-5 inline-flex items-center gap-1.5 text-xs text-white/50 transition hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to services
      </Link>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-white/40">{service.id}</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-white">
              {service.name}
            </h1>
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[service.status]}`}
          >
            {service.status}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
              <Tag className="h-4 w-4 text-white/50" />
            </div>
            <div>
              <p className="text-xs text-white/50">Category</p>
              <p className="mt-0.5 text-sm text-white">{service.category}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
              <CircleDot className="h-4 w-4 text-white/50" />
            </div>
            <div>
              <p className="text-xs text-white/50">Status</p>
              <p className="mt-0.5 text-sm text-white">{service.status}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
              <Clock className="h-4 w-4 text-white/50" />
            </div>
            <div>
              <p className="text-xs text-white/50">Last updated</p>
              <p className="mt-0.5 text-sm text-white">{service.updatedAt}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end border-t border-white/10 pt-5">
          <button className="flex items-center gap-1.5 rounded-lg bg-haxia-orange px-4 py-2 text-xs font-medium text-white transition hover:bg-haxia-hover">
            <Pencil className="h-3.5 w-3.5" />
            Edit service
          </button>
        </div>
      </div>
    </div>
  );
}