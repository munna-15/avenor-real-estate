"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type Property = {
  number: string;
  slug: string;
  category: string;
  title: string;
  location: string;
  details: string;
  description: string;
  image: string;
};

type PropertySectionProps = {
  property: Property;
  reverse?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function PropertySection({
  property,
  reverse = false,
}: PropertySectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f4f1eb] text-[#1c1b19]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-14 lg:py-48">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 38 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{
            once: true,
            amount: 0.16,
          }}
          transition={{
            duration: 1.05,
            ease,
          }}
          className={`grid items-center gap-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.5fr)] lg:gap-28 ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          <div
            className={`relative overflow-hidden ${
              reverse ? "lg:col-start-2" : ""
            }`}
          >
            <Link
              href={`/properties/${property.slug}`}
              aria-label={`View ${property.title}`}
              className="group block"
            >
              <div className="relative aspect-[1.18/1] overflow-hidden bg-[#ddd8cf] sm:aspect-[1.25/1] lg:aspect-[1.3/1]">
                <motion.div
                  className="absolute inset-0"
                  initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.035 }}
                  whileInView={{ scale: 1 }}
                  viewport={{
                    once: true,
                    amount: 0.18,
                  }}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
                  transition={{
                    duration: 1.5,
                    ease,
                  }}
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover"
                  />
                </motion.div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

                <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-7 sm:left-7">
                  <span className="h-px w-8 bg-white/55" />

                  <span className="text-[8px] uppercase tracking-[0.32em] text-white/75">
                    Private Residence
                  </span>
                </div>

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/5 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 sm:right-7 sm:top-7">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1}
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </Link>
          </div>

          <div className={reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
            <div className="flex items-center gap-3">
              <span className="text-[9px] tracking-[0.24em] text-[#a58b67]">
                {property.number}
              </span>

              <span className="h-px w-10 bg-[#1c1b19]/15" />

              <span className="text-[8px] uppercase tracking-[0.32em] text-[#8b867d]">
                {property.category}
              </span>
            </div>

            <Link href={`/properties/${property.slug}`} className="group block">
              <h2 className="font-display mt-8 max-w-[620px] text-[clamp(3.8rem,6vw,7rem)] font-medium leading-[0.8] tracking-[-0.065em] transition-opacity duration-500 group-hover:opacity-65">
                {property.title}
              </h2>
            </Link>

            <p className="mt-9 max-w-[390px] text-[11px] leading-7 text-[#5f5b54]">
              {property.description}
            </p>

            <div className="mt-12 border-t border-[#1c1b19]/12">
              <div className="flex items-center justify-between gap-8 border-b border-[#1c1b19]/12 py-5">
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                  Location
                </span>

                <span className="text-right text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                  {property.location}
                </span>
              </div>

              <div className="flex items-center justify-between gap-8 border-b border-[#1c1b19]/12 py-5">
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                  Residence
                </span>

                <span className="text-right text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                  {property.details}
                </span>
              </div>
            </div>

            <Link
              href={`/properties/${property.slug}`}
              className="group mt-10 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.32em] text-[#3e3a34]"
            >
              <span className="border-b border-[#1c1b19]/30 pb-3 transition-colors duration-300 group-hover:border-[#1c1b19]">
                Explore residence
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1b19]/15 transition-all duration-500 group-hover:border-[#1c1b19]/40 group-hover:bg-[#1c1b19] group-hover:text-[#f4f1eb]">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
