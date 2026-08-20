"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { ServiceItem } from "@/data/admin-services";

const categories: ServiceItem["category"][] = [
  "Web Development",
  "Mobile Apps",
  "Cloud & DevOps",
  "Consulting",
];

const statuses: ServiceItem["status"][] = ["Published", "Draft", "Archived"];

export default function AddServiceModal({
  isOpen,
  onClose,
  onAdd,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (service: ServiceItem) => void;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<ServiceItem["category"]>("Web Development");
  const [status, setStatus] = useState<ServiceItem["status"]>("Draft");

  // Reset the form each time the modal is opened fresh.
  useEffect(() => {
    if (isOpen) {
      setName("");
      setCategory("Web Development");
      setStatus("Draft");
    }
  }, [isOpen]);

  // Close on Escape.
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      id: `srv-${Date.now()}`,
      name: name.trim(),
      category,
      status,
      updatedAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      />

      {/* Panel */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-haxia-dark p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Add service</h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-white/50 transition hover:bg-white/5 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/60">
              Service name
            </label>
            <input
              type="text"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. API Integration Services"
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-haxia-orange/60"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/60">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as ServiceItem["category"])}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition focus:border-haxia-orange/60"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="bg-haxia-dark">
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/60">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as ServiceItem["status"])}
              className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-white outline-none transition focus:border-haxia-orange/60"
            >
              {statuses.map((s) => (
                <option key={s} value={s} className="bg-haxia-dark">
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-haxia-orange px-4 py-2 text-xs font-medium text-white transition hover:bg-haxia-hover"
            >
              Add service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}