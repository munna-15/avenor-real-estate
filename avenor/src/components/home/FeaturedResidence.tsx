"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const residence = {
  image:
    "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title: "The House of Light",
  location: "Gulshan · Dhaka",
  type: "Private Residence",
  size: "7,200 SQ FT",
  rooms: "5 Bedrooms",
  year: "2026",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturedResidence() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="properties"
      className="overflow-hidden bg-[#f4f1eb] text-[#1c1b19]"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36 lg:px-14 lg:py-40">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mb-10 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#1c1b19]/30" />

            <span className="text-[9px] uppercase tracking-[0.34em] text-[#1c1b19]/50">
              Featured Residence
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#8b867d] sm:block">
            01 / 04
          </span>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.1,
            ease,
          }}
          className="relative aspect-[16/9] overflow-hidden bg-[#dedad2] sm:aspect-[16/8.5]"
        >
          <motion.div
            initial={{
              scale: shouldReduceMotion ? 1 : 1.055,
            }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.5,
              ease,
            }}
            className="absolute inset-0"
          >
            <Image
              src={residence.image}
              alt={residence.title}
              fill
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10">
            <span className="text-[8px] uppercase tracking-[0.32em] text-white/65">
              {residence.type}
            </span>

            <span className="text-[8px] uppercase tracking-[0.32em] text-white/65">
              {residence.year}
            </span>
          </div>
        </motion.div>

        <div className="relative z-10">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease,
              }}
              className="bg-[#f4f1eb] px-1 pt-10 sm:px-8 sm:pt-10 lg:-mt-12 lg:px-10 lg:pt-10"
            >
              <h2 className="font-display max-w-[1000px] text-[clamp(3.6rem,8vw,8.5rem)] font-medium leading-[0.8] tracking-[-0.06em]">
                {residence.title}
              </h2>

              <div className="mt-6 flex items-center gap-4">
                <span className="h-px w-8 bg-[#1c1b19]/25" />

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#8b867d]">
                  {residence.location}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.22,
                ease,
              }}
              className="mt-10 px-1 sm:mt-12 sm:px-8 lg:mt-0 lg:pl-10 lg:pt-14"
            >
              <div className="border-t border-[#1c1b19]/15 pt-5">
                <p className="text-[8px] uppercase tracking-[0.32em] text-[#8b867d]">
                  The Residence
                </p>

                <p className="mt-4 max-w-[330px] text-[12px] leading-7 text-[#5f5b54]">
                  A residence defined by natural light, considered proportions
                  and a quiet relationship between architecture and landscape.
                </p>

                <Link
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-[#1c1b19]/20 pb-2 text-[9px] uppercase tracking-[0.3em] transition-colors duration-300 hover:border-[#1c1b19]"
                >
                  Private viewing
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.8,
            delay: 0.18,
            ease,
          }}
          className="mt-16 border-t border-[#1c1b19]/15 sm:mt-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4">
            <div className="py-6 sm:py-7">
              <p className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                {residence.size}
              </p>

              <p className="mt-2 text-[8px] uppercase tracking-[0.28em] text-[#8b867d]">
                Residence
              </p>
            </div>

            <div className="border-l border-[#1c1b19]/10 py-6 pl-5 sm:py-7 sm:pl-8">
              <p className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                {residence.rooms}
              </p>

              <p className="mt-2 text-[8px] uppercase tracking-[0.28em] text-[#8b867d]">
                Accommodation
              </p>
            </div>

            <div className="border-t border-[#1c1b19]/10 py-6 sm:border-l sm:border-t-0 sm:py-7 sm:pl-8">
              <p className="font-display text-3xl tracking-[-0.03em] sm:pt-0">
                {residence.location.split(" · ")[0]}
              </p>

              <p className="mt-2 text-[8px] uppercase tracking-[0.28em] text-[#8b867d]">
                Address
              </p>
            </div>

            <div className="border-l border-t border-[#1c1b19]/10 py-6 pl-5 sm:border-t-0 sm:py-7 sm:pl-8">
              <p className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                {residence.year}
              </p>

              <p className="mt-2 text-[8px] uppercase tracking-[0.28em] text-[#8b867d]">
                Collection
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
