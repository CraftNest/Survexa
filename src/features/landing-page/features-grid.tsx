"use client";

import { motion, type Variants } from "framer-motion";
import {
  BarChart3Icon,
  ShieldCheckIcon,
  ZapIcon,
  UsersIcon,
  GlobeIcon,
  BrainCircuitIcon,
} from "lucide-react";

const features = [
  {
    icon: ZapIcon,
    title: "Lightning Fast Setup",
    description:
      "Create and launch surveys in minutes with our intuitive builder. No coding required.",
  },
  {
    icon: BarChart3Icon,
    title: "Real-Time Analytics",
    description:
      "Track responses as they come in with live dashboards, charts, and exportable reports.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Blockchain Verified",
    description:
      "Every response is verified on-chain, ensuring data integrity and preventing fraud.",
  },
  {
    icon: UsersIcon,
    title: "Targeted Audiences",
    description:
      "Reach the right respondents with smart demographic and interest-based targeting.",
  },
  {
    icon: GlobeIcon,
    title: "Global Reach",
    description:
      "Access participants worldwide with multi-language support and localized surveys.",
  },
  {
    icon: BrainCircuitIcon,
    title: "AI-Powered Insights",
    description:
      "Get intelligent summaries and trend analysis powered by advanced machine learning.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
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

export const FeaturesGridSection = () => {
  return (
    <motion.section
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={headerVariants}
        >
          <h2 className="font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[4rem] text-white leading-tight mb-4 sm:mb-6">
            Everything You Need to{" "}
            <span className="text-primary-purple">Succeed</span>
          </h2>
          <p className="font-normal text-sm sm:text-base md:text-lg lg:text-[1.25rem] leading-6 sm:leading-7 md:leading-8 text-text-gray max-w-[39.9375rem] mx-auto">
            Powerful features designed to help you create better surveys and
            gather meaningful insights.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group bg-bg-card/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border-gray hover:border-primary-purple/30 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-purple/10 flex items-center justify-center mb-5 group-hover:bg-primary-purple/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary-purple" />
                </div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-gray text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
