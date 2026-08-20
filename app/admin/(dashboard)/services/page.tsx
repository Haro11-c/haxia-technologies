"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import { services as initialServices, ServiceItem } from "@/data/admin-services";
import AddServiceModal from "@/components/ui/AddServiceModal";

const statusStyles: Record<ServiceItem["status"], string> = {
  Published: "bg-emerald-400/15 text-emerald-400",
  Draft: "bg-haxia-orange/15 text-haxia-orange",
  Archived: "bg-white/10 text-white/50",
};

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDelete(id: string) {
    setServices((prev) => prev.filter((s) => s.id !== id));
  }

  function handleAdd(service: ServiceItem) {
    setServices((prev) => [service, ...prev]);
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-white">Services</h2>
            <p className="mt-0.5 text-xs text-white/50">
              Manage what's shown on the public /services page.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 self-start rounded-lg bg-haxia-orange px-3 py-2 text-xs font-medium text-white transition hover:bg-haxia-hover sm:self-auto"
          >
            <Plus className="h-3.5 w-3.5" />
            Add service
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="text-xs text-white/50">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Updated</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.id} className="border-t border-white/5">
                  <td className="px-5 py-3 text-white">{s.name}</td>
                  <td className="px-5 py-3 text-white/70">{s.category}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-[11px] font-medium ${statusStyles[s.status]}`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-white/50">{s.updatedAt}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-1">
                      <Link
                        href={`/admin/services/${s.id}`}
                        className="rounded-md p-1.5 text-white/50 transition hover:bg-white/5 hover:text-white"
                      >
                        <Eye className="h-3.5 w-3.5" />
                      </Link>
                      <button className="rounded-md p-1.5 text-white/50 transition hover:bg-white/5 hover:text-white">
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="rounded-md p-1.5 text-white/50 transition hover:bg-red-500/10 hover:text-red-400"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {services.length === 0 && (
          <p className="px-5 py-8 text-center text-sm text-white/50">
            No services yet. Add one to get started.
          </p>
        )}
      </div>

      <AddServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAdd}
      />
    </>
  );
}