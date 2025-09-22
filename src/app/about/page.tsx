export default function AboutPage() {
  return (
    <main className="relative max-w-6xl mx-auto px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_70%_at_50%_20%,black,transparent_80%)]">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[55rem] w-[55rem] rounded-full bg-[conic-gradient(at_30%_30%,#FFB74D_0deg,#FF9500_120deg,#FFF3E0_240deg,#FFB74D_360deg)] blur-3xl opacity-25" />
      </div>

      <header className="text-center">
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">About MINIMO</h1>
        <p className="mt-2 opacity-80 max-w-2xl mx-auto">We craft calm, minimal everyday essentials—rooted in comfort, soft neutrals, and thoughtful materials.</p>
      </header>

      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 md:p-8 shadow-[inset_0_0_1px_rgba(255,255,255,0.35)]">
          <h2 className="text-lg font-semibold">Our Story</h2>
          <p className="mt-2 text-sm opacity-80">
            Founded in Bangalore, MINIMO began with a simple idea: make getting dressed feel effortless. We curate a tight
            selection of wardrobe basics—tees, shirts, trousers, and accessories—so you can mix and match with confidence.
          </p>

          <h3 className="mt-6 font-medium">Materials & Fit</h3>
          <p className="mt-2 text-sm opacity-80">
            We source soft, breathable fabrics and prioritize comfort-first silhouettes. The palette stays neutral to work
            across seasons and styles.
          </p>

          <h3 className="mt-6 font-medium">What We Believe</h3>
          <ul className="mt-2 space-y-2 text-sm opacity-80 list-disc list-inside">
            <li>Less, but better</li>
            <li>Considered design over quick trends</li>
            <li>Friendly, helpful in-store experience</li>
          </ul>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 h-fit">
          <h2 className="font-medium">Visit Us</h2>
          <p className="mt-2 text-sm opacity-80">582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076</p>
          <p className="mt-2 text-sm opacity-80">Mon–Sun · 11:00 AM – 8:00 PM</p>
          <a
            href="https://maps.google.com/?q=582, 10th Main Road, ISRO Layout, Bengaluru, Karnataka, 560076"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center mt-3 h-10 px-4 rounded-full bg-[#FF9500] text-white shadow-[0_16px_40px_-16px_rgba(255,149,0,0.9)] hover:-translate-y-0.5 transition"
          >
            Open in Maps
          </a>
        </aside>
      </section>
    </main>
  );
}