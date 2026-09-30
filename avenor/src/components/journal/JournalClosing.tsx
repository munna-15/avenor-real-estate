"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function JournalClosing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#f4f1eb] text-[#1c1b19]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="border-t border-[#1c1b19]/12 pt-6"
        >
          {/* TOP META */}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#a58b67]" />

              <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                Avenor / Journal
              </span>
            </div>

            <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
              06 Stories
            </span>
          </div>

          {/* MAIN */}

          <div className="mt-20 grid gap-14 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-24">
            <div>
              <p className="text-[8px] uppercase tracking-[0.34em] text-[#a58b67]">
                The journal continues
              </p>

              <h2 className="font-display mt-7 max-w-[1050px] text-[clamp(4.2rem,8vw,9rem)] font-medium leading-[0.76] tracking-[-0.07em]">
                Keep looking
                <br />
                closer.
              </h2>
            </div>

            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease,
              }}
              className="lg:pb-1"
            >
              <p className="max-w-[300px] text-[11px] leading-7 text-[#5f5b54]">
                Architecture, material, light and the quieter details that shape
                the way we live.
              </p>

              <Link
                href="/properties"
                className="group mt-9 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.32em] text-[#3e3a34]"
              >
                <span className="border-b border-[#1c1b19]/25 pb-3 transition-colors duration-300 group-hover:border-[#1c1b19]">
                  Explore the collection
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1b19]/15 transition-all duration-500 group-hover:bg-[#1c1b19] group-hover:text-[#f4f1eb]">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* BOTTOM NAVIGATION */}

          <div className="mt-24 border-t border-[#1c1b19]/12 pt-5 sm:mt-28">
            <div className="grid gap-6 sm:grid-cols-3 sm:items-end">
              <div>
                <span className="text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                  Avenor
                </span>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                  Private Residences & Estates
                </p>
              </div>

              <div className="sm:text-center">
                <span className="text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                  Based in
                </span>

                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                  Dhaka / By Appointment
                </p>
              </div>

              <div className="sm:text-right">
                <Link
                  href="/inquiry"
                  className="group inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#3e3a34]"
                >
                  Private inquiry
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
