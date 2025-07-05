import Hero from "./components/Hero";
import QuickFacts from "./components/QuickFacts";
import TechStack from "./components/TechStack";
import Highlights from "./components/Highlights";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* HERO */}
      <Hero />
      <QuickFacts/>
      <TechStack/>
      <Highlights/>
      {/* FOOTER */}
    </div>
  );
}
