// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { WhatsAppPopup } from "@/components/WhatsAppPopup";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)]">
      {/* Background: old-school 2D mustard dot pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--primary)_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20" />
        {/* soften top overlay to avoid a hard line */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(245,168,0,0.1)] to-transparent" />
      </div>

      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <WhatsAppPopup />
      <SiteFooter />
    </main>
  );
}