"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const properties = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Private Residence",
    title: "The House of Light",
    location: "Gulshan · Dhaka",
    details: "5 Bedrooms · 7,200 SQ FT",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1728721529009-bfaab6fcc8e6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Urban Residence",
    title: "The Quiet Address",
    location: "Banani · Dhaka",
    details: "4 Bedrooms · 5,400 SQ FT",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1771558969707-45e93dfd2570?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Private Estate",
    title: "A House in Nature",
    location: "Baridhara · Dhaka",
    details: "6 Bedrooms · 9,100 SQ FT",
  },
  {
    id: "04",
    image:
      "https://images.unsplash.com/photo-1728722104881-773da8f4b7ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Signature Residence",
    title: "The Evening Villa",
    location: "Bashundhara · Dhaka",
    details: "5 Bedrooms · 8,300 SQ FT",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const property = properties[active];

  const next = useCallback(() => {
    setActive((current) => (current + 1) % properties.length);
  }, []);

  const previous = useCallback(() => {
    setActive((current) =>
      current === 0 ? properties.length - 1 : current - 1,
    );
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = window.setInterval(next, 6000);

    return () => window.clearInterval(timer);
  }, [next, shouldReduceMotion]);

  useEffect(() => {
    properties.forEach((item) => {
      const image = new window.Image();
      image.src = item.image;
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#171614] text-white">
      {/* Background Images */}

      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={property.id}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    scale: 1.055,
                  }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    scale: 1,
                  }
            }
            exit={{ opacity: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.2 }
                : {
                    opacity: {
                      duration: 1.25,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 7,
                      ease: "linear",
                    },
                  }
            }
            className="absolute inset-0"
          >
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority={active === 0}
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic Overlay */}

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_20%,rgba(0,0,0,0.08)_65%,rgba(0,0,0,0.28)_100%)]" />

      {/* Main Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col px-6 pb-7 pt-28 sm:px-8 md:px-10 lg:px-14">
        {/* Top Meta */}

        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease,
            }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-9 bg-white/65" />

            <span className="text-[9px] uppercase tracking-[0.34em] text-white/70 sm:text-[10px]">
              Private Residences & Estates
            </span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.45,
            }}
            className="hidden text-[9px] uppercase tracking-[0.32em] text-white/50 md:block"
          >
            Established 2026
          </motion.span>
        </div>

        {/* Main Hero */}

        <div className="mt-auto pb-10">
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
            {/* Property Title */}

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={property.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          y: 45,
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          y: -30,
                        }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.9,
                    ease,
                  }}
                >
                  <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-white/60 sm:text-[10px]">
                    {property.category}
                  </p>

                  <h1 className="font-display max-w-[1050px] text-[clamp(4rem,8.8vw,9.25rem)] font-medium leading-[0.79] tracking-[-0.055em]">
                    {property.title}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Property Details */}

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={property.id}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          y: 30,
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          y: -20,
                        }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.2 : 0.8,
                    delay: shouldReduceMotion ? 0 : 0.12,
                    ease,
                  }}
                  className="max-w-[330px] border-l border-white/25 pl-6"
                >
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/40">
                    Residence
                  </p>

                  <p className="mt-3 text-sm text-white/90">
                    {property.location}
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    {property.details}
                  </p>

                  <Link
                    href="#properties"
                    className="group mt-7 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.27em] text-white"
                  >
                    Explore residence
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-white/70 group-hover:bg-white group-hover:text-[#171614]">
                      <ArrowRight
                        size={12}
                        strokeWidth={1.2}
                        className="transition-transform duration-500 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}

        <div className="relative flex items-center justify-between border-t border-white/20 pt-5">
          {/* Arrows */}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous residence"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-500 hover:border-white/50 hover:bg-white/10"
            >
              <ChevronLeft
                size={16}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:-translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next residence"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-500 hover:border-white/50 hover:bg-white/10"
            >
              <ChevronRight
                size={16}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* Counter */}

          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={property.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  ease,
                }}
                className="font-display text-xl leading-none"
              >
                {property.id}
              </motion.span>
            </AnimatePresence>

            <span className="text-white/25">/</span>

            <span className="text-[9px] tracking-[0.25em] text-white/45">
              {String(properties.length).padStart(2, "0")}
            </span>
          </div>

          {/* Scroll */}

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
              Scroll to explore
            </span>

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, 5, 0],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={14} strokeWidth={1} className="text-white/60" />
            </motion.div>
          </div>
        </div>

        {/* Autoplay Progress */}

        <div className="absolute bottom-[69px] left-1/2 hidden h-px w-28 -translate-x-1/2 overflow-hidden bg-white/15 md:block">
          <motion.div
            key={property.id}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 6,
              ease: "linear",
            }}
            className="h-full origin-left bg-white/70"
          />
        </div>
      </div>
    </section>
  );
}
