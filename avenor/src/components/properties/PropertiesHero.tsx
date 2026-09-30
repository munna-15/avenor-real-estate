"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const hero = {
  image:
    "https://images.unsplash.com/photo-1766603636700-e9d80473f40f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  category: "The Collection · 01",
  title: "The House of Light",
  location: "Gulshan · Dhaka",
  details: "5 Bedrooms · 7,200 SQ FT",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function PropertiesHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#171614] text-white">
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease }}
        className="absolute inset-0"
      >
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/20" />

      {/* Navigation */}
      <div className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between px-5 sm:px-8 md:px-10 lg:px-14">
          <Link href="/" className="text-[21px] font-medium tracking-[0.18em]">
            AVENOR
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 text-[8px] uppercase tracking-[0.3em] text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-12 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-white/50" />

            <span className="text-[8px] uppercase tracking-[0.34em] text-white/65">
              {hero.category}
            </span>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-display max-w-[1000px] text-[clamp(4.5rem,10vw,11rem)] font-medium leading-[0.72] tracking-[-0.075em]">
              {hero.title}
            </h1>

            <div className="flex shrink-0 items-end justify-between gap-12 lg:pb-2">
              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/45">
                  {hero.location}
                </p>

                <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/70">
                  {hero.details}
                </p>
              </div>

              <Link
                href="/inquiry"
                aria-label="Inquire about The House of Light"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/5 backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#1c1b19]"
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        >
          <span className="text-[7px] uppercase tracking-[0.32em] text-white/40">
            The collection
          </span>

          <ArrowDown
            size={15}
            strokeWidth={1}
            className="animate-bounce text-white/45"
          />
        </motion.div>
      </div>
    </section>
  );
}
