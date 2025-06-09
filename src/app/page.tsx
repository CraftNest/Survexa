import Hero from "../features/landing-page/hero";
import { ValuePropositionSection } from "../features/landing-page/value-proposition";
import SmoothScrollWrapper from "./_components/smooth-scroll-wrapper";

export default function Home() {
  return (
    <main className="mx-auto w-full bg-[#121014]">
      <SmoothScrollWrapper>
        <Hero />
        <ValuePropositionSection />
      </SmoothScrollWrapper>
    </main>
  );
}
