"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

type PropertyDetailProps = {
  property: Property;
};

const ease = [0.22, 1, 0.36, 1] as const;

const gallery = [
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=3200&q=95",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=3200&q=95",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=3200&q=95",
];

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="bg-[#f4f1eb] text-[#1c1b19]">
      <section className="relative min-h-[100svh] overflow-hidden bg-[#171614] text-white">
        <motion.div
          initial={{
            scale: shouldReduceMotion ? 1 : 1.055,
          }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease,
          }}
          className="absolute inset-0"
        >
          <Image
            src={property.image}
            alt={property.title}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/20" />

        <div className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between px-5 sm:px-8 md:px-10 lg:px-14">
            <Link
              href="/properties"
              className="text-[21px] font-medium tracking-[0.18em]"
            >
              AVENOR
            </Link>

            <Link
              href="/properties"
              className="group flex items-center gap-2 text-[8px] uppercase tracking-[0.3em] text-white/65 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={14}
                strokeWidth={1}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Properties
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col justify-end px-5 pb-12 sm:px-8 sm:pb-14 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease,
            }}
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-white/50" />

              <span className="text-[8px] uppercase tracking-[0.34em] text-white/65">
                {property.number} · {property.category}
              </span>
            </div>

            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="font-display max-w-[1100px] text-[clamp(5rem,11vw,12rem)] font-medium leading-[0.68] tracking-[-0.075em]">
                {property.title}
              </h1>

              <div className="shrink-0 lg:pb-2">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/45">
                  {property.location}
                </p>

                <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/70">
                  {property.details}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f4f1eb]">
        <div className="mx-auto max-w-[1800px] px-5 py-28 sm:px-8 sm:py-36 md:px-10 md:py-44 lg:px-14 lg:py-52">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.65fr] lg:gap-28">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#a58b67]" />

                <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                  The Residence
                </span>
              </div>

              <h2 className="font-display mt-8 max-w-[900px] text-[clamp(3.8rem,7vw,8rem)] font-medium leading-[0.78] tracking-[-0.065em]">
                Designed for
                <br />
                quiet living.
              </h2>
            </div>

            <div className="self-end">
              <p className="max-w-[400px] text-[11px] leading-7 text-[#5f5b54]">
                {property.description}
              </p>

              <p className="mt-8 max-w-[400px] text-[11px] leading-7 text-[#5f5b54]">
                Every element is considered as part of a larger composition —
                from the relationship between rooms to the way light moves
                through the residence across the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e5dd]">
        <div className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-28 md:px-10 lg:px-14">
          <div className="grid gap-px border border-[#1c1b19]/10 bg-[#1c1b19]/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Location", property.location],
              ["Type", property.category],
              ["Size", property.details.split(" · ")[1] ?? property.details],
              ["Bedrooms", property.details.split(" · ")[0] ?? "Private"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-[#e9e5dd] px-6 py-8 sm:px-8 sm:py-10"
              >
                <p className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                  {label}
                </p>

                <p className="mt-5 font-display text-[clamp(1.8rem,2.6vw,2.7rem)] leading-none tracking-[-0.04em]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {gallery.map((image, index) => (
        <section
          key={image}
          className={`relative overflow-hidden ${
            index === 1 ? "bg-[#171614]" : "bg-[#f4f1eb]"
          }`}
        >
          <div
            className={`mx-auto max-w-[1800px] ${
              index === 1 ? "px-0" : "px-5 sm:px-8 md:px-10 lg:px-14"
            }`}
          >
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className={`relative overflow-hidden ${
                index === 0
                  ? "aspect-[1.45/1]"
                  : index === 1
                    ? "aspect-[1.6/1]"
                    : "aspect-[1.35/1]"
              }`}
            >
              <Image
                src={image}
                alt={`${property.title} interior`}
                fill
                quality={95}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
      ))}

      <section className="bg-[#171614] px-5 py-28 text-white sm:px-8 sm:py-36 md:px-10 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-[1800px]">
          <div className="grid items-end gap-16 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-[8px] uppercase tracking-[0.34em] text-white/40">
                Private Viewing
              </p>

              <h2 className="font-display mt-7 max-w-[900px] text-[clamp(4rem,8vw,9rem)] font-medium leading-[0.72] tracking-[-0.07em]">
                Come
                <br />
                inside.
              </h2>
            </div>

            <Link
              href="/inquiry"
              className="group flex items-center gap-4 text-[8px] uppercase tracking-[0.32em] text-white/75"
            >
              <span className="border-b border-white/25 pb-3 transition-colors duration-300 group-hover:border-white">
                Arrange a private viewing
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-[#1c1b19]">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
