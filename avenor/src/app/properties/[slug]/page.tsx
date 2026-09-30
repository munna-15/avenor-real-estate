import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PropertyDetail from "@/components/properties/PropertyDetail";
import { properties } from "@/components/properties/properties";

type PropertyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    return {
      title: "Property Not Found — AVENOR",
    };
  }

  return {
    title: `${property.title} — AVENOR`,
    description: property.description,
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;

  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetail property={property} />;
}
