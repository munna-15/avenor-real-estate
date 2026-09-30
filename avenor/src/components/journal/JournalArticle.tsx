"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";

import type { JournalStory } from "./journal";

type JournalArticleProps = {
  story: JournalStory;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function JournalArticle({ story }: JournalArticleProps) {
  return (
    <main className="bg-[#f4f1eb] text-[#1c1b19]">
      <ArticleHero story={story} />
      <ArticleIntroduction story={story} />
      <ArticleExperience story={story} />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* HERO                                                                      */
/* -------------------------------------------------------------------------- */

function ArticleHero({ story }: { story: JournalStory }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#171614] text-white">
      <motion.div
        initial={{
          scale: shouldReduceMotion ? 1 : 1.055,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2,
          ease,
        }}
        className="absolute inset-0"
      >
        <Image
          src={story.image}
          alt={story.title}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/38" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25" />

      <div className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between px-5 sm:px-8 md:px-10 lg:px-14">
          <Link href="/" className="text-[21px] font-medium tracking-[0.18em]">
            AVENOR
          </Link>

          <Link
            href="/journal"
            className="group flex items-center gap-2 text-[8px] uppercase tracking-[0.3em] text-white/65 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Journal
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1800px] flex-col justify-end px-5 pb-10 sm:px-8 sm:pb-12 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease,
          }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-white/50" />

            <span className="text-[8px] uppercase tracking-[0.34em] text-white/65">
              {story.number} · {story.category}
            </span>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-display max-w-[1050px] text-[clamp(5rem,11vw,12rem)] font-medium leading-[0.7] tracking-[-0.075em]">
              {story.title}
            </h1>

            <div className="max-w-[300px] lg:pb-2">
              <p className="text-[11px] leading-6 text-white/60">
                {story.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-4 text-[7px] uppercase tracking-[0.3em] text-white/40">
                <span>{story.category}</span>

                <span className="h-px w-5 bg-white/25" />

                <span>{story.read} read</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        >
          <span className="text-[7px] uppercase tracking-[0.32em] text-white/40">
            Scroll to read
          </span>

          <ArrowDown
            size={15}
            strokeWidth={1}
            className="animate-bounce text-white/45"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* INTRODUCTION                                                              */
/* -------------------------------------------------------------------------- */

function ArticleIntroduction({ story }: { story: JournalStory }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#f4f1eb]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28 lg:px-14 lg:py-32">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="grid gap-8 border-t border-[#1c1b19]/12 pt-6 md:grid-cols-[150px_minmax(0,1fr)] md:gap-16"
        >
          <div className="flex items-start gap-3">
            <span className="h-px w-7 translate-y-[5px] bg-[#a58b67]" />

            <span className="text-[8px] uppercase tracking-[0.32em] text-[#8b867d]">
              {story.category}
            </span>
          </div>

          <p className="max-w-[760px] text-[18px] leading-[1.75] tracking-[-0.01em] text-[#4f4b45] sm:text-[20px]">
            {story.intro}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* ARTICLE EXPERIENCE                                                        */
/* -------------------------------------------------------------------------- */

function ArticleExperience({ story }: { story: JournalStory }) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [activeBeat, setActiveBeat] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextBeat = value < 0.34 ? 0 : value < 0.67 ? 1 : 2;

    setActiveBeat((current) => (current === nextBeat ? current : nextBeat));
  });

  const beat = story.beats[activeBeat];
  const paragraph = story.paragraphs[activeBeat];

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-[#f4f1eb]">
      <div className="sticky top-0 h-[100svh] bg-[#f4f1eb]">
        <div className="mx-auto h-full max-w-[1800px] px-5 sm:px-8 md:px-10 lg:px-14">
          <div className="flex h-full items-center">
            <div className="grid w-full overflow-hidden bg-[#e9e5dd] lg:grid-cols-[1.4fr_0.8fr]">
              {/* IMAGE */}

              <div className="relative h-[46svh] min-h-[330px] overflow-hidden lg:h-[76svh]">
                {story.beats.map((item, index) => (
                  <motion.div
                    key={item.image}
                    initial={{
                      opacity: index === 0 ? 1 : 0,
                      scale: shouldReduceMotion ? 1 : 1.025,
                    }}
                    animate={{
                      opacity: index === activeBeat ? 1 : 0,
                      scale:
                        index === activeBeat || shouldReduceMotion ? 1 : 1.025,
                    }}
                    transition={{
                      opacity: {
                        duration: shouldReduceMotion ? 0 : 0.3,
                        ease,
                      },
                      scale: {
                        duration: shouldReduceMotion ? 0 : 0.45,
                        ease,
                      },
                    }}
                    className={`absolute inset-0 ${
                      index === activeBeat ? "z-10" : "z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={95}
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover"
                    />
                  </motion.div>
                ))}

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/25 via-transparent to-black/5" />

                <motion.div
                  key={`eyebrow-${activeBeat}`}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.25,
                    ease,
                  }}
                  className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8"
                >
                  <span className="text-[7px] uppercase tracking-[0.34em] text-white/70">
                    {beat.eyebrow}
                  </span>
                </motion.div>

                <div className="absolute bottom-6 left-6 z-30 flex items-center gap-3 sm:bottom-8 sm:left-8">
                  <span className="font-display text-xl text-white/85">
                    0{activeBeat + 1}
                  </span>

                  <span className="h-px w-8 bg-white/45" />

                  <span className="text-[7px] uppercase tracking-[0.3em] text-white/55">
                    03
                  </span>
                </div>
              </div>

              {/* ARTICLE */}

              <div className="flex min-h-[430px] flex-col justify-between p-7 sm:p-10 md:p-12 lg:min-h-0 lg:p-14 xl:p-16">
                <motion.article
                  key={`article-${activeBeat}`}
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.28,
                    ease,
                  }}
                  className="flex h-full flex-col"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-7 bg-[#a58b67]" />

                      <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                        {beat.eyebrow}
                      </span>
                    </div>

                    <h2 className="font-display mt-8 max-w-[650px] text-[clamp(3rem,4.6vw,6rem)] font-medium leading-[0.8] tracking-[-0.065em]">
                      {beat.title}
                    </h2>

                    <div className="mt-10 max-w-[470px] space-y-6">
                      <p className="text-[12px] leading-[2] text-[#4f4b45]">
                        {paragraph}
                      </p>

                      <p className="text-[11px] leading-[1.95] text-[#777168]">
                        {beat.text}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-12">
                    <div className="border-t border-[#1c1b19]/12 pt-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
                          Avenor Journal
                        </span>

                        <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
                          {story.number} / 0{activeBeat + 1}
                        </span>
                      </div>

                      <div className="mt-7 flex gap-1">
                        {story.beats.map((_, index) => (
                          <div
                            key={index}
                            className="h-px flex-1 bg-[#1c1b19]/10"
                          >
                            <motion.div
                              initial={false}
                              animate={{
                                width: index <= activeBeat ? "100%" : "0%",
                              }}
                              transition={{
                                duration: 0.25,
                                ease,
                              }}
                              className="h-full bg-[#a58b67]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
