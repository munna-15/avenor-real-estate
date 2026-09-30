
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const philosophy = [
  {
    number: "01",
    label: "Architecture",
    title: "Form follows the way you live.",
    text: "Every residence begins with proportion, movement and a considered relationship between interior and exterior.",
  },
  {
    number: "02",
    label: "Material",
    title: "Quiet materials. Lasting character.",
    text: "Stone, timber, glass and metal are selected for how they age, feel and belong within the architecture.",
  },
  {
    number: "03",
    label: "Light",
    title: "Designed around natural light.",
    text: "Openings, volumes and transitions are shaped to let daylight define the atmosphere throughout the day.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArchitecturePhilosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#171614] text-white">
      <div className="absolute inset-0">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            initial={{ scale: shouldReduceMotion ? 1 : 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=3200&q=95"
              alt="Contemporary architectural interior"
              fill
              priority={false}
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/55" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col justify-between px-6 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32 lg:px-14 lg:py-36">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-white/45" />

              <span className="text-[9px] uppercase tracking-[0.34em] text-white/65">
                Avenor / Philosophy
              </span>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/45 sm:block">
              03 Principles
            </span>
          </div>

          <div className="grid gap-20 py-24 lg:grid-cols-[1fr_440px] lg:gap-24 lg:py-32">
            <div className="self-end">
              <motion.p
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 25 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease }}
                className="mb-6 max-w-[180px] text-[9px] uppercase tracking-[0.32em] text-white/55"
              >
                The Avenor Approach
              </motion.p>

              <motion.h2
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 35 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1, delay: 0.08, ease }}
                className="font-display max-w-[900px] text-[clamp(3.6rem,7.5vw,8rem)] font-medium leading-[0.84] tracking-[-0.055em]"
              >
                Architecture
                <br />
                with intention.
              </motion.h2>
            </div>

            <div className="space-y-12 lg:pt-24">
              {philosophy.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 25 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="border-t border-white/20 pt-5"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.32em] text-white/45">
                        {item.number} / {item.label}
                      </p>

                      <h3 className="font-display mt-4 max-w-[380px] text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.035em]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-[360px] text-[11px] leading-6 text-white/60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-white/20 pt-5">
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/45">
              Private Residences & Estates
            </span>

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/45">
              Dhaka
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

