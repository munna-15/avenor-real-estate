
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const image =
  "https://images.unsplash.com/photo-1728721861295-a477a37ac12a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutPractice() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#f4f1eb] text-[#1c1b19]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-14 lg:py-44">
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 24 }
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
            duration: 0.9,
            ease,
          }}
        >
          <div className="flex items-center justify-between border-b border-[#1c1b19]/12 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#a58b67]" />

              <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                01 / Who We Are
              </span>
            </div>

            <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
              AVENOR
            </span>
          </div>

          <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24 xl:gap-32">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: -20 }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className="relative aspect-[1.08/1] overflow-hidden bg-[#ddd8cf] lg:aspect-[1.08/0.88]"
            >
              <motion.div
                initial={{
                  scale: shouldReduceMotion ? 1 : 1.035,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.4,
                  ease,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt="Contemporary private residence interior"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3 sm:bottom-8 sm:left-8">
                <span className="h-px w-8 bg-white/50" />

                <span className="text-[7px] uppercase tracking-[0.32em] text-white/65">
                  Private residences & estates
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 22 }
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
                duration: 0.9,
                delay: 0.08,
                ease,
              }}
              className="lg:py-8"
            >
              <p className="text-[8px] uppercase tracking-[0.34em] text-[#a58b67]">
                A private real-estate practice
              </p>

              <h2 className="font-display mt-7 max-w-[700px] text-[clamp(3.8rem,6vw,7rem)] font-medium leading-[0.77] tracking-[-0.07em]">
                Places with
                <br />
                a sense of place.
              </h2>

              <div className="mt-10 max-w-[500px]">
                <p className="text-[12px] leading-[2] text-[#4f4b45]">
                  AVENOR represents a curated collection of private residences
                  and estates in Dhaka — selected for their architecture,
                  setting and the experience they create.
                </p>

                <p className="mt-6 text-[11px] leading-[1.95] text-[#777168]">
                  We look beyond the address to understand the character of
                  each property, presenting it with clarity and creating a
                  more personal way for clients to discover their next home.
                </p>
              </div>

              <div className="mt-12 border-t border-[#1c1b19]/12 pt-5">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
                      Focus
                    </span>

                    <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                      Residences & estates
                    </p>
                  </div>

                  <div>
                    <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
                      Based in
                    </span>

                    <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                      Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

