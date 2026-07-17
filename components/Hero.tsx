"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const columns: string[][] = [
  [
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80&auto=format&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80&auto=format&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80&auto=format&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80&auto=format&fit=crop",
  ],
];

const entrance = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 0.35]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.6]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.2]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.55], [0, -80]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  useEffect(() => {
    const resize = () =>
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-ink">
      <div className="absolute inset-0 flex gap-[2vw] p-[2vw]">
        <Column images={columns[0]} y={y1} offset="-20%" />
        <Column images={columns[1]} y={y2} offset="-55%" />
        <Column images={columns[2]} y={y3} offset="-10%" />
        <Column images={columns[3]} y={y4} offset="-40%" />
      </div>

      <motion.div
        style={{ opacity: scrimOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink"
      />

      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          variants={entrance}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-6 font-body text-[11px] uppercase tracking-widest2 text-ivory/60"
        >
          Atelier Noir &mdash; Est. 2026
        </motion.span>

        <motion.h1
          variants={entrance}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display text-[13vw] font-light leading-[0.95] tracking-tight text-ivory sm:text-[9vw] lg:text-[7.5vw]"
        >
          Design Beyond
          <br />
          <span className="italic text-clay">Imagination.</span>
        </motion.h1>

        <motion.p
          variants={entrance}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-8 max-w-md font-body text-sm font-light text-ivory/70 sm:text-base"
        >
          Creating world-class animated digital experiences.
        </motion.p>

        <motion.div
          variants={entrance}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#portfolio"
            className="group flex items-center gap-2 rounded-full border border-ivory/25 px-6 py-3 font-body text-xs uppercase tracking-widest2 text-ivory transition-colors hover:border-ivory hover:bg-ivory hover:text-ink"
          >
            Explore
            <ArrowDownRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-clay px-6 py-3 font-body text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-ivory"
          >
            Start Project
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <span className="relative block font-body text-[10px] uppercase tracking-widest2 text-ivory/40 after:absolute after:left-1/2 after:top-full after:mt-3 after:h-10 after:w-px after:-translate-x-1/2 after:bg-gradient-to-b after:from-ivory/50 after:to-transparent after:content-['']">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  offset: string;
};

const Column = ({ images, y, offset }: ColumnProps) => {
  return (
    <motion.div
      style={{ y, top: offset }}
      className="relative flex h-full w-1/4 min-w-[180px] flex-col gap-[2vw]"
    >
      {images.map((src, i) => (
        <div key={i} className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
          <img
            src={src}
            alt="Editorial photography from Atelier Noir's archive"
            className="pointer-events-none h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </motion.div>
  );
};
