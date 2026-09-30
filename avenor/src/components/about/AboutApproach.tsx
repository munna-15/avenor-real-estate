
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2800&q=95",
    alt: "Contemporary private residence interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2800&q=95",
    alt: "Architectural detail of a private residence",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2800&q=95",
    alt: "Private residence surrounded by landscape",
  },
];

const services = [
  {
    number: "01",
    title: "Curate",
    text: "We identify properties with distinctive architecture, setting and long-term character.",
  },
  {
    number: "02",
    title: "Present",
    text: "We bring each residence to life through its spaces, details, surroundings and story.",
  },
  {
    number: "03",
    title: "Connect",
    text: "We create a direct and considered path between the right residence and the right client.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutApproach() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#171614] text-[#f4f1eb]">
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
            amount: 0.18,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
        >
          <div className="flex items-center justify-between border-b border-white/12 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#a58b67]" />

              <span className="text-[8px] uppercase tracking-[0.34em] text-white/45">
                02 / What We Do
              </span>
            </div>

            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              The AVENOR Process
            </span>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-24">
            <div>
              <p className="text-[8px] uppercase tracking-[0.34em] text-[#a58b67]">
                From property to experience
              </p>

              <h2 className="font-display mt-7 max-w-[760px] text-[clamp(4rem,7vw,8rem)] font-medium leading-[0.76] tracking-[-0.07em]">
                We make
                <br />
                discovery personal.
              </h2>
            </div>

            <p className="max-w-[500px] text-[12px] leading-[2] text-white/55 lg:pb-2">
              Every property is presented with enough context to understand
              not only what it is, but what it feels like to live there.
            </p>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-12 sm:gap-5 lg:mt-24">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 18 }
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
                duration: 0.85,
                ease,
              }}
              className="relative aspect-[1/1.12] overflow-hidden sm:col-span-5"
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, 42vw"
                className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
              />
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 28 }
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
              className="relative aspect-[1/1.18] overflow-hidden sm:col-span-4 sm:mt-14"
            >
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, 34vw"
                className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
              />
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 36 }
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
                delay: 0.16,
                ease,
              }}
              className="relative aspect-[1/1.25] overflow-hidden sm:col-span-3 sm:mt-28"
            >
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                quality={95}
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
              />
            </motion.div>
          </div>

          <div className="mt-20 border-t border-white/12 sm:mt-24">
            <div className="grid lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className={`py-8 lg:py-10 ${
                    index > 0
                      ? "border-t border-white/12 lg:border-l lg:border-t-0 lg:pl-10"
                      : "lg:pr-10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] tracking-[0.28em] text-[#a58b67]">
                      {service.number}
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.3em] text-white/25">
                      AVENOR
                    </span>
                  </div>

                  <h3 className="font-display mt-8 text-[clamp(2.8rem,4vw,4.5rem)] font-medium leading-[0.8] tracking-[-0.06em]">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-[320px] text-[11px] leading-7 text-white/45">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

