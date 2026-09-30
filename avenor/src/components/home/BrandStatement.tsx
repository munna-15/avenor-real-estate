"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BrandStatement() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4f1eb] text-[#1c1b19]"
    >
      <div className="mx-auto flex min-h-[82vh] max-w-[1600px] items-center px-6 py-24 sm:px-8 md:px-10 lg:px-14">
        <div className="grid w-full gap-16 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-24">
          <div>
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease }}
              className="mb-10 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-[#1c1b19]/30" />

              <span className="text-[9px] uppercase tracking-[0.32em] text-[#1c1b19]/50">
                The Avenor Perspective
              </span>
            </motion.div>

            <motion.h2
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 1,
                delay: 0.08,
                ease,
              }}
              className="font-display max-w-[1000px] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.055em]"
            >
              Not more
              <br />
              property.
              <br />
              <span className="text-[#1c1b19]/35">Better places</span>
              <br />
              to live.
            </motion.h2>
          </div>

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease,
            }}
            className="border-l border-[#1c1b19]/15 pl-6 lg:mb-2"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#1c1b19]/40">
              A considered approach
            </p>

            <p className="mt-6 max-w-[300px] text-sm leading-7 text-[#5f5b54]">
              AVENOR brings together residences shaped by architecture, location
              and a lasting sense of place.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="font-display text-3xl">04</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-[#8b867d]">
                  Residences
                </p>
              </div>

              <div className="h-10 w-px bg-[#1c1b19]/10" />

              <div>
                <p className="font-display text-3xl">03</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-[#8b867d]">
                  Locations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
