
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const residences = [
  {
    number: "01",
    category: "Private Residence",
    title: "The House of Light",
    location: "Gulshan · Dhaka",
    details: "5 Bedrooms · 7,200 SQ FT",
    image:
      "https://images.unsplash.com/photo-1612419299101-6c294dc2901d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "the-house-of-light",
  },
  {
    number: "02",
    category: "Urban Residence",
    title: "The Quiet Address",
    location: "Banani · Dhaka",
    details: "4 Bedrooms · 5,400 SQ FT",
    image:
      "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "the-quiet-address",
  },
  {
    number: "03",
    category: "Private Estate",
    title: "A House in Nature",
    location: "Baridhara · Dhaka",
    details: "6 Bedrooms · 9,100 SQ FT",
    image:
      "https://images.unsplash.com/photo-1626249893783-cc4a9f66880a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "a-house-in-nature",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ResidenceCollection() {
  const shouldReduceMotion = useReducedMotion();

  const feature = residences[0];
  const secondary = residences.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#f4f1eb] text-[#1c1b19]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-14 lg:py-48">
        {/* Header */}
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
          <div className="flex items-center justify-between border-b border-[#1c1b19]/12 pb-6">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#a58b67]" />

              <span className="text-[8px] uppercase tracking-[0.36em] text-[#8b867d]">
                Avenor / The Collection
              </span>
            </div>

            <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
              03 residences
            </span>
          </div>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_320px] lg:gap-24">
            <h2 className="font-display max-w-[1050px] text-[clamp(4.7rem,8vw,9.5rem)] font-medium leading-[0.72] tracking-[-0.075em]">
              Homes with
              <br />
              <span className="text-[#1c1b19]/32">
                character.
              </span>
            </h2>

            <p className="max-w-[300px] pb-2 text-[11px] leading-7 text-[#6b665e]">
              A small collection of private residences chosen for their
              architecture, atmosphere and relationship with place.
            </p>
          </div>
        </motion.div>

        {/* Feature residence */}
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
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="mt-20 sm:mt-24 lg:mt-28"
        >
          <Link
            href={`/properties/${feature.slug}`}
            className="group block"
          >
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(260px,0.82fr)] lg:gap-14 xl:gap-20">
              <div className="relative aspect-[1.08/1] overflow-hidden bg-[#ddd8cf] sm:aspect-[1.18/1] lg:aspect-[1.24/1]">
                <motion.div
                  initial={{
                    scale: shouldReduceMotion ? 1 : 1.045,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.018 }
                  }
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 1.6,
                    ease,
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 68vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="pb-1 lg:pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] tracking-[0.28em] text-[#a58b67]">
                    {feature.number}
                  </span>

                  <span className="h-px w-8 bg-[#1c1b19]/15" />

                  <span className="text-[7px] uppercase tracking-[0.34em] text-[#8b867d]">
                    {feature.category}
                  </span>
                </div>

                <h3 className="font-display mt-6 max-w-[560px] text-[clamp(3.8rem,5.7vw,6.8rem)] font-medium leading-[0.77] tracking-[-0.07em] transition-opacity duration-500 group-hover:opacity-60">
                  {feature.title}
                </h3>

                <div className="mt-8 border-t border-[#1c1b19]/12 pt-5">
                  <div className="flex items-center justify-between gap-8">
                    <div>
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                        Location
                      </span>

                      <span className="mt-2.5 block text-[9px] uppercase tracking-[0.2em] text-[#3e3a34]">
                        {feature.location}
                      </span>
                    </div>

                    <div className="hidden md:block">
                      <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                        Residence
                      </span>

                      <span className="mt-2.5 block text-[9px] uppercase tracking-[0.18em] text-[#3e3a34]">
                        {feature.details}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-9 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                    Explore residence
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1c1b19]/15 transition-all duration-500 group-hover:bg-[#1c1b19] group-hover:text-[#f4f1eb]">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1}
                      className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary residences */}
        <div className="mt-28 sm:mt-32 lg:mt-40">
          <div className="grid items-start gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 xl:gap-32">
            {secondary.map((residence, index) => (
              <motion.div
                key={residence.number}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        y: 28,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease,
                }}
                className={
                  index === 0
                    ? "lg:pt-20"
                    : "lg:pt-0"
                }
              >
                <Link
                  href={`/properties/${residence.slug}`}
                  className="group block"
                >
                  <div
                    className={`relative overflow-hidden bg-[#ddd8cf] ${
                      index === 0
                        ? "aspect-[0.9/1] sm:aspect-[0.96/1]"
                        : "aspect-[1.18/1] sm:aspect-[1.22/1]"
                    }`}
                  >
                    <motion.div
                      initial={{
                        scale: shouldReduceMotion
                          ? 1
                          : 1.04,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { scale: 1.022 }
                      }
                      viewport={{
                        once: true,
                        amount: 0.12,
                      }}
                      transition={{
                        duration: 1.45,
                        ease,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={residence.image}
                        alt={residence.title}
                        fill
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="mt-6 border-t border-[#1c1b19]/12 pt-5">
                    <div className="flex items-start justify-between gap-8">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[8px] tracking-[0.28em] text-[#a58b67]">
                            {residence.number}
                          </span>

                          <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
                            {residence.category}
                          </span>
                        </div>

                        <h3 className="font-display mt-4 text-[clamp(3rem,4.4vw,5.2rem)] font-medium leading-[0.8] tracking-[-0.065em] transition-opacity duration-500 group-hover:opacity-60">
                          {residence.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                          <span className="text-[8px] uppercase tracking-[0.22em] text-[#8b867d]">
                            {residence.location}
                          </span>

                          <span className="text-[8px] uppercase tracking-[0.22em] text-[#b0aba2]">
                            {residence.details}
                          </span>
                        </div>
                      </div>

                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1c1b19]/12 transition-all duration-500 group-hover:bg-[#1c1b19] group-hover:text-[#f4f1eb]">
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1}
                          className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing line */}
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
            duration: 0.8,
            ease,
          }}
          className="mt-24 border-t border-[#1c1b19]/12 pt-6 sm:mt-28 lg:mt-32"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#a58b67]" />

              <span className="text-[7px] uppercase tracking-[0.34em] text-[#8b867d]">
                Selected by Avenor
              </span>
            </div>

            <Link
              href="/properties"
              className="group flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#3e3a34]"
            >
              Explore all residences

              <ArrowUpRight
                size={14}
                strokeWidth={1}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

