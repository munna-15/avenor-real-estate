import Footer from "@/components/layout/Footer";
import PropertiesHero from "@/components/properties/PropertiesHero";
import PropertiesShowcase from "@/components/properties/PropertiesShowcase";
import { properties } from "@/components/properties/properties";

export default function PropertiesPage() {
  return (
    <main>
      <PropertiesHero />

      <PropertiesShowcase properties={properties} />
      <Footer/>
    </main>
  );
}
