// Mock data for the Services management page.
// Swap for a real API/database call once the backend is ready.

export type ServiceItem = {
  id: string;
  name: string;
  category: "Web Development" | "Mobile Apps" | "Cloud & DevOps" | "Consulting";
  status: "Published" | "Draft" | "Archived";
  updatedAt: string;
};

export const services: ServiceItem[] = [
  { id: "srv-01", name: "Enterprise Web Platforms", category: "Web Development", status: "Published", updatedAt: "Aug 14, 2026" },
  { id: "srv-02", name: "Cross-platform Mobile Apps", category: "Mobile Apps", status: "Published", updatedAt: "Aug 10, 2026" },
  { id: "srv-03", name: "Cloud Migration & DevOps", category: "Cloud & DevOps", status: "Draft", updatedAt: "Aug 18, 2026" },
  { id: "srv-04", name: "Technical Consulting", category: "Consulting", status: "Published", updatedAt: "Jul 30, 2026" },
  { id: "srv-05", name: "Legacy System Modernization", category: "Cloud & DevOps", status: "Archived", updatedAt: "Jun 22, 2026" },
];