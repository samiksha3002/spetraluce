"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "../components/Preloader"; // adjust path if needed

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // 2s preloader
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <Preloader />}
      <div style={{ display: loading ? "none" : "block" }}>
        {children}
      </div>
    </>
  );
}
