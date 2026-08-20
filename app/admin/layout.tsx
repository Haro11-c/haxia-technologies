import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haxia Admin",
  description: "Internal admin dashboard for Haxia Technology",
};

// Lightweight shell for everything under /admin (login + dashboard alike).
// The actual auth guard lives in app/admin/(dashboard)/layout.tsx, since
// the login page must render without being redirected by it.
export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#0B0F19] text-[#E6E9F0] antialiased">{children}</div>;
}
