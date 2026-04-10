"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  {
    value: "50K+",
    label: "Active Participants",
    description: "Engaged survey respondents earning rewards",
  },
  {
    value: "12K+",
    label: "Surveys Completed",
    description: "Research projects successfully delivered",
  },
  {
    value: "98%",
    label: "Completion Rate",
    description: "Industry-leading survey finish rate",
  },
  {
    value: "150K+",
    label: "STRK Distributed",
    description: "Tokens rewarded to participants",
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const StatsSection = () => {
  return (
    <motion.section
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-bg-card/30 border border-border-gray hover:border-primary-purple/20 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <motion.p
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-purple mb-2"
                variants={itemVariants}
              >
                {stat.value}
              </motion.p>
              <p className="text-white font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </p>
              <p className="text-text-gray text-xs sm:text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
