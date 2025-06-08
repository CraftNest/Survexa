"use client";

import { StepCard } from "@/src/components/step-card";
import { motion } from "framer-motion";

const steps = [
  {
    id: "1",
    image: "/",
    title: "Browse the Category",
    description:
      "Explore topics that matter to you and discover surveys tailored to your interests.",
    link: "/",
  },
  {
    id: "2",
    image: "/",
    title: "Carry out a Survey",
    description:
      "Share your thoughts by answering quick surveys and help shape ideas, products, and decisions.",
    link: "/",
  },
  {
    id: "3",
    image: "/",
    title: "Receive Reward",
    description:
      "Earn StarkNet tokens by completing surveys, turning your opinions into real value.",
    link: "/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const ThreeStepExplainerSection = () => {
  return (
    <motion.section
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 xl:py-[180px] px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div
        className="absolute -top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/proposition-bg.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div
        className="absolute -left-[10%] top-[70%] transform -translate-y-1/2 -translate-x-1/4 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url('/proposition-bg.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col gap-4 sm:gap-5 max-w-[639px] w-full mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-[51px]"
        variants={headerVariants}
      >
        <motion.h1
          className="font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[64px] text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
          variants={headerVariants}
        >
          It&apos;s easier than taking a breath
        </motion.h1>
        <motion.p
          className="font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-6 sm:leading-7 md:leading-8 text-[#B1B1B1]"
          variants={headerVariants}
        >
          Start earning in just 3-steps
        </motion.p>
      </motion.div>
      <motion.div
        className="relative z-10 flex max-md:flex-col gap-4 md:gap-3 items-center justify-center w-full max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};
