"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AccountTypeCard from "./components/account-type-card";

type AccountType = "creator" | "respondent" | null;

const SurveyCreatorIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9011FF"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const SurveyTakerIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9011FF"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function AccountTypeSelection() {
  const [selected, setSelected] = useState<AccountType>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (selected === "creator") {
      router.push("/create-account/surveys");
    } else if (selected === "respondent") {
      router.push("/create-account/respondent");
    }
  };

  return (
    <section className="relative min-h-screen bg-bg-dark text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-purple/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary-purple/5 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Choose Your Account Type
          </h1>
          <p className="text-text-gray text-base md:text-lg">
            Select how you want to use Survexa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AccountTypeCard
              title="Create Surveys & Get Insights"
              description="Design surveys, collect responses, and analyze data to gain valuable insights."
              icon={<SurveyCreatorIcon />}
              selected={selected === "creator"}
              onClick={() => setSelected("creator")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AccountTypeCard
              title="Take Surveys & Earn Money"
              description="Participate in surveys, share your opinions, and earn STRK tokens as rewards."
              icon={<SurveyTakerIcon />}
              selected={selected === "respondent"}
              onClick={() => setSelected("respondent")}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <button
            onClick={handleContinue}
            disabled={!selected}
            className="px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed bg-primary-purple text-white hover:bg-primary-purple-light hover:shadow-[0_0_20px_rgba(144,17,255,0.3)]"
          >
            Continue
          </button>
        </motion.div>
      </div>
    </section>
  );
}
