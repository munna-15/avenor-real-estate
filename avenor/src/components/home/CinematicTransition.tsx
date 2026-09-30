
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const transitionImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=3200&q=95";

export default function CinematicTransition() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-[30vh] overflow-hidden bg-[#171614]">
      <div className="sticky top-0 h-screen">
        <motion.div
          initial={{
            scale: shouldReduceMotion ? 1 : 1.04,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
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

        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}

