"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3200&q=95";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#171614] text-white">
      <motion.div
        initial={{
          scale: shouldReduceMotion ? 1 : 1.045,
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
          alt="Contemporary private residence surrounded by landscape"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/38" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/25" />

      <div className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between px-5 sm:px-8 md:px-10 lg:px-14">
          <Link href="/" className="text-[21px] font-medium tracking-[0.18em]">
            AVENOR
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 text-[8px] uppercase tracking-[0.3em] text-white/65 transition-colors duration-300 hover:text-white"
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

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col justify-between px-5 pb-10 pt-32 sm:px-8 sm:pb-12 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-9 bg-white/50" />

          <span className="text-[8px] uppercase tracking-[0.34em] text-white/65">
            Avenor / About
          </span>
        </motion.div>

        <div>
          <motion.p
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease,
            }}
            className="mb-7 text-[8px] uppercase tracking-[0.34em] text-white/60"
          >
            Private residences & estates
          </motion.p>

          <motion.h1
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease,
            }}
            className="font-display max-w-[1200px] text-[clamp(4.8rem,10vw,11rem)] font-medium leading-[0.72] tracking-[-0.075em]"
          >
            A different
            <br />
            way to live.
          </motion.h1>
        </div>

        <div className="flex items-end justify-between gap-10">
          <motion.p
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.22,
              ease,
            }}
            className="max-w-[420px] text-[11px] leading-7 text-white/65"
          >
            AVENOR is a private real-estate practice focused on residences
            defined by thoughtful design, lasting materials and a considered
            relationship with their surroundings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease,
            }}
            className="hidden flex-col items-center gap-3 sm:flex"
          >
            <span className="text-[7px] uppercase tracking-[0.32em] text-white/45">
              The practice
            </span>

            <ArrowDown size={15} strokeWidth={1} className="text-white/55" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
