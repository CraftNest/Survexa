"use client";

import { motion, type Variants } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for individuals getting started with surveys.",
    features: [
      "Up to 3 active surveys",
      "50 responses per survey",
      "Basic analytics",
      "Community support",
      "STRK token rewards",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "29",
    period: "per month",
    description: "For teams who need advanced research capabilities.",
    features: [
      "Unlimited active surveys",
      "Unlimited responses",
      "Advanced analytics & exports",
      "Priority support",
      "Enhanced STRK rewards",
      "Custom branding",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "SSO & advanced security",
      "SLA guarantees",
      "On-premise deployment",
      "API access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const PricingSection = () => {
  return (
    <motion.section
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div
        className="absolute -top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/bg-gradient.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={headerVariants}
        >
          <h2 className="font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[4rem] text-white leading-tight mb-4 sm:mb-6">
            Simple, Transparent{" "}
            <span className="text-primary-purple">Pricing</span>
          </h2>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-[1.25rem] leading-6 sm:leading-7 md:leading-8 text-text-gray max-w-[39.9375rem] mx-auto">
            Choose the plan that fits your research needs. All plans include
            STRK token rewards for participants.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-colors duration-300 flex flex-col ${
                plan.highlighted
                  ? "bg-primary-purple/10 border-primary-purple/50 shadow-lg shadow-primary-purple/10"
                  : "bg-bg-card/50 backdrop-blur-sm border-border-gray hover:border-primary-purple/30"
              }`}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-purple text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl sm:text-2xl mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  {plan.price !== "Custom" && (
                    <span className="text-text-gray text-lg">$</span>
                  )}
                  <span className="text-white font-extrabold text-4xl sm:text-5xl">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-gray text-sm ml-1">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-text-gray text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" />
                    <span className="text-text-gray text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/" className="mt-auto">
                <button
                  className={`w-full py-3 px-6 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-primary-purple text-white hover:bg-primary-purple/90 shadow-lg shadow-primary-purple/25"
                      : "bg-white/5 text-white border border-border-gray hover:bg-white/10 hover:border-primary-purple/30"
                  }`}
                >
                  {plan.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
