"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const image =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3200&q=95";

const ease = [0.22, 1, 0.36, 1] as const;

export default function JournalPerspective() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-[100vh] overflow-hidden bg-[#171614] text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Contemporary residence surrounded by landscape"
          fill
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/42" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/65" />

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.8,
          ease,
        }}
        className="relative z-10 flex h-full flex-col justify-between px-5 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-14 lg:py-16"
      >
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-white/45" />

            <span className="text-[8px] uppercase tracking-[0.34em] text-white/55">
              Avenor / Perspective
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1800px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-24">
            <div>
              <motion.p
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  ease,
                }}
                className="text-[8px] uppercase tracking-[0.34em] text-white/45"
              >
                Living with intention
              </motion.p>

              <motion.h2
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.9,
                  delay: shouldReduceMotion ? 0 : 0.06,
                  ease,
                }}
                className="font-display mt-6 max-w-[1000px] text-[clamp(4rem,7.5vw,8.5rem)] font-medium leading-[0.76] tracking-[-0.07em]"
              >
                A home should
                <br />
                become quieter
                <br />
                with time.
              </motion.h2>
            </div>

            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : 0.14,
                ease,
              }}
              className="lg:pb-1"
            >
              <p className="max-w-[310px] text-[11px] leading-7 text-white/60">
                The most enduring spaces rarely ask for attention. They reveal
                themselves gradually, through changing light, familiar materials
                and the rituals of everyday life.
              </p>

              <Link
                href="/journal/the-art-of-enough"
                className="group mt-8 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.32em] text-white/75"
              >
                <span className="border-b border-white/25 pb-3 transition-colors duration-300 group-hover:border-white">
                  Continue reading
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-[#1c1b19]">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1800px] items-end justify-between">
          <span className="text-[7px] uppercase tracking-[0.34em] text-white/35">
            Avenor Journal
          </span>

          <span className="text-[7px] uppercase tracking-[0.3em] text-white/35">
            04 / 06
          </span>
        </div>
      </motion.div>
    </section>
  );
}
