"use client";

import Button from "@/components/button";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: "/benefit-1.svg",
    text: "Custom Template",
  },
  {
    icon: "/benefit-2.svg",
    text: "Diverse Audience",
  },
  {
    icon: "/benefit-3.svg",
    text: "Cost Efficient",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const benefitVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.8,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

const iconVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const ValuePropositionSection = () => {
  return (
    <motion.section
      className="relative overflow-hidden pt-16 md:pt-18 lg:pt-20 xl:pt-24 max-w-[68.375rem] w-full mx-auto px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
      <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 lg:gap-20">
        <motion.div
          className="w-full mx-auto text-center flex flex-col gap-4 sm:gap-5 lg:gap-6"
          variants={itemVariants}
        >
          <motion.h1
            className="font-semibold md:font-bold lg:font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] xl:text-[4rem] text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
            variants={itemVariants}
          >
            Save time, work smarter, get answers.
          </motion.h1>
          <motion.p
            className="font-normal text-sm sm:text-base md:text-lg lg:text-[1.25rem] leading-6 sm:leading-7 md:leading-8 text-text-gray max-w-[46.875rem] mx-auto"
            variants={itemVariants}
          >
            Easily collect meaningful insights from real people using smart,
            intuitive surveys. Streamline your decision-making process with
            faster feedback, better collaboration, and data you can trust.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 justify-items-center"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="max-w-[18.6875rem] w-full flex flex-col gap-3 sm:gap-4 md:gap-[0.5625rem] items-center text-center cursor-pointer group"
              variants={benefitVariants}
              whileHover="hover"
            >
              <motion.span variants={iconVariants} className="block">
                <Image
                  src={benefit.icon}
                  alt={`${benefit.text} icon`}
                  width={88}
                  height={83}
                  priority
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-[5.5rem] md:h-[5.1875rem] object-contain"
                />
              </motion.span>
              <motion.h3
                className="text-white font-medium text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] xl:text-[2rem] leading-6 sm:leading-8 md:leading-10 lg:leading-12 group-hover:text-white/90 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {benefit.text}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link href={"/"}>
            <Button
              text="Add a Survey now!"
              className="text-white font-bold text-sm sm:text-base px-4 sm:px-6 min-h-[2.75rem] sm:min-h-[3rem] min-w-[11.25rem] sm:min-w-[12.375rem] rounded-xl bg-[rgba(255,255,255,0.06)] w-fit cursor-pointer transition-all duration-300 hover:bg-white/10 hover:text-white border-none backdrop-blur-sm hover:shadow-lg hover:shadow-white/10 flex items-center gap-2"
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};
