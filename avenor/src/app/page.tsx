import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BrandStatement from "@/components/home/BrandStatement";
import CinematicMoment from "@/components/home/CinematicMoment";
import FeaturedResidence from "@/components/home/FeaturedResidence";
import PhilosophyResidenceTransition from "@/components/home/PhilosophyResidenceTransition";
import Locations from "@/components/home/Locations";
import PrivateViewing from "@/components/home/PrivateViewing";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BrandStatement />
      <CinematicMoment />
      <FeaturedResidence />
      <PhilosophyResidenceTransition />
      <Locations/>
      <PrivateViewing/>
      <Footer/>
    </main>
  );
}
