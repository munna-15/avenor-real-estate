import JournalClosing from "@/components/journal/JournalClosing";
import JournalFeature from "@/components/journal/JournalFeature";
import JournalHero from "@/components/journal/JournalHero";
import JournalIndex from "@/components/journal/JournalIndex";
import JournalPerspective from "@/components/journal/JournalPerspective";
import JournalTransition from "@/components/journal/JournalTransition";
import Footer from "@/components/layout/Footer";

export default function JournalPage() {
  return (
    <main>
      <JournalHero />
      <JournalFeature />
      <JournalIndex />
      <JournalPerspective/>
      <JournalTransition/>
      <JournalClosing/>
      <Footer/>
    </main>
  );
}
