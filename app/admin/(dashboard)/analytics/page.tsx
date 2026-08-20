"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { trafficData, trafficSources } from "@/data/admin-traffic";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <h2 className="mb-4 text-sm font-semibold text-white">Visitors &amp; inquiries</h2>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={trafficData}>
            <defs>
              <linearGradient id="visitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF8500" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#FF8500" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "#121212",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Area type="monotone" dataKey="visitors" stroke="#FF8500" fill="url(#visitors)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="mb-4 text-sm font-semibold text-white">Monthly inquiries</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#121212",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="inquiries" fill="#FF8500" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="mb-4 text-sm font-semibold text-white">Traffic sources</h2>
          <ul className="flex flex-col gap-3">
            {trafficSources.map((s) => (
              <li key={s.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-white/70">{s.name}</span>
                  <span className="text-white/50">{s.value}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/5">
                  <div
                    className="h-1.5 rounded-full bg-haxia-orange"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}