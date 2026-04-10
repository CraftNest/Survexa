"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Survexa?",
    answer:
      "Survexa is a decentralized survey platform built on Starknet. It connects researchers with participants, rewarding respondents with STRK tokens for sharing their opinions and insights.",
  },
  {
    question: "How do I earn STRK tokens?",
    answer:
      "Simply browse available surveys, complete them with thoughtful responses, and receive STRK tokens directly to your wallet. The reward amount varies based on survey length and complexity.",
  },
  {
    question: "How do I create a survey?",
    answer:
      "Sign up as a researcher, use our intuitive survey builder to create your questions, set your reward budget, and publish. Our platform handles participant matching and token distribution automatically.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Survexa leverages blockchain technology for transparency while keeping individual responses anonymous. Your data is encrypted and you maintain full control over your information.",
  },
  {
    question: "What types of surveys can I create?",
    answer:
      "You can create multiple-choice, open-ended, rating scale, and matrix surveys. Our custom templates make it easy to get started quickly for any research need.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.section
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[48rem] mx-auto">
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[4rem] text-white leading-tight mb-4 sm:mb-6">
            Frequently Asked{" "}
            <span className="text-primary-purple">Questions</span>
          </h2>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-[1.25rem] leading-6 sm:leading-7 md:leading-8 text-text-gray">
            Everything you need to know about Survexa.
          </p>
        </motion.div>

        <motion.div className="space-y-3 sm:space-y-4" variants={containerVariants}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-border-gray bg-bg-faq-main overflow-hidden hover:border-primary-purple/20 transition-colors duration-300"
              variants={itemVariants}
            >
              <button
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-white font-medium text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-text-gray" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                      <p className="text-text-gray text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
