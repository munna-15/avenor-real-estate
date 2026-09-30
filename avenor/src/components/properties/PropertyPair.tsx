"use client";

import PropertySection from "./PropertySection";
import type { Property } from "./properties";

type PropertyPairProps = {
  properties: [Property, Property];
};

export default function PropertyPair({ properties }: PropertyPairProps) {
  return (
    <>
      <PropertySection property={properties[0]} />
      <PropertySection property={properties[1]} reverse />
    </>
  );
}
