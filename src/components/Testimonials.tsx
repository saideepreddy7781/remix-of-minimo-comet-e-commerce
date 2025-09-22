// src/components/Testimonials.tsx
export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Loved by shoppers in Bangalore</h2>
        <p className="mt-2 opacity-70">Real words from customers who shop MINIMO for everyday essentials.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Neha R.", role: "Koramangala", quote: "Quality basics at fair prices. The neutrals pair with everything—I keep coming back." },
          { name: "Arun M.", role: "JP Nagar", quote: "Store feels calm and well-curated. Staff helped me find the right fit in minutes." },
          { name: "Sara K.", role: "Jayanagar", quote: "Soft fabrics, clean silhouettes, and quick checkout. MINIMO is my go-to now." },
        ].map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 shadow-[inset_0_0_1px_rgba(255,255,255,0.3),0_24px_90px_-30px_rgba(255,149,0,0.45)] hover:shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_36px_140px_-30px_rgba(255,149,0,0.55)] transition duration-300"
          >
            <blockquote className="text-sm opacity-80">"{t.quote}"</blockquote>
            <figcaption className="mt-4">
              <div className="font-medium">{t.name}</div>
              <div className="text-xs opacity-60">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};