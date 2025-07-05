import Hero from "./components/Hero";
import CanvasBackground from "./components/CanvasBackground";
import NowSection from "./components/NowSection";
import QuickFacts from "./components/QuickFacts";
import TechStack from "./components/TechStack";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

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
