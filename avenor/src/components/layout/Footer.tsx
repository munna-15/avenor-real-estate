"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const links = [
  { label: "Properties", href: "#properties" },
  { label: "Journal", href: "#journal" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="overflow-hidden bg-[#171614] text-[#f4f1eb]">
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 md:px-10 lg:px-14">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease }}
          className="border-b border-white/15 py-24 sm:py-32 md:py-40 lg:py-44"
        >
          <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-end">
            <div>
              <span className="text-[8px] uppercase tracking-[0.34em] text-white/35">
                Avenor Private Office
              </span>

              <Link href="/" className="group mt-7 block">
                <span className="font-display block text-[clamp(5rem,15vw,15rem)] font-medium leading-[0.68] tracking-[-0.075em] text-white/95 transition-opacity duration-500 group-hover:text-white">
                  AVENOR
                </span>
              </Link>
            </div>

            <Link
              href="/inquiry"
              className="group flex items-center gap-4 border-b border-white/35 pb-3 text-[9px] uppercase tracking-[0.3em] text-white/70 transition-colors duration-300 hover:border-white hover:text-white"
            >
              Begin an inquiry
              <ArrowUpRight
                size={16}
                strokeWidth={1}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>

        {/* Footer information */}
        <div className="grid gap-14 py-12 sm:py-14 md:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.8fr] lg:py-16">
          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              Private Residences
            </span>

            <p className="mt-5 max-w-[260px] text-[10px] leading-6 text-white/45">
              A curated collection of private residences and estates shaped
              around architecture, light and place.
            </p>
          </div>

          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              Explore
            </span>

            <nav className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-[9px] uppercase tracking-[0.18em] text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              Private Office
            </span>

            <div className="mt-5 space-y-3">
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/55">
                Dhaka, Bangladesh
              </p>

              <p className="text-[9px] uppercase tracking-[0.18em] text-white/55">
                By appointment
              </p>
            </div>
          </div>

          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              Inquiries
            </span>

            <Link
              href="/inquiry"
              className="group mt-5 flex w-fit items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/55 transition-colors duration-300 hover:text-white"
            >
              Private viewing
              <ArrowUpRight
                size={13}
                strokeWidth={1}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[7px] uppercase tracking-[0.28em] text-white/25">
            © 2026 Avenor. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-[7px] uppercase tracking-[0.28em] text-white/25 transition-colors hover:text-white/55"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="text-[7px] uppercase tracking-[0.28em] text-white/25 transition-colors hover:text-white/55"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
