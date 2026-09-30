
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const principles = [
  {
    number: "01",
    title: "Selective",
    text: "A focused collection allows every residence to receive the attention it deserves.",
  },
  {
    number: "02",
    title: "Personal",
    text: "We keep the process direct, discreet and shaped around the individual.",
  },
  {
    number: "03",
    title: "Considered",
    text: "From first enquiry to private viewing, every detail is approached with care.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutFacts() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-[#f4f1eb] text-[#1c1b19]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-14 lg:py-44">
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 22 }
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
        >
          <div className="flex items-center justify-between border-b border-[#1c1b19]/12 pb-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#a58b67]" />

              <span className="text-[8px] uppercase tracking-[0.34em] text-[#8b867d]">
                03 / How We Work
              </span>
            </div>

            <span className="text-[8px] uppercase tracking-[0.3em] text-[#8b867d]">
              By appointment
            </span>
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-28">
            <div>
              <p className="text-[8px] uppercase tracking-[0.34em] text-[#a58b67]">
                A quieter process
              </p>

              <h2 className="font-display mt-7 max-w-[950px] text-[clamp(4rem,7vw,8rem)] font-medium leading-[0.76] tracking-[-0.07em]">
                Fewer properties.
                <br />
                More attention.
              </h2>
            </div>

            <div className="flex flex-col justify-end lg:pb-2">
              <p className="max-w-[430px] text-[12px] leading-[2] text-[#4f4b45]">
                We believe finding a residence should feel as considered as
                the place itself. Our approach is deliberately focused,
                allowing each client and property the time and attention they
                require.
              </p>

              <Link
                href="/inquiry"
                className="group mt-9 inline-flex w-fit items-center gap-4 text-[8px] uppercase tracking-[0.32em] text-[#3e3a34]"
              >
                <span className="border-b border-[#1c1b19]/25 pb-3 transition-colors duration-300 group-hover:border-[#1c1b19]">
                  Begin a private conversation
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
          </div>

          <div className="mt-24 border-t border-[#1c1b19]/12 sm:mt-28">
            <div className="grid lg:grid-cols-3">
              {principles.map((principle, index) => (
                <div
                  key={principle.number}
                  className={`py-9 lg:py-11 ${
                    index > 0
                      ? "border-t border-[#1c1b19]/12 lg:border-l lg:border-t-0 lg:pl-10"
                      : "lg:pr-10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] tracking-[0.28em] text-[#a58b67]">
                      {principle.number}
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.3em] text-[#8b867d]">
                      AVENOR
                    </span>
                  </div>

                  <h3 className="font-display mt-9 text-[clamp(2.8rem,4vw,4.5rem)] font-medium leading-[0.8] tracking-[-0.06em]">
                    {principle.title}
                  </h3>

                  <p className="mt-5 max-w-[330px] text-[11px] leading-7 text-[#6b665e]">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-4 border-t border-[#1c1b19]/12 pt-6 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
              AVENOR · Private Residences & Estates
            </span>

            <span className="text-[7px] uppercase tracking-[0.32em] text-[#8b867d]">
              Dhaka · By Appointment
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

