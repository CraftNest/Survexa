import FAQAccordion from "./components/FAQAccordion";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 py-12 px-4">
      <FAQAccordion />
      <CTASection />
    </main>
  );
}
