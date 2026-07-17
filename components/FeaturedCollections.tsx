"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { collections } from "@/data/collections";

export function FeaturedCollections() {
  const [active, setActive] = useState(0);

  return (
    <section id="collections" className="relative w-full bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="font-body text-[11px] uppercase tracking-widest2 text-clay">
          Featured Collections
        </span>
        <h2 className="mt-4 font-display text-4xl font-light italic text-ivory sm:text-6xl">
          Stories, expanded.
        </h2>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-6xl flex-col gap-2 px-4 sm:flex-row sm:gap-3 sm:px-6">
        {collections.map((item, index) => (
          <Panel
            key={item.id}
            item={item}
            isActive={active === index}
            onActivate={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}

function Panel({
  item,
  isActive,
  onActivate,
}: {
  item: (typeof collections)[number];
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-2xl"
      onClick={onActivate}
      onHoverStart={onActivate}
      initial={false}
      animate={{
        flex: isActive ? 5 : 1,
        height: isActive ? "34rem" : "5rem",
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ flexBasis: 0 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: isActive ? 1 : 1.12,
          filter: isActive ? "blur(0px)" : "blur(3px)",
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{
          background: isActive
            ? "linear-gradient(0deg, rgba(11,11,12,0.85) 0%, rgba(11,11,12,0.15) 55%, rgba(11,11,12,0.35) 100%)"
            : "linear-gradient(0deg, rgba(11,11,12,0.55) 0%, rgba(11,11,12,0.55) 100%)",
        }}
        transition={{ duration: 0.6 }}
      />

      <AnimatePresence>
        {!isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center sm:items-end sm:justify-start sm:p-5"
          >
            <span className="font-display text-base italic text-ivory sm:origin-bottom-left sm:-rotate-90 sm:whitespace-nowrap sm:text-lg">
              {item.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8"
          >
            <span className="font-body text-[11px] uppercase tracking-widest2 text-clay">
              {item.tag}
            </span>
            <h3 className="font-display text-3xl font-light text-ivory sm:text-4xl">
              {item.title}
            </h3>
            <p className="max-w-md font-body text-sm font-light text-ivory/75">
              {item.description}
            </p>
            <a
              href="#contact"
              className="group/btn mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-ivory/30 px-5 py-2.5 font-body text-xs uppercase tracking-widest2 text-ivory transition-colors hover:border-ivory hover:bg-ivory hover:text-ink"
            >
              Read More
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
