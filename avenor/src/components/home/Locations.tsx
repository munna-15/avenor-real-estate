"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const locations = [
  {
    number: "01",
    name: "Gulshan",
    district: "Gulshan Avenue",
    description:
      "Established addresses, generous residences and a distinctly urban setting.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95",
  },
  {
    number: "02",
    name: "Banani",
    district: "Banani · Dhaka",
    description:
      "A refined residential district shaped by convenience, character and city life.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=3200&q=95",
  },
  {
    number: "03",
    name: "Baridhara",
    district: "Diplomatic Quarter",
    description:
      "Quiet streets, mature greenery and a greater sense of privacy within the city.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=3200&q=95",
  },
  {
    number: "04",
    name: "Bashundhara",
    district: "Residential District",
    description:
      "Contemporary surroundings with space for larger homes and modern living.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=3200&q=95",
  },
  {
    number: "05",
    name: "Dhanmondi",
    district: "Dhanmondi · Dhaka",
    description:
      "A mature neighbourhood where established character meets contemporary residences.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Locations() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="locations"
      className="overflow-hidden bg-[#171614] text-[#f4f1eb]"
    >
      <div className="mx-auto max-w-[1800px] px-5 py-28 sm:px-8 sm:py-32 md:px-10 md:py-40 lg:px-14 lg:py-44">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease }}
          className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-24"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-white/30" />

              <span className="text-[9px] uppercase tracking-[0.34em] text-white/45">
                The Avenor Atlas
              </span>
            </div>

            <h2 className="font-display mt-8 max-w-[900px] text-[clamp(4rem,8vw,9rem)] font-medium leading-[0.78] tracking-[-0.065em]">
              Where
              <br />
              we belong.
            </h2>
          </div>

          <div className="self-end border-t border-white/15 pt-5">
            <p className="max-w-[300px] text-[11px] leading-7 text-white/50">
              Avenor selects locations for their character, privacy and the
              quality of everyday life.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                05 Locations
              </span>

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Dhaka
              </span>
            </div>
          </div>
        </motion.div>

        {/* Location List */}
        <div className="mt-24 sm:mt-32 lg:mt-40">
          {locations.map((location, index) => (
            <motion.div
              key={location.number}
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.04,
                ease,
              }}
              className="group border-t border-white/15"
            >
              <Link
                href="#contact"
                className="grid gap-8 py-8 md:min-h-[230px] md:grid-cols-[70px_minmax(220px,0.85fr)_minmax(250px,1fr)_230px] md:items-center md:gap-10 md:py-9 lg:min-h-[255px] lg:grid-cols-[80px_minmax(260px,0.8fr)_minmax(320px,1fr)_260px] lg:gap-14 lg:py-10"
              >
                {/* Number */}
                <div className="flex items-center justify-between md:block">
                  <span className="text-[9px] tracking-[0.22em] text-white/30">
                    {location.number}
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.28em] text-white/25 md:hidden">
                    Location
                  </span>
                </div>

                {/* Location Name */}
                <div>
                  <p className="mb-4 text-[8px] uppercase tracking-[0.3em] text-white/30">
                    {location.district}
                  </p>

                  <h3 className="font-display text-[clamp(3.5rem,6vw,6.2rem)] leading-[0.78] tracking-[-0.06em]">
                    {location.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="max-w-[390px]">
                  <p className="text-[11px] leading-7 text-white/45">
                    {location.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-7 bg-white/20" />

                    <span className="text-[8px] uppercase tracking-[0.28em] text-white/30">
                      Private Residences
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3]">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.025 }
                    }
                    transition={{ duration: 0.8, ease }}
                  >
                    <Image
                      src={location.image}
                      alt={`${location.name} private residences`}
                      fill
                      quality={95}
                      sizes="(max-width: 768px) 100vw, 260px"
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-white/25 bg-black/10 backdrop-blur-sm">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.1}
                      className="text-white/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          <div className="border-t border-white/15" />
        </div>

        {/* Closing */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
          whileInView={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease }}
          className="mt-20 flex flex-col gap-8 sm:mt-28 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              Avenor / Dhaka
            </span>

            <p className="font-display mt-5 max-w-[700px] text-[clamp(2.3rem,4vw,4.1rem)] leading-[0.9] tracking-[-0.045em] text-white/85">
              The address is only the beginning.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 hover:text-white"
          >
            Private enquiries
            <ArrowUpRight
              size={15}
              strokeWidth={1.1}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
