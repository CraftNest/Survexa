import { ThreeStepExplainerSection } from "../features/landing-page/three-step-explainer";
import { ValuePropositionSection } from "../features/landing-page/value-proposition";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] bg-[#121014]">
      <ThreeStepExplainerSection />
      <ValuePropositionSection />
    </main>
  );
}
