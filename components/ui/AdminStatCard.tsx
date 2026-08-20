import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function StatCard({
  label,
  value,
  delta,
  trend,
}: {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}) {
  const Icon = trend === "up" ? ArrowUpRight : ArrowDownRight;
  const trendColor = trend === "up" ? "text-emerald-400" : "text-red-400";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <p className="text-xs font-medium text-white/60">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-white">{value}</p>
      <div className={`mt-2 flex items-center gap-1 text-xs ${trendColor}`}>
        <Icon className="h-3.5 w-3.5" />
        {delta}
      </div>
    </div>
  );
}