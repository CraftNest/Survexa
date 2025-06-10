import Footer from "../features/landing-page/footer";
import Hero from "../features/landing-page/hero";
// import Navbar from "../features/landing-page/navbar";
import { ThreeStepExplainerSection } from "../features/landing-page/three-step-explainer";
import { ValuePropositionSection } from "../features/landing-page/value-proposition";
import SmoothScrollWrapper from "./_components/smooth-scroll-wrapper";

export default function Home() {
  return (
    <main className="mx-auto w-full bg-[#121014]">
      <SmoothScrollWrapper>
        {/* <Navbar/> */}
        <Hero />
        <ThreeStepExplainerSection />
        <ValuePropositionSection />
        <Footer />
      </SmoothScrollWrapper>
    </main>
  );
}
