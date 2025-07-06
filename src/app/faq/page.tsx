"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Survexa?",
    answer:
      "Survexa is a decentralized survey platform built on Starknet that allows users to participate in surveys and earn STRK tokens for their valuable opinions and insights.",
  },
  {
    question: "How do I earn STRK tokens?",
    answer:
      "You can earn STRK tokens by participating in surveys on our platform. Each survey has a specific reward amount that you'll receive upon completion.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, your data is secure. We use blockchain technology to ensure transparency and security. Your personal information is never shared without your consent.",
  },
  {
    question: "How long does it take to complete a survey?",
    answer:
      "Survey completion times vary depending on the survey type and length. Most surveys take between 5-15 minutes to complete.",
  },
  {
    question: "When will I receive my rewards?",
    answer:
      "Rewards are typically distributed within 24-48 hours after survey completion and verification.",
  },
  {
    question: "Can I create my own surveys?",
    answer:
      "Yes! Survexa allows you to create custom surveys for your research needs. You can set your own reward amounts and target specific audiences.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-bg-faq-main text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-text-gray text-lg">
            Find answers to common questions about Survexa
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-bg-faq-hover rounded-lg overflow-hidden transition-all duration-300 hover:bg-bg-faq-hover-alt"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-bg-faq-hover-alt transition-colors duration-200"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-purple" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-purple" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-text-gray leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-text-gray mb-6">
            Can&apos;t find what you&apos;re looking for? Get in touch with our
            support team.
          </p>
          <button className="bg-primary-purple hover:bg-primary-purple-light text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
