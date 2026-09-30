
"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

const property = {
  image:
    "https://images.unsplash.com/photo-1758448755952-42b404bc6f39?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "The House of Light",
  location: "Gulshan · Dhaka",
  description:
    "A residence shaped by proportion, natural light and the quiet relationship between architecture and landscape.",
};

const beats = [
  {
    number: "01",
    eyebrow: "Architecture",
    title: "Spaces that",
    accent: "feel inevitable.",
  },
  {
    number: "02",
    eyebrow: "Material & Light",
    title: "Every detail",
    accent: "has a reason.",
  },
  {
    number: "03",
    eyebrow: "The Residence",
    title: "A home shaped",
    accent: "by light.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function CinematicMoment() {
  const sectionRef = useRef<HTMLElement>(null);

  const shouldReduceMotion =
    useReducedMotion();

  const [activeBeat, setActiveBeat] =
    useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (value) => {
      const nextBeat =
        value < 0.25
          ? 0
          : value < 0.55
            ? 1
            : 2;

      setActiveBeat((current) =>
        current === nextBeat
          ? current
          : nextBeat,
      );
    },
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion
      ? [1, 1]
      : [1.045, 1.12],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion
      ? ["0%", "0%"]
      : ["0%", "-2%"],
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.14, 0.86, 1],
    [0.92, 1, 1, 0.96],
  );

  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.07, 0.17, 0.24],
    [1, 1, 1, 0],
  );

  const detailOpacity = useTransform(
    scrollYProgress,
    [0.21, 0.29, 0.47, 0.55],
    [0, 1, 1, 0],
  );

  const finalOpacity = useTransform(
    scrollYProgress,
    [0.51, 0.62, 1],
    [0, 1, 1],
  );

  const finalY = useTransform(
    scrollYProgress,
    [0.51, 0.7],
    shouldReduceMotion
      ? [0, 0]
      : [24, 0],
  );

  const progressScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1],
  );

  const beat = beats[activeBeat];

  return (
    <section
      ref={sectionRef}
      className="relative h-[210vh] bg-[#171614]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{
            scale: imageScale,
            y: imageY,
            opacity: imageOpacity,
          }}
          className="absolute -inset-[3%]"
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            quality={95}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/24" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/78" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/18" />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_15%,rgba(0,0,0,0.18)_100%)]" />

        <div className="relative z-10 mx-auto h-full max-w-[1800px] px-6 sm:px-8 md:px-10 lg:px-14">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 sm:left-8 md:left-10 lg:left-14">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-white/35" />

              <span className="text-[8px] uppercase tracking-[0.34em] text-white/45">
                Avenor / Perspective
              </span>
            </div>
          </div>

          <div className="absolute inset-x-6 top-[42%] -translate-y-1/2 sm:inset-x-8 md:inset-x-10 lg:inset-x-14">
            <AnimatePresence
              mode="wait"
              initial={!shouldReduceMotion}
            >
              <motion.div
                key={activeBeat}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion
                    ? 0
                    : 20,
                  filter:
                    shouldReduceMotion
                      ? "blur(0px)"
                      : "blur(2px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: shouldReduceMotion
                    ? 0
                    : -18,
                  filter:
                    shouldReduceMotion
                      ? "blur(0px)"
                      : "blur(2px)",
                }}
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.32,
                  ease,
                }}
                className="mx-auto max-w-[1120px] text-center"
              >
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-9 bg-white/35" />

                  <span className="text-[9px] uppercase tracking-[0.4em] text-white/60">
                    {beat.eyebrow}
                  </span>

                  <span className="h-px w-9 bg-white/35" />
                </div>

                <div className="mt-8">
                  <h2 className="font-display text-[clamp(4.2rem,8vw,9.5rem)] font-medium leading-[0.79] tracking-[-0.07em] text-white">
                    {beat.title}
                    <br />

                    <span className="text-white/55">
                      {beat.accent}
                    </span>
                  </h2>
                </div>

                <div className="mt-8 flex items-center justify-center gap-3">
                  <span className="font-display text-lg text-white/65">
                    {beat.number}
                  </span>

                  <span className="h-px w-10 bg-white/25" />

                  <span className="text-[7px] uppercase tracking-[0.36em] text-white/40">
                    of 03
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 sm:right-8 md:right-10 lg:right-14">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-24 w-px bg-white/15">
                <motion.div
                  style={{
                    scaleY: progressScale,
                    transformOrigin: "top",
                  }}
                  className="absolute inset-x-0 top-0 h-full bg-white/60"
                />
              </div>

              <AnimatePresence
                mode="wait"
                initial={false}
              >
                <motion.span
                  key={activeBeat}
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -5,
                  }}
                  transition={{
                    duration: 0.16,
                  }}
                  className="font-display text-lg text-white/60"
                >
                  {beat.number}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            style={{
              opacity: finalOpacity,
              y: finalY,
            }}
            className="absolute bottom-10 left-6 right-6 sm:bottom-12 sm:left-8 sm:right-8 md:left-10 md:right-10 lg:left-14 lg:right-14"
          >
            <div className="border-t border-white/20 pt-5">
              <div className="grid gap-7 lg:grid-cols-[1fr_360px_auto] lg:items-end lg:gap-16">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.34em] text-white/45">
                    Featured Residence
                  </p>

                  <h3 className="font-display mt-3 text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-none tracking-[-0.035em] text-white">
                    {property.title}
                  </h3>
                </div>

                <p className="max-w-[360px] text-[11px] leading-6 text-white/55">
                  {property.description}
                </p>

                <div className="flex items-end gap-5 lg:text-right">
                  <div>
                    <p className="text-xs text-white/80">
                      {property.location}
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.28em] text-white/40">
                      Private Residence
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 sm:flex">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1}
                      className="text-white/65"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
            <motion.div
              style={{
                scaleX: progressScale,
                transformOrigin: "left",
              }}
              className="h-full bg-white/60"
            />
          </div>

          <AnimatePresence>
            {activeBeat === 0 && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
              >
                <span className="text-[7px] uppercase tracking-[0.34em] text-white/35">
                  Scroll to explore
                </span>

                <ArrowDown
                  size={14}
                  strokeWidth={1}
                  className="text-white/40"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
