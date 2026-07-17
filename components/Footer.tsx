"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full border-t border-ivory/10 bg-ink px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="font-body text-[11px] uppercase tracking-widest2 text-clay">
          Let&apos;s Talk
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-4xl font-light italic text-ivory sm:text-6xl"
        >
          Have a project in mind?
        </motion.h2>

        <motion.a
          href="mailto:inamu3174@gmail.com"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-4 font-body text-xs uppercase text-ink transition-colors hover:bg-clay"
        >
          inamu3174@gmail.com
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>
      </div>

      <div className="mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 font-body text-xs uppercase tracking-widest2 text-ivory/40 sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Atelier Noir</span>
        <span>Design Beyond Imagination</span>
      </div>
    </footer>
  );
}
