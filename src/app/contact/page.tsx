import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative max-w-6xl mx-auto px-6 py-16">
      {/* Nebula backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_20%,black,transparent_80%)]">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[55rem] w-[55rem] rounded-full bg-[conic-gradient(at_30%_30%,#93c5fd_0deg,#c4b5fd_120deg,#99f6e4_240deg,#93c5fd_360deg)] blur-3xl opacity-25" />
      </div>

      <header className="text-center">
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 opacity-80 max-w-2xl mx-auto">We'd love to hear from you. Send us a note and we'll get back with comet speed.</p>
      </header>

      <section className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <ContactForm />

        <aside className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 h-fit shadow-[inset_0_0_1px_rgba(255,255,255,0.35)]">
          <h2 className="font-medium">Visit Us</h2>
          <p className="mt-2 text-sm opacity-80">582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076</p>
          <a
            href="https://maps.google.com/?q=582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center mt-3 h-10 px-4 rounded-full bg-[#FF9500] text-white shadow-[0_16px_40px_-16px_rgba(255,149,0,0.9)] hover:-translate-y-0.5 transition">

            Open in Maps
          </a>
          <div className="mt-6 text-sm">
            <div className="opacity-70">Email</div>
            <a href="mailto:hello@minimo.example" className="hover:underline">hello@minimo.example</a>
            <div className="mt-3 opacity-70">Phone</div>
            <a href="tel:+910000000000" className="hover:underline">+91 00000 00000</a>
          </div>
        </aside>
      </section>
    </main>);

}