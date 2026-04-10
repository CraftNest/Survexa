"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import AccountTypeCard from "@/components/account-type-card";

type AccountType = "creator" | "respondent" | null;

export default function CreateAccountPage() {
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-dark px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold text-text-light md:text-4xl">
            Choose Your Account Type
          </h1>
          <p className="text-text-gray">
            Select how you&apos;d like to use Survexa
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AccountTypeCard
              title="Create Surveys & Get Insights"
              description="Design and publish surveys, analyze responses, and gain valuable insights from your audience."
              selected={selected === "creator"}
              onClick={() => setSelected("creator")}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                </svg>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AccountTypeCard
              title="Take Surveys & Earn Money"
              description="Participate in surveys, share your opinions, and earn rewards for your valuable feedback."
              selected={selected === "respondent"}
              onClick={() => setSelected("respondent")}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
              }
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selected}
            className="rounded-full bg-primary-purple px-10 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-primary-purple-light disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
