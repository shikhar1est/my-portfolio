import Hero from "./components/Hero";
import CanvasBackground from "./components/CanvasBackground";
import NowSection from "./components/NowSection";
import QuickFacts from "./components/QuickFacts";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* HERO */}
      <Hero />
      <QuickFacts/>
      {/* FOOTER */}
      <footer className="py-8 flex flex-wrap justify-center gap-6 border-t border-black/10 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400">
        <a href="https://nextjs.org/learn" target="_blank" className="hover:underline">Learn</a>
        <a href="https://vercel.com/templates" target="_blank" className="hover:underline">Examples</a>
        <a href="https://nextjs.org" target="_blank" className="hover:underline">Go to nextjs.org →</a>
      </footer>
    </div>
  );
}
