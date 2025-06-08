"use client";

import FAQAccordion from "./FAQAccordion";
import CTASection from "./CTASection";

export default function FAQSection() {
  return (
    <section className="border-2 border-blue-600 p-6 md:p-12 rounded-2xl my-12 space-y-20">
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold">FAQ</h2>
        <p className="text-gray-300">Covers all the popular inquiries you may have</p>
      </div>
      <FAQAccordion />
      <CTASection />
    </section>
  );
}
