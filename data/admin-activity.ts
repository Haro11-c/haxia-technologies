// Mock data for the overview page's "Recent activity" list.
// Swap for a real API/database call once the backend is ready.

export type ActivityItem = {
  id: number;
  actor: string;
  action: string;
  time: string;
};

export const recentActivity: ActivityItem[] = [
  { id: 1, actor: "Bethel A.", action: "updated the Services page copy", time: "12m ago" },
  { id: 2, actor: "System", action: "received a new contact form submission", time: "48m ago" },
  { id: 3, actor: "Nahom T.", action: "published a new case study", time: "3h ago" },
  { id: 4, actor: "System", action: "generated the weekly analytics report", time: "1d ago" },
];