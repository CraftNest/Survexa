"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Coins,
  CreditCard,
  ShoppingBag,
  Layers,
  Smartphone,
  Bot,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  metrics: {
    respondents: string;
    avgTime: string;
    accuracy: string;
  };
  sampleQuestions: string[];
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "web3-defi",
    name: "Web3 & DeFi",
    subtitle: "Decentralized Protocols & DAOs",
    description:
      "Gather feedback on wallet connection UX, liquidity pool interfaces, tokenomics sentiment, and governance proposals from verified onchain users.",
    icon: Coins,
    tags: ["DeFi", "Smart Contracts", "StarkNet", "Sybil-Proof"],
    metrics: {
      respondents: "14.2k+",
      avgTime: "3.5 min",
      accuracy: "99.8%",
    },
    sampleQuestions: [
      "Wallet connection drop-off points",
      "Staking APR vs. lock-up willingness",
      "DEX swap routing clarity",
    ],
  },
  {
    id: "fintech",
    name: "FinTech & Payments",
    subtitle: "Global Financial Infrastructure",
    description:
      "Evaluate cross-border payment UX, KYC onboarding friction, biometric authentication trust, and crypto-fiat ramp experiences.",
    icon: CreditCard,
    tags: ["Payments", "Security", "KYC", "Ramps"],
    metrics: {
      respondents: "22.6k+",
      avgTime: "4.1 min",
      accuracy: "99.4%",
    },
    sampleQuestions: [
      "Checkout flow micro-abandonment",
      "Multi-currency conversion transparency",
      "Escrow dispute resolution preferences",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    subtitle: "Digital Retail & Marketplaces",
    description:
      "Validate product card conversions, cart checkout optimizations, loyalty reward incentives, and customer return experience perceptions.",
    icon: ShoppingBag,
    tags: ["Marketplaces", "Conversion", "Checkout", "Loyalty"],
    metrics: {
      respondents: "31.0k+",
      avgTime: "2.8 min",
      accuracy: "99.1%",
    },
    sampleQuestions: [
      "Flash sales countdown banner impact",
      "Shipping cost transparency thresholds",
      "Product filtering & search relevancy",
    ],
  },
  {
    id: "saas",
    name: "B2B SaaS",
    subtitle: "Enterprise & Productivity Cloud",
    description:
      "Audit self-serve onboarding funnels, seat-based pricing tolerance, feature adoption roadblocks, and team collaboration workflows.",
    icon: Layers,
    tags: ["Productivity", "Onboarding", "B2B Pricing", "Retention"],
    metrics: {
      respondents: "18.5k+",
      avgTime: "5.0 min",
      accuracy: "99.6%",
    },
    sampleQuestions: [
      "Workspace invite funnel bottlenecks",
      "API documentation ease of integration",
      "Annual vs monthly tier preference",
    ],
  },
  {
    id: "mobile-gaming",
    name: "Mobile & Apps",
    subtitle: "Consumer Apps & Play-to-Earn",
    description:
      "Test push notification fatigue, mobile gesture responsiveness, in-game economy balancing, and app store visual asset appeal.",
    icon: Smartphone,
    tags: ["iOS & Android", "Engagement", "Game Economy", "Push UX"],
    metrics: {
      respondents: "27.4k+",
      avgTime: "2.5 min",
      accuracy: "98.9%",
    },
    sampleQuestions: [
      "First 60-second interactive tutorial clarity",
      "In-app purchase price elasticity",
      "Daily check-in streak motivation",
    ],
  },
  {
    id: "ai-agents",
    name: "AI & Autonomous Tools",
    subtitle: "Agentic Systems & Machine Learning",
    description:
      "Assess prompt interface ergonomics, synthetic output trustworthiness, agent autonomy boundaries, and developer tooling feedback.",
    icon: Bot,
    tags: ["Agents", "LLMs", "Automation", "Developer UX"],
    metrics: {
      respondents: "11.8k+",
      avgTime: "4.4 min",
      accuracy: "99.7%",
    },
    sampleQuestions: [
      "AI code completion confidence scoring",
      "Multi-agent task delegation oversight",
      "Hallucination tolerance benchmarks",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const CategoriesShowcase = () => {
  const [selectedId, setSelectedId] = useState<string>("web3-defi");
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCategories =
    activeFilter === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) =>
          c.tags.some((t) =>
            t.toLowerCase().includes(activeFilter.toLowerCase()),
          ),
        );

  const selectedCategory =
    CATEGORIES.find((c) => c.id === selectedId) || CATEGORIES[0];

  return (
    <section
      id="categories-showcase"
      aria-label="Survey Categories Showcase"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Decorative gradient glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60 bg-card/60 backdrop-blur-md text-xs font-semibold tracking-wide uppercase text-primary">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Clients & Research Domains</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-manrope">
          Looking for high-signal insights on your{" "}
          <span className="bg-gradient-to-r from-primary via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            next big product?
          </span>
        </h2>

        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          From decentralized finance protocols to consumer apps, deploy targeted
          surveys to verified, fraud-free participants with instant smart
          contract reward settlement.
        </p>

        {/* Category filter pills */}
        <div
          role="tablist"
          aria-label="Filter categories by tag"
          className="flex flex-wrap items-center justify-center gap-2 pt-4"
        >
          {[
            "all",
            "DeFi",
            "Payments",
            "Conversion",
            "Onboarding",
            "Agents",
          ].map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                    : "bg-card/40 text-muted-foreground border-border/40 hover:border-border hover:text-foreground"
                }`}
              >
                {tag === "all" ? "All Categories" : tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedId === category.id;

          return (
            <motion.article
              key={category.id}
              variants={cardVariants}
              onClick={() => setSelectedId(category.id)}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "bg-card border-primary/70 shadow-xl shadow-primary/10 ring-1 ring-primary/40 -translate-y-1"
                  : "bg-card/40 hover:bg-card/80 border-border/40 hover:border-border hover:-translate-y-0.5"
              }`}
            >
              {/* Header inside card */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-secondary text-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    }`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <span className="text-[11px] font-semibold text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-full border border-border/30">
                    {category.metrics.respondents} takers
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {category.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {category.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {category.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground border border-border/20"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics and Action */}
              <div className="pt-6 mt-6 border-t border-border/30 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Clock
                      className="w-3.5 h-3.5 text-primary"
                      aria-hidden="true"
                    />
                    <span>Avg: {category.metrics.avgTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-emerald-400"
                      aria-hidden="true"
                    />
                    <span>{category.metrics.accuracy} valid</span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label={`Explore ${category.name} survey templates`}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                      : "bg-secondary/70 hover:bg-secondary text-foreground"
                  }`}
                >
                  <span>Explore Category</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${
                      isSelected ? "translate-x-0.5" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Selected Category Deep Dive Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-card/70 border border-primary/30 backdrop-blur-md relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Active Survey Templates for {selectedCategory.name}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                Ready to launch high-fidelity research in minutes?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Typical questions explored by research teams in this domain:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {selectedCategory.sampleQuestions.map((q, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs text-foreground/90 bg-secondary/50 px-3 py-2 rounded-lg border border-border/20"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="truncate">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <a
                href="#create-survey"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Launch {selectedCategory.name} Survey</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default CategoriesShowcase;
