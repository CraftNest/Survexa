"use client";

import { motion, type Variants } from "framer-motion";

const partners = [
  { name: "Starknet", abbr: "SN" },
  { name: "Ethereum", abbr: "ETH" },
  { name: "OpenAI", abbr: "OA" },
  { name: "Google Research", abbr: "GR" },
  { name: "McKinsey", abbr: "MK" },
  { name: "Deloitte", abbr: "DL" },
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const TrustedBySection = () => {
  return (
    <motion.section
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.p
          className="text-center text-text-gray text-sm sm:text-base md:text-lg font-medium mb-8 sm:mb-12 uppercase tracking-widest"
          variants={headerVariants}
        >
          Trusted by leading organizations
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center"
          variants={containerVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center w-full h-16 sm:h-20 rounded-xl bg-bg-card/30 border border-border-gray/50 hover:border-primary-purple/20 transition-all duration-300 group cursor-default"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-purple/10 flex items-center justify-center text-primary-purple font-bold text-xs group-hover:bg-primary-purple/20 transition-colors duration-300">
                  {partner.abbr}
                </span>
                <span className="text-text-gray text-sm sm:text-base font-medium group-hover:text-white transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
