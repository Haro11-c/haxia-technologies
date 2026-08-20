// Mock data for the overview page's stat cards.
// Swap for a real API/database call once the backend is ready.

export type StatItem = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
};

export const stats: StatItem[] = [
  { label: "Active Projects", value: "18", delta: "+3 this month", trend: "up" },
  { label: "Total Clients", value: "142", delta: "+9 this month", trend: "up" },
  { label: "Open Inquiries", value: "7", delta: "-2 this week", trend: "down" },
  { label: "Monthly Revenue", value: "$48,200", delta: "+12.4%", trend: "up" },
];