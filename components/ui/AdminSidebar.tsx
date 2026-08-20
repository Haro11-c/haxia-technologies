"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutGrid, LineChart, Layers, LogOut, X, Wallet, Settings } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutGrid, exact: true },
  { href: "/admin/analytics", label: "Analytics", icon: LineChart, exact: false },
  { href: "/admin/services", label: "Services", icon: Layers, exact: false },
  { href: "/admin/settings", label: "Settings", icon: Settings, exact: false },
  { href: "/admin/faqs", label: "FAQs", icon: Layers, exact: false },
  { href: "/admin/Our-Financial-Track", label: "Our Financial Track", icon: Wallet, exact: false },
];

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  function isActive(href: string, exact: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  function handleLogout() {
    document.cookie = "haxia_admin_session=; path=/; max-age=0";
    window.location.href = "/admin/login";
  }

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col border-r border-white/10 bg-haxia-dark px-3 py-5 transition-transform duration-200 lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mb-8 flex items-center justify-between px-2">
       <Link href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo-of-haxia.jpg"
            alt="Haxia Technologies logo"
            width={36}
            height={36}
            className="rounded-lg object-cover"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-haxia-dark dark:text-white">
            Haxia <span className="text-haxia-orange">Technologies</span>
          </span>
        </Link>
        <button onClick={onClose} className="p-1 text-white/50 hover:text-white lg:hidden">
          <X className="h-4.5 w-4.5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map(({ href, label, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition ${
                active
                  ? "bg-haxia-orange/15 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={active ? 2.3 : 2} />
              {label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
      >
        <LogOut className="h-4 w-4" />
        Log out
      </button>
    </aside>
  );
}