// src/components/Hero.tsx
export const Hero = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-24 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--foreground)] bg-[var(--secondary)] px-4 py-1.5 text-xs shadow-[4px_4px_0_0_rgba(0,0,0,0.08)]">
        <span className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_0_3px_rgba(255,204,51,0.25)]" />
        Minimo Retail - Bengaluru!
      </div>
      <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
        🧸 Your <span className="text-[var(--primary)]">one-stop</span> shop in Bangalore
      </h1>
      <p className="mt-5 text-base md:text-lg opacity-80 max-w-2xl mx-auto">
        Minimo Retail is a one-stop shop offering toys, trending viral products, cosmetics, home décor items, ladies' handbags, stationery, and daily essentials—all at the lowest prices in Bangalore.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a href="#features" className="inline-flex items-center justify-center px-6 h-12 rounded-full border-2 border-[var(--foreground)] bg-white hover:bg-[var(--secondary)] shadow-[4px_4px_0_0_rgba(0,0,0,0.06)] transition">
          Explore Features
        </a>
      </div>
    </section>
  );
};