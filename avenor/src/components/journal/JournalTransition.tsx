"use client";

import Image from "next/image";

const backgroundImage =
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=3200&q=95";

export default function JournalTransition() {
  return (
    <section
      className="relative h-[70vh] w-full overflow-hidden bg-[#171614]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.28),
            rgba(0, 0, 0, 0.28)
          ), url("${backgroundImage}")`,
          backgroundAttachment: "fixed",
        }}
      />

      <div className="absolute inset-0 bg-black/5" />
    </section>
  );
}
