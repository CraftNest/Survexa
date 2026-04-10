"use client";

import { motion, type Variants } from "framer-motion";
import Button from "@/components/button";
import Link from "next/link";

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const CtaBanner = () => {
  return (
    <motion.section
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-gradient.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />

      <motion.div
        className="relative z-10 max-w-[48rem] mx-auto text-center"
        variants={containerVariants}
      >
        <motion.h2
          className="font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[4rem] text-white leading-tight mb-4 sm:mb-6"
          variants={itemVariants}
        >
          Ready to Start{" "}
          <span className="text-primary-purple">Earning?</span>
        </motion.h2>

        <motion.p
          className="font-normal text-sm sm:text-base md:text-lg lg:text-[1.25rem] leading-6 sm:leading-7 md:leading-8 text-text-gray max-w-[39.9375rem] mx-auto mb-8 sm:mb-10"
          variants={itemVariants}
        >
          Join thousands of participants and researchers on the leading
          decentralized survey platform. Start earning STRK tokens today.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link href="/">
            <Button text="Start Earning" className="w-full sm:w-auto" />
          </Link>
          <Link href="/">
            <button className="px-8 py-4 border-2 border-border-light rounded-xl font-bold text-base text-white hover:bg-border-light hover:text-bg-dark transition-colors duration-300 w-full sm:w-auto">
              Create a Survey
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
