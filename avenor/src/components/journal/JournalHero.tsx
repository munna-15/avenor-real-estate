"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const heroImage =
  "https://images.unsplash.com/photo-1691959821687-24cd8eaef532?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ease = [0.22, 1, 0.36, 1] as const;

export default function JournalHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#171614] text-white">
      <motion.div
        initial={{
          scale: shouldReduceMotion ? 1 : 1.055,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
          ease,
        }}
        className="absolute inset-0"
      >
        <Image
          src={heroImage}
          alt="Contemporary residential architecture"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />

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

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col justify-end px-5 pb-11 sm:px-8 sm:pb-13 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease,
          }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-white/50" />

            <span className="text-[8px] uppercase tracking-[0.34em] text-white/65">
              Avenor / Journal
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-20">
            <div>
              <h1 className="font-display max-w-[950px] text-[clamp(4.8rem,9.5vw,10.5rem)] font-medium leading-[0.72] tracking-[-0.075em]">
                Ideas
                <br />
                in place.
              </h1>
            </div>

            <div className="max-w-[300px] lg:pb-2">
              <p className="text-[11px] leading-6 text-white/60">
                A considered collection of ideas on architecture, material,
                light and the details that shape a life well lived.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        >
          <span className="text-[7px] uppercase tracking-[0.32em] text-white/40">
            Explore the journal
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
