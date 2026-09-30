"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type PropertyTransitionProps = {
  image: string;
};

export default function PropertyTransition({ image }: PropertyTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-[70vh]">
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
              src={image}
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
    </section>
  );
}
