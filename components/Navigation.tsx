"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { label: "Work", href: "#portfolio" },
  { label: "Collections", href: "#collections" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 200);
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <nav
        className={`glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-shadow duration-500 sm:px-8 ${
          scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.35)]" : ""
        }`}
      >
        <a
          href="#top"
          className="font-display text-sm italic tracking-wide text-ivory sm:text-base"
        >
          Atelier Noir
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-body text-xs uppercase tracking-widest2 text-ivory/70 transition-colors hover:text-ivory"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-ivory px-4 py-2 font-body text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-clay sm:px-5"
        >
          Start Project
        </a>
      </nav>
    </motion.header>
  );
}
