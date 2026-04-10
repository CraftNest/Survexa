import Hero from "@/features/landing-page/hero";
import { ValuePropositionSection } from "@/features/landing-page/value-proposition";
import { ThreeStepExplainerSection } from "@/features/landing-page/three-step-explainer";
import { StatsSection } from "@/features/landing-page/stats";
import { CreateSurvey } from "@/features/landing-page/create-survey";
import { TestimonialsSection } from "@/features/landing-page/testimonials";
import { FaqSection } from "@/features/landing-page/faq-section";
import { CtaBanner } from "@/features/landing-page/cta-banner";
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
        <ThreeStepExplainerSection />
        <StatsSection />
        <CreateSurvey />
        <TestimonialsSection />
        <FaqSection />
        <CtaBanner />
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
}
