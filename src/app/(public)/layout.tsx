"use client";

import { useEffect, useRef, useState } from "react";
import ChatWidget from "@/components/layout/ChatWidget";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight, { passive: true });

    const observer = headerRef.current
      ? new ResizeObserver(updateHeight)
      : null;
    if (observer && headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F9F9F6]">
      <Header ref={headerRef} />
      <div
        className="flex-grow"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        {children}
      </div>
      <Footer />
      <ChatWidget />
    </div>
  );
}
