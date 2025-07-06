"use client";

import { motion } from "framer-motion";
import Button from "@/components/button";
import Card from "@/components/card";

const cardData = [
  {
    title: "Cryptocurrency Adoption",
    note: "What drives your interest in crypto?",
    time: "5 min",
    questions: "12",
    strk: "0.5",
  },
  {
    title: "Remote Work Preferences",
    note: "How has remote work changed your lifestyle?",
    time: "3 min",
    questions: "8",
    strk: "0.3",
  },
  {
    title: "Sustainable Living",
    note: "What sustainable practices do you follow?",
    time: "7 min",
    questions: "15",
    strk: "0.7",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-dark text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-purple/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary-purple/10 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Share Your Voice,{" "}
                <span className="text-primary-purple">Earn Rewards</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-text-gray leading-relaxed max-w-2xl"
              >
                Join thousands of participants sharing insights through surveys.
                Get rewarded with STRK tokens for your valuable opinions on
                topics that matter.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button text="Start Earning" className="w-full sm:w-auto" />
              <button className="px-8 py-4 border-2 border-border-light rounded-xl font-bold text-base hover:bg-border-light hover:text-bg-dark transition-colors duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid gap-6">
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className={`${index === 1 ? "ml-8" : ""} ${index === 2 ? "mr-8" : ""}`}
                >
                  <Card
                    title={card.title}
                    note={card.note}
                    time={card.time}
                    questions={card.questions}
                    strk={card.strk}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
