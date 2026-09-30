"use client";

import PropertySection from "./PropertySection";
import type { Property } from "./properties";

type PropertiesShowcaseProps = {
  properties: Property[];
};

const backgrounds = [
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=3200&q=95",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=3200&q=95",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=3200&q=95",
];

export default function PropertiesShowcase({
  properties,
}: PropertiesShowcaseProps) {
  return (
    <div className="relative bg-[#f4f1eb]">
      {properties.map((property, index) => {
        const backgroundIndex = index < 2 ? 0 : index < 4 ? 1 : 2;
        const isLast = index === properties.length - 1;

        return (
          <div key={property.number}>
            <PropertySection property={property} reverse={index % 2 === 1} />

            {!isLast && (
              <div
                className="property-gap-bg relative h-[70vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.24),
                    rgba(0, 0, 0, 0.24)
                  ), url("${backgrounds[backgroundIndex]}")`,
                  backgroundAttachment: "fixed",
                }}
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-black/5" />

                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1800px] px-5 pb-7 sm:px-8 sm:pb-9 md:px-10 lg:px-14">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-white/40" />

                    <span className="text-[7px] uppercase tracking-[0.34em] text-white/55">
                      Avenor · Private Residences
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
