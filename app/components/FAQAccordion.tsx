'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: 'What is this Survexa about?',
    answer:
      'Our platform connects businesses and researchers with real users who provide valuable feedback through surveys. In return, users are rewarded in cryptocurrency on Starknet.',
  },
  {
    question: 'How do I receive my payments?',
    answer:
      'Payments are sent directly to your linked Starknet crypto wallet once you complete surveys and reach the minimum payout threshold.',
  },
  {
    question: 'Do I need a crypto wallet to join?',
    answer:
      'Yes, a crypto wallet compatible with Starknet is required to receive your rewards.',
  },
  {
    question: 'How much can I earn per survey?',
    answer:
      'Earnings vary depending on the survey length and complexity, but typically range from $1 to $10 in crypto rewards.',
  },
  {
    question: 'Is my information safe?',
    answer:
      'Absolutely. We take privacy seriously and use secure protocols to protect your data at all times.',
  },
  {
    question: 'How does it work?',
    answer:
      'You take surveys, provide honest feedback, and get rewarded in cryptocurrency directly in your wallet.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg border-2 border-blue-500"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-2">FAQ</h2>
      <p className="text-gray-300 text-center mb-6">
        Covers all the popular inquiries you may have
      </p>

      <div role="list" className="space-y-6">
        {faqItems.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className={`border border-gray-500 rounded-lg bg-gray-800
                hover:border-blue-500
                focus-within:border-blue-500
                transition-colors duration-300`}
            >
              <button
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-blue-500 text-white"
              >
                <span className="font-semibold">{item.question}</span>
                <svg
                  className={`w-6 h-6 ml-2 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className={`px-4 pb-6 pt-0 overflow-hidden transition-[max-height] duration-300 ${
                  isOpen ? 'max-h-[1500px]' : 'max-h-0'
                }`}
                style={{ maxHeight: isOpen ? '1500px' : '0' }}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
