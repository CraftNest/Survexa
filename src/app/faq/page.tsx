"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    question: "What is this survexa about?",
    answer:
      "Our platform connects businesses and researchers with real users who provide valuable feedback through surveys. In return, users are rewarded in cryptocurrency on Starknet.",
  },
  {
    question: "How do I receive my payments?",
    answer:
      "Payments are sent directly to your connected crypto wallet after survey completion.",
  },
  {
    question: "Do I need a crypto wallet to join?",
    answer:
      "Yes, you need a Starknet-compatible crypto wallet to receive rewards.",
  },
  {
    question: "How much can I earn per survey?",
    answer:
      "Earnings vary per survey, depending on length and complexity. Each survey will display its reward before you start.",
  },
  {
    question: "Is my information safe?",
    answer:
      "We take privacy seriously. Your data is encrypted and never shared without your consent.",
  },
  {
    question: "How does it work?",
    answer:
      "Sign up, connect your wallet, and start taking surveys. Complete surveys to earn crypto rewards.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleAccordion = (idx: number) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white flex flex-col">
      <div className="border-2 border-[#9011FF] rounded-2xl max-w-5xl mx-auto my-8 shadow-lg overflow-hidden bg-[#18171C]">
        {/* FAQ Section */}
        <section className="max-w-2xl mx-auto w-full py-12 px-4">
          <h1 className="text-4xl font-bold mb-2 text-center">FAQ</h1>
          <p className="text-lg text-gray-300 mb-8 text-center">
            Covers all the popular inquires you may have
          </p>
          <div
            className="space-y-4"
            role="region"
            aria-labelledby="faq-heading"
          >
            {faqs.map((faq, idx) => (
              <div key={faq.question}>
                <button
                  className={`w-full flex justify-between items-center px-5 py-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9011FF] ${
                    openIndex === idx
                      ? "bg-[#1A1A1A] text-[#9011FF]"
                      : "bg-[#18171C] hover:bg-[#23212b]"
                  }`}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-header-${idx}`}
                  onClick={() => handleAccordion(idx)}
                >
                  <span className="text-base font-semibold text-left">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 ml-4 transition-transform duration-200 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-header-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx
                      ? "max-h-40 opacity-100 py-3 px-5"
                      : "max-h-0 opacity-0 py-0 px-5"
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative flex flex-col items-center justify-center flex-1 py-16 px-4 mt-8 overflow-hidden"
          style={{
            background:
              "linear-gradient(rgba(13,13,13,0.85),rgba(13,13,13,0.85)), url('/faq-bg.jpg') center/cover no-repeat",
          }}
        >
          {/* Image as background layer */}
          <Image
            src="/step-1.jpg"
            alt="FAQ background"
            fill
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 z-10 pointer-events-none"
            aria-hidden="true"
          />
          {/* CTA Content */}
          <div className="relative z-20 text-center max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Take your 1st Survey!
            </h2>
            <p className="text-lg text-gray-200 mb-8">Less than 5mins</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/participant"
                className="bg-[#9011FF] hover:bg-[#B159FF] text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9011FF] text-base"
              >
                Take a Survey
              </Link>
              <Link
                href="/client"
                className="border border-[#9011FF] text-[#9011FF] hover:bg-[#9011FF] hover:text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#9011FF] text-base"
              >
                Explore Survey &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FAQPage;
