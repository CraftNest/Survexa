import Hero from "@/features/landing-page/hero";
import { ValuePropositionSection } from "@/features/landing-page/value-proposition";
import { CategoriesShowcase } from "@/features/landing-page/categories-showcase";
import { ThreeStepExplainerSection } from "@/features/landing-page/three-step-explainer";
import { CreateSurvey } from "@/features/landing-page/create-survey";
import Footer from "@/features/landing-page/footer";
import Navbar from "@/features/landing-page/navbar";
import SmoothScrollWrapper from "@/components/smooth-scroll-wrapper";

export default function Home() {
  return (
    <SmoothScrollWrapper>
      <div className="min-h-screen bg-bg-dark">
        <Navbar />
        <Hero />
        <ValuePropositionSection />
        <CategoriesShowcase />
        <ThreeStepExplainerSection />
        <CreateSurvey />
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
}
