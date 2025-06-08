import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface StepCardProps {
  step: {
    id: number | string;
    image: string;
    title: string;
    description: string;
    link: string;
  };
  index: number;
}

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const numberVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 0.2,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const mobileContentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.7,
    },
  },
};

export const StepCard = ({ step, index }: StepCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative w-full rounded-[12px] min-h-[400px] sm:min-h-[466px] text-white cursor-pointer overflow-hidden transition-all duration-400 ease-in-out ${
        isHovered ? "md:max-w-[370px]" : "md:max-w-[320px]"
      }`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(17, 14, 19, 0.8) 0%, rgba(17, 14, 19, 0.8) 100%), url('${step.image}')`,
        backgroundPosition: "50%",
        backgroundBlendMode: "normal",
        backgroundSize: "cover",
      }}
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.h1
        className="text-[120px] sm:text-[140px] md:text-[160px] lg:text-[178px] font-extrabold mt-3 opacity-20 w-[60px] sm:w-[70px] md:w-[90px] h-[90px] sm:h-[110px] md:h-[136px] flex items-center justify-center overflow-hidden"
        variants={numberVariants}
      >
        {step.id}
      </motion.h1>

      <motion.div
        className="absolute top-[70px] sm:top-[89px] left-4 sm:left-6 md:max-w-[208px] min-h-[300px] sm:min-h-[353px] flex flex-col justify-between pr-4 sm:pr-0"
        variants={contentVariants}
      >
        <div className="flex-1">
          <motion.h3
            className="text-[28px] sm:text-[32px] md:text-[36px] leading-8 sm:leading-10 md:leading-11 font-extrabold max-md:max-w-[280px]"
            variants={contentVariants}
          >
            {step.title}
          </motion.h3>

          {/* Mobile/Tablet Description - Visible only when in view */}
          <motion.div
            className="md:hidden mt-6"
            variants={mobileContentVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.p
              className="text-sm sm:text-base leading-5 sm:leading-6 font-normal tracking-[0.32px] text-[#A4A4A4] max-md:w-full"
              variants={mobileContentVariants}
            >
              {step.description}
            </motion.p>
          </motion.div>

          {/* Desktop Description - Hover effect */}
          <motion.div
            className="hidden md:block overflow-hidden"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={
              isHovered
                ? { height: "auto", opacity: 1, marginTop: 23 }
                : { height: 0, opacity: 0, marginTop: 0 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.p
              className="text-sm sm:text-base leading-5 sm:leading-6 font-normal tracking-[0.32px] text-[#A4A4A4] max-md:w-full"
              initial={{ y: -10 }}
              animate={isHovered ? { y: 0 } : { y: -10 }}
              transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
            >
              {step.description}
            </motion.p>
          </motion.div>
        </div>

        {/* Mobile/Tablet Link - Visible only when in view */}
        <motion.div
          className="md:hidden mt-auto"
          variants={mobileContentVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Link
              href={step.link}
              className="flex items-center gap-2.5 min-h-[24px] text-sm sm:text-base hover:text-white/90 transition-colors duration-200 hover:underline"
            >
              <span>Click here to start</span>
              <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop Link - Hover effect */}
        <motion.div
          className="hidden md:block mt-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
        >
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Link
              href={step.link}
              className="flex items-center gap-2.5 min-h-[24px] text-sm sm:text-base hover:text-white/90 transition-colors duration-200 hover:underline"
            >
              <span>Click here to start</span>
              <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
