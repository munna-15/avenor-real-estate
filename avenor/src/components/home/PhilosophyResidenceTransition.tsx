
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import ArchitecturePhilosophy from "./ArchitecturePhilosophy";
import ResidenceCollection from "./ResidenceCollection";

const transitionImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95";

export default function PhilosophyResidenceTransition() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            initial={{
              scale: shouldReduceMotion ? 1 : 1.03,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={transitionImage}
              alt=""
              fill
              quality={95}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>

      <div className="relative z-10">
        <ArchitecturePhilosophy />

        <div className="h-[70vh]" />

        <ResidenceCollection />
      </div>
    </div>
  );
}
