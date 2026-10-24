"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Zap, Cpu, Globe, Award, CheckCircle } from "lucide-react";

export interface TrustProofItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  stat: string;
  statLabel: string;
  highlights: string[];
}

export const TRUST_PROOFS: TrustProofItem[] = [
  {
    id: "verified-respondents",
    title: "Verified Respondents",
    tagline: "Cryptographic Identity Layer",
    description:
      "Every respondent is authenticated with Sybil-resistant cryptographic proofs and wallet reputation scores, eliminating bot farms and duplicates.",
    icon: ShieldCheck,
    stat: "100%",
    statLabel: "Sybil Resistant",
    highlights: [
      "StarkNet onchain activity check",
      "Gitcoin Passport / Proof of Humanity",
      "Zero bot / automated script leaks",
    ],
  },
  {
    id: "instant-payouts",
    title: "Instant Payouts",
    tagline: "Automated Escrow Protocol",
    description:
      "Rewards are locked in auditable smart contract escrows. The moment a submission passes validation, tokens are released in seconds directly to taker wallets.",
    icon: Zap,
    stat: "< 2.4s",
    statLabel: "Payout Finality",
    highlights: [
      "Multi-token support (USDC, STRK)",
      "Non-custodial smart contract escrow",
      "Gas-optimized StarkNet execution",
    ],
  },
  {
    id: "high-quality-data",
    title: "High-Quality Data",
    tagline: "AI & Statistical Verification",
    description:
      "Automated quality guardrails score respondent dwell time, open-ended response depth, consistency across cross-checking prompts, and anomaly detection.",
    icon: Cpu,
    stat: "99.4%",
    statLabel: "Data Validity Rate",
    highlights: [
      "Dwell time & speed-reading alerts",
      "Semantic coherence analysis",
      "Automatic junk response purging",
    ],
  },
  {
    id: "global-reach",
    title: "Global Reach",
    tagline: "150+ Countries Connected",
    description:
      "Access a borderless, decentralized pool of specialized builders, crypto natives, and global consumers without regional banking roadblocks.",
    icon: Globe,
    stat: "150+",
    statLabel: "Countries Active",
    highlights: [
      "Borderless permissionless access",
      "Multilingual survey capabilities",
      "Localized demographic segmentation",
    ],
  },
];

export const PLATFORM_STATS = [
  { label: "Total Surveys Completed", value: "78,400+" },
  { label: "Cumulative Rewards Distributed", value: "$340,000+" },
  { label: "Active Verified Contributors", value: "34,200+" },
  { label: "Average Settlement Time", value: "1.8 sec" },
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const TrustProof = () => {
  return (
    <section
      id="trust-proof"
      aria-label="Platform Trust and Security Proofs"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Decorative ambient backdrop */}
      <div
        className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-md text-xs font-semibold tracking-wide uppercase text-primary">
          <Award className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
          <span>Trust & Proof Infrastructure</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-manrope">
          Trusted by decentralized teams and modern{" "}
          <span className="bg-gradient-to-r from-primary via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            product researchers
          </span>
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Traditional web2 survey panels are riddled with bots, click farms, and
          weeks-long payout delays. Survexa replaces black boxes with
          cryptographic guarantees, onchain escrows, and AI validation.
        </p>
      </div>

      {/* 4 Proof Pillars Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {TRUST_PROOFS.map((proof) => {
          const Icon = proof.icon;
          return (
            <motion.article
              key={proof.id}
              variants={cardVariants}
              className="group relative rounded-2xl p-6 bg-card/50 hover:bg-card/85 border border-border/40 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="space-y-4">
                {/* Icon & Stat */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-secondary/80 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-extrabold text-foreground tracking-tight">
                      {proof.stat}
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {proof.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {proof.title}
                  </h3>
                  <p className="text-xs font-medium text-primary/80 mt-0.5">
                    {proof.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {proof.description}
                </p>
              </div>

              {/* Highlights checklist */}
              <div className="pt-4 mt-6 border-t border-border/30 space-y-2">
                {proof.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-[11px] text-muted-foreground group-hover:text-foreground/90 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Proof Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 p-6 sm:p-8 rounded-2xl bg-secondary/30 border border-border/40 backdrop-blur-sm"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-border/30">
          {PLATFORM_STATS.map((stat, idx) => (
            <div key={idx} className={idx > 0 ? "pt-4 md:pt-0" : ""}>
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustProof;
