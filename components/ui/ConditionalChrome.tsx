"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function ConditionalChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}