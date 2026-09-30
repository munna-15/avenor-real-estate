"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PrivateViewing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#171614]"
    >
      {/* Cinematic image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{
            scale: shouldReduceMotion ? 1 : 1.035,
          }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avenor private residence"
            fill
            priority={false}
            quality={95}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col px-5 py-7 sm:px-8 sm:py-9 md:px-10 md:py-10 lg:px-14 lg:py-12">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/45" />

            <span className="text-[8px] uppercase tracking-[0.34em] text-white/60">
              Private Office
            </span>
          </div>

          <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">
            Avenor · Dhaka
          </span>
        </div>

        {/* Main */}
        <div className="flex flex-1 items-end justify-end pb-4 pt-20 sm:pb-8">
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="w-full max-w-[560px] bg-[#f4f1eb] px-7 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 lg:max-w-[590px] lg:px-14 lg:py-14"
          >
            <div className="flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                Private Viewing
              </span>

              <span className="font-display text-[17px] leading-none text-[#a58b67]">
                AV
              </span>
            </div>

            <h2 className="font-display mt-11 max-w-[470px] text-[clamp(3.5rem,6vw,6.2rem)] font-medium leading-[0.78] tracking-[-0.06em] text-[#1c1b19]">
              Come
              <br />
              inside.
            </h2>

            <p className="mt-8 max-w-[350px] text-[10px] leading-6 text-[#5f5b54] sm:text-[11px] sm:leading-7">
              Private viewings are arranged individually through the Avenor
              private office.
            </p>

            <div className="mt-10 flex items-end justify-between border-t border-[#1c1b19]/12 pt-5">
              <div>
                <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                  By appointment
                </span>

                <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-[#3e3a34]">
                  Dhaka
                </span>
              </div>

              <Link
                href="/inquiry"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#1c1b19]/20 transition-all duration-300 hover:bg-[#1c1b19] hover:text-[#f4f1eb]"
                aria-label="Begin an inquiry"
              >
                <ArrowUpRight
                  size={17}
                  strokeWidth={1}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-5">
          <span className="hidden text-[8px] uppercase tracking-[0.3em] text-white/40 sm:block">
            Private Residences & Estates
          </span>

          <Link
            href="/inquiry"
            className="group ml-auto flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/55 transition-colors duration-300 hover:text-white"
          >
            Begin an inquiry
            <ArrowUpRight
              size={14}
              strokeWidth={1}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
