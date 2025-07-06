import { motion, type Variants } from "framer-motion";
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

const stepVariants: Variants = {
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

const numberVariants: Variants = {
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

const contentVariants: Variants = {
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

const mobileContentVariants: Variants = {
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
      className={`relative w-full rounded-xl min-h-[25rem] sm:min-h-[29.125rem] text-white cursor-pointer overflow-hidden transition-all duration-400 ease-in-out ${
        isHovered ? "md:max-w-[23.125rem]" : "md:max-w-[16rem]"
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
        className="text-[7.5rem] sm:text-[8.75rem] md:text-[10rem] lg:text-[11.125rem] font-extrabold mt-3 opacity-20 w-[3.75rem] sm:w-[4.375rem] md:w-[5.625rem] h-[5.625rem] sm:h-[6.875rem] md:h-[8.5rem] flex items-center justify-center overflow-hidden"
        variants={numberVariants}
      >
        {step.id}
      </motion.h1>

      <motion.div
        className="absolute top-[4.375rem] sm:top-[5.5625rem] left-4 sm:left-6 md:max-w-[13rem] min-h-[18.75rem] sm:min-h-[22.0625rem] flex flex-col justify-between pr-4 sm:pr-0"
        variants={contentVariants}
      >
        <div className="flex-1">
          <motion.h3
            className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] leading-8 sm:leading-10 md:leading-11 font-extrabold max-md:max-w-[17.5rem]"
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
              className="text-sm sm:text-base leading-5 sm:leading-6 font-normal tracking-[0.02rem] text-text-gray-medium max-md:w-full"
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
              className="text-sm sm:text-base leading-5 sm:leading-6 font-normal tracking-[0.02rem] text-text-gray-medium max-md:w-full"
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
              className="flex items-center gap-2.5 min-h-[1.5rem] text-sm sm:text-base hover:text-white/90 transition-colors duration-200 hover:underline"
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
              className="flex items-center gap-2.5 min-h-[1.5rem] text-sm sm:text-base hover:text-white/90 transition-colors duration-200 hover:underline"
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
