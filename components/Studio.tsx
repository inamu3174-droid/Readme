"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "18", label: "Design awards" },
  { value: "9", label: "Years in practice" },
  { value: "24", label: "Countries served" },
];

export function Studio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.from(".studio-stat", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".studio-stats",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heading =
    "We build interfaces that feel like they were carved, not coded.";
  const words = heading.split(" ");

  return (
    <section id="studio" ref={sectionRef} className="relative w-full bg-ink px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <span className="font-body text-[11px] uppercase tracking-widest2 text-clay">
          The Studio
        </span>

        <p className="mt-6 overflow-hidden font-display text-3xl font-light leading-tight text-ivory sm:text-5xl">
          {words.map((word, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden">
              <span
                ref={(el) => {
                  if (el) wordsRef.current[i] = el;
                }}
                className="inline-block"
              >
                {word}
              </span>
            </span>
          ))}
        </p>

        <div className="studio-stats mt-20 grid grid-cols-2 gap-8 border-t border-ivory/10 pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="studio-stat">
              <div className="font-display text-3xl italic text-clay sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 font-body text-xs uppercase tracking-widest2 text-ivory/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
