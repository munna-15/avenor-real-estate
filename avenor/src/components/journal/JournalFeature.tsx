"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const feature = {
  number: "01",
  category: "Architecture",
  title: "The Quiet Architecture of Light",
  excerpt:
    "A residence is shaped as much by what enters it as by what surrounds it. We explore how proportion, orientation and natural light create spaces that feel instinctive to live in.",
  image:
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  secondaryImage:
    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function JournalFeature() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#f4f1eb] text-[#1c1b19]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-14 lg:py-44">
        {/* SECTION HEADER */}

        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="mb-16 flex items-center justify-between border-b border-[#1c1b19]/12 pb-5 sm:mb-20"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#a58b67]" />

            <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
              Featured Story
            </span>
          </div>

          <span className="text-[8px] uppercase tracking-[0.28em] text-[#8b867d]">
            Journal / {feature.number}
          </span>
        </motion.div>

        {/* FEATURE COMPOSITION */}

        <div className="grid items-center gap-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-28 xl:gap-36">
          {/* IMAGE COMPOSITION */}

          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="relative min-h-[560px] sm:min-h-[680px] lg:min-h-[720px]"
          >
            {/* MAIN IMAGE */}

            <Link
              href="/journal/the-quiet-architecture-of-light"
              aria-label={`Read ${feature.title}`}
              className="group absolute left-0 top-0 block h-[78%] w-[78%] overflow-hidden sm:h-[82%] sm:w-[76%]"
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
                  amount: 0.15,
                }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.018 }}
                transition={{
                  duration: 1.25,
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
                  sizes="(max-width: 1024px) 78vw, 55vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />
            </Link>

            {/* SECONDARY IMAGE */}

            <Link
              href="/journal/the-quiet-architecture-of-light"
              aria-label={`Explore ${feature.title}`}
              className="group absolute bottom-0 right-0 z-10 block h-[48%] w-[48%] overflow-hidden border-[10px] border-[#f4f1eb] sm:h-[52%] sm:w-[46%]"
            >
              <motion.div
                initial={{
                  scale: shouldReduceMotion ? 1 : 1.04,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
                transition={{
                  duration: 1.3,
                  ease,
                }}
                className="absolute inset-0"
              >
                <Image
                  src={feature.secondaryImage}
                  alt=""
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 48vw, 28vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />
            </Link>

            {/* IMAGE INDEX */}

            <div className="absolute bottom-3 left-0 flex items-center gap-3">
              <span className="font-display text-2xl text-[#1c1b19]/55">
                {feature.number}
              </span>

              <span className="h-px w-8 bg-[#1c1b19]/20" />

              <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
                Featured
              </span>
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.article
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }
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
              delay: 0.08,
              ease,
            }}
            className="lg:pb-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#a58b67]" />

              <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                {feature.category}
              </span>
            </div>

            <h2 className="font-display mt-8 max-w-[620px] text-[clamp(4rem,6vw,7.5rem)] font-medium leading-[0.78] tracking-[-0.07em]">
              {feature.title}
            </h2>

            <p className="mt-10 max-w-[430px] text-[12px] leading-[1.95] text-[#5f5b54]">
              {feature.excerpt}
            </p>

            <div className="mt-12 border-t border-[#1c1b19]/12 pt-5">
              <div className="flex items-center justify-between gap-8">
                <div>
                  <span className="block text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                    Avenor Journal
                  </span>

                  <span className="mt-2 block text-[9px] uppercase tracking-[0.2em] text-[#3e3a34]">
                    Architecture · 06 min
                  </span>
                </div>

                <span className="font-display text-4xl text-[#1c1b19]/15">
                  {feature.number}
                </span>
              </div>
            </div>

            <Link
              href="/journal/the-quiet-architecture-of-light"
              className="group mt-10 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.32em] text-[#3e3a34]"
            >
              <span className="border-b border-[#1c1b19]/25 pb-3 transition-colors duration-300 group-hover:border-[#1c1b19]">
                Read the story
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1b19]/15 transition-all duration-500 group-hover:bg-[#1c1b19] group-hover:text-[#f4f1eb]">
                <ArrowUpRight
                  size={15}
                  strokeWidth={1}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
