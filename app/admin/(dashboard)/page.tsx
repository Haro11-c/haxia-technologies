import StatCard from "@/components/ui/AdminStatCard";
import { recentActivity } from "@/data/admin-activity";
import { stats } from "@/data/admin-stats";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:col-span-2">
          <h2 className="mb-1 text-sm font-semibold text-white">Welcome back, Bethel</h2>
          <p className="text-sm text-white/60">
            Here's a quick snapshot. Head to Analytics for traffic trends, or Services to manage
            what's listed on the site.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="mb-3 text-sm font-semibold text-white">Recent activity</h2>
          <ul className="flex flex-col gap-3">
            {recentActivity.map((item) => (
              <li key={item.id} className="text-xs">
                <span className="font-medium text-white">{item.actor}</span>{" "}
                <span className="text-white/60">{item.action}</span>
                <div className="mt-0.5 text-[10px] text-white/40">{item.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}