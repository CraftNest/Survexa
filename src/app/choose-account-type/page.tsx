"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, FileSpreadsheet, Wallet2, Sparkles } from "lucide-react";
import { AccountType, AccountTypeCard } from "@/components/account-type/account-type-card";

export default function ChooseAccountTypePage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<AccountType | null>(null);

  const handleContinue = () => {
    if (!selectedType) return;
    if (selectedType === "creator") {
      router.push("/create-account/surveys");
    } else {
      router.push("/create-account/respondent");
    }
  };

  return (
    <main className="relative min-h-screen bg-bg-dark text-white flex flex-col justify-between overflow-hidden">
      {/* Background gradients matching Survexa theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-purple/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-primary-purple/10 blur-[100px] rounded-full" />
      </div>

      {/* Top bar with back navigation and branding */}
      <header className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-sm text-text-gray hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link href="/" className="text-xl font-bold tracking-tight">
          Survexa<span className="text-primary-purple">.</span>
        </Link>
      </header>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 max-w-4xl flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-purple/15 border border-primary-purple/30 text-xs font-medium text-primary-purple-light">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Step 1 of 2: Onboarding</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Choose Your <span className="text-primary-purple">Account Type</span>
          </h1>
          <p className="text-text-gray text-sm sm:text-base max-w-lg mx-auto">
            Select how you would like to participate in the Survexa decentralized research ecosystem.
          </p>
        </motion.div>

        {/* Two selectable cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          <AccountTypeCard
            type="creator"
            title="Create Surveys & Get Insights"
            badge="Researcher / Creator"
            description="Publish verified research campaigns, set token rewards, and collect high-integrity data from targeted web3 audiences."
            features={[
              "AI-assisted survey builder",
              "Automated on-chain payout escrow",
              "Real-time analytics and export",
            ]}
            icon={FileSpreadsheet}
            isSelected={selectedType === "creator"}
            onSelect={setSelectedType}
          />

          <AccountTypeCard
            type="respondent"
            title="Take Surveys & Earn Money"
            badge="Survey Taker / Respondent"
            description="Participate in active surveys, share your genuine opinions, and earn instant token rewards deposited to your wallet."
            features={[
              "Instant wallet micro-rewards",
              "Personalized survey feed",
              "Zero personal data leakage (zk-verified)",
            ]}
            icon={Wallet2}
            isSelected={selectedType === "respondent"}
            onSelect={setSelectedType}
          />
        </div>

        {/* Action button */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleContinue}
            disabled={!selectedType}
            className={`w-full sm:w-auto min-w-[220px] px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
              selectedType
                ? "bg-primary-purple hover:bg-primary-purple-light text-white shadow-lg shadow-primary-purple/30 cursor-pointer"
                : "bg-bg-card/70 text-text-gray-dark border border-border-gray cursor-not-allowed opacity-60"
            }`}
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer minimal info */}
      <footer className="relative z-10 py-6 text-center text-xs text-text-gray-dark border-t border-border-gray/30">
        Survexa decentralized survey protocol © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
