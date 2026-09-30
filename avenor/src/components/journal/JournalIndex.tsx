"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const stories = [
  {
    number: "02",
    category: "Material",
    title: "Materials That Age Well",
    excerpt:
      "Why honest materials become more beautiful with time, use and changing light.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=95",
    slug: "materials-that-age-well",
    read: "05 min",
  },
  {
    number: "03",
    category: "Light",
    title: "Designing for Natural Light",
    excerpt:
      "The quiet relationship between orientation, shadow and the rhythm of a home.",
    image:
      "https://images.unsplash.com/photo-1707189855521-89e8294fc26b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "designing-for-natural-light",
    read: "04 min",
  },
  {
    number: "04",
    category: "Interiors",
    title: "The Art of Enough",
    excerpt:
      "A considered interior is not about adding more. It is about knowing what belongs.",
    image:
      "https://images.unsplash.com/photo-1733413788848-6f9e0c1c414c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "the-art-of-enough",
    read: "06 min",
  },
  {
    number: "05",
    category: "Landscape",
    title: "A House Within Its Garden",
    excerpt:
      "How landscape can become part of the architecture rather than simply surrounding it.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=95",
    slug: "a-house-within-its-garden",
    read: "05 min",
  },
  {
    number: "06",
    category: "Living",
    title: "The Rooms Between Rooms",
    excerpt:
      "Exploring thresholds, transitions and the spaces that quietly connect a home together.",
    image:
      "https://images.unsplash.com/photo-1786051387804-9b9333c28bcb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "the-rooms-between-rooms",
    read: "04 min",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function JournalIndex() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="journal-stories"
      className="overflow-hidden bg-[#e9e5dd] text-[#1c1b19]"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-28 sm:px-8 sm:py-36 md:px-10 md:py-44 lg:px-14 lg:py-52">
        <div className="mb-16 grid gap-10 border-b border-[#1c1b19]/12 pb-8 sm:mb-24 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#a58b67]" />

              <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                The Journal
              </span>
            </div>

            <h2 className="font-display mt-8 max-w-[850px] text-[clamp(4rem,7vw,8rem)] font-medium leading-[0.76] tracking-[-0.065em]">
              Thoughts on
              <br />
              considered living.
            </h2>
          </div>

          <p className="max-w-[270px] text-[10px] leading-6 text-[#6f6a62] lg:pb-2">
            Notes from the world of architecture, interiors, landscape and
            private living.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {stories.map((story, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={story.slug}
                initial={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }
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
                  duration: 0.95,
                  ease,
                }}
                className={`grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-24 ${
                  reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                <Link
                  href={`/journal/${story.slug}`}
                  className={`group block ${reverse ? "lg:col-start-2" : ""}`}
                >
                  <div
                    className={`relative overflow-hidden bg-[#d8d3ca] ${
                      index === 0
                        ? "aspect-[1.28/1]"
                        : index === 1
                          ? "aspect-[1.1/1]"
                          : index === 2
                            ? "aspect-[1.35/1]"
                            : index === 3
                              ? "aspect-[1.15/1]"
                              : "aspect-[1.3/1]"
                    }`}
                  >
                    <motion.div
                      initial={{
                        scale: shouldReduceMotion ? 1 : 1.035,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      whileHover={
                        shouldReduceMotion ? undefined : { scale: 1.025 }
                      }
                      viewport={{
                        once: true,
                        amount: 0.12,
                      }}
                      transition={{
                        duration: 1.4,
                        ease,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-cover"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />

                    <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-7 sm:left-7">
                      <span className="h-px w-8 bg-white/55" />

                      <span className="text-[7px] uppercase tracking-[0.34em] text-white/70">
                        {story.category}
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

                <div
                  className={`${
                    reverse ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] tracking-[0.24em] text-[#a58b67]">
                      {story.number}
                    </span>

                    <span className="h-px w-10 bg-[#1c1b19]/15" />

                    <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
                      {story.category}
                    </span>
                  </div>

                  <Link href={`/journal/${story.slug}`} className="group block">
                    <h3 className="font-display mt-7 max-w-[600px] text-[clamp(3.4rem,5.5vw,6.2rem)] font-medium leading-[0.8] tracking-[-0.06em] transition-opacity duration-500 group-hover:opacity-60">
                      {story.title}
                    </h3>
                  </Link>

                  <p className="mt-8 max-w-[390px] text-[11px] leading-7 text-[#5f5b54]">
                    {story.excerpt}
                  </p>

                  <div className="mt-9 flex items-center justify-between border-t border-[#1c1b19]/12 pt-5 max-w-[390px]">
                    <span className="text-[8px] uppercase tracking-[0.28em] text-[#8b867d]">
                      Avenor Journal
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.22em] text-[#8b867d]">
                      {story.read} read
                    </span>
                  </div>

                  <Link
                    href={`/journal/${story.slug}`}
                    className="group mt-8 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.32em] text-[#3e3a34]"
                  >
                    <span className="border-b border-[#1c1b19]/25 pb-3 transition-colors duration-300 group-hover:border-[#1c1b19]">
                      Read story
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1b19]/15 transition-all duration-500 group-hover:bg-[#1c1b19] group-hover:text-[#f4f1eb]">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1}
                        className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
