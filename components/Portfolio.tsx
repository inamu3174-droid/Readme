"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { portfolioProjects } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="font-body text-[11px] uppercase tracking-widest2 text-clay">
          Selected Work
        </span>
        <h2 className="mt-4 font-display text-4xl font-light italic text-ivory sm:text-6xl">
          A portfolio of quiet ambition.
        </h2>
      </div>

      <div className="mt-16 flex w-full items-center justify-center overflow-hidden">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1.4,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="portfolio-swiper w-full"
        >
          {portfolioProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof portfolioProjects)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);
  const imageX = useTransform(springX, [0, 1], [-10, 10]);
  const imageY = useTransform(springY, [0, 1], [-10, 10]);
  const glowX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(springY, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="glass group relative h-[460px] w-[340px] overflow-hidden rounded-2xl"
    >
      <motion.div
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(184,153,107,0.35), transparent 60%)`,
        }}
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <motion.div
        style={{ x: imageX, y: imageY, scale: 1.15 }}
        className="absolute inset-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between font-body text-[11px] uppercase tracking-widest2 text-ivory/60">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-display text-2xl font-light text-ivory">
          {project.title}
        </h3>
        <a
          href="#contact"
          className="mt-2 inline-flex w-fit items-center gap-1.5 border-b border-ivory/30 pb-1 font-body text-xs uppercase tracking-widest2 text-ivory transition-colors group-hover:border-clay group-hover:text-clay"
        >
          View Project
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.div>
  );
}
