// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    // Force light theme for all pages
    setTheme("light");
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("minimo_theme", "light");
      } catch {}
    }
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("minimo_theme", next);
    }
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--primary)] shadow-sm">
          <nav className="flex items-center justify-between px-4 sm:px-6 w-full h-14">
            
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Minimo_Retail_Engish_page-0001-removebg-preview-1758390817013.png"
                alt="MINIMO Retail logo"
                className="h-10 w-auto object-contain" />

            </Link>
             
            <div className="hidden md:flex items-center gap-6 text-sm text-foreground/90">
              <Link href="/" className="opacity-90 hover:opacity-100 underline-offset-4 hover:underline transition">Home</Link>
              <Link href="/about" className="opacity-90 hover:opacity-100 underline-offset-4 hover:underline transition">About</Link>
              <Link href="/contact" className="opacity-90 hover:opacity-100 underline-offset-4 hover:underline transition">Contact</Link>
            </div>

            <div className="flex items-center gap-2">
              <Link href="https://www.facebook.com/share/16s9TDbrp4/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-[var(--border)] bg-white/90 hover:bg-white transition grid place-items-center">
                <FaFacebook className="h-4 w-4 text-foreground" />
              </Link>
              <Link href="https://www.instagram.com/minimoretail?igsh=MXcweWE0emgxYW0=" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-[var(--border)] bg-white/90 hover:bg-white transition grid place-items-center">
                <FaInstagram className="h-4 w-4 text-foreground" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>);

}