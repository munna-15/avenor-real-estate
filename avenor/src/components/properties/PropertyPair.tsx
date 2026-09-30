"use client";

import PropertySection from "./PropertySection";

type Property = {
  number: string;
  category: string;
  title: string;
  location: string;
  details: string;
  description: string;
  image: string;
};

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
