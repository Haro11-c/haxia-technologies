import AdminShell from "@/components/ui/AdminShell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell title="Dashboard">{children}</AdminShell>;
}