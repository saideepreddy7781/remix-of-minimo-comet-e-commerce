"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSent(true);
    form.reset();
  };

  return (
    <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-xl p-6 md:p-8 shadow-[inset_0_0_1px_rgba(255,255,255,0.35),0_20px_80px_-30px_rgba(99,102,241,0.45)]">
      {sent ? (
        <div>
          <div className="text-lg font-medium">Message sent!</div>
          <p className="mt-1 opacity-80">Thanks for reaching out. We will respond shortly.</p>
          <button
            className="mt-4 h-10 px-5 rounded-full bg-[#FF9500] text-white shadow-[0_16px_40px_-16px_rgba(255,149,0,0.9)] hover:-translate-y-0.5 transition"
            onClick={() => setSent(false)}
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm opacity-70">Name</label>
              <input required name="name" className="mt-1 w-full h-11 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10 px-3 backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#FF9500]/40" />
            </div>
            <div>
              <label className="text-sm opacity-70">Email</label>
              <input required type="email" name="email" className="mt-1 w-full h-11 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10 px-3 backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#FF9500]/40" />
            </div>
          </div>
          <div>
            <label className="text-sm opacity-70">Subject</label>
            <input name="subject" className="mt-1 w-full h-11 rounded-xl border border-white/20 bg-white/60 dark:bg-white/10 px-3 backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#FF9500]/40" />
          </div>
          <div>
            <label className="text-sm opacity-70">Message</label>
            <textarea required name="message" rows={5} className="mt-1 w-full rounded-xl border border-white/20 bg-white/60 dark:bg-white/10 px-3 py-2 backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#FF9500]/40" />
          </div>
          <button type="submit" className="h-11 px-6 rounded-full bg-foreground text-background shadow-lg hover:-translate-y-0.5 transition">Send message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;