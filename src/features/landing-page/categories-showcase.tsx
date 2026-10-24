"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Palette,
  TrendingUp,
  Award,
  BarChart3,
  Target,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "product-design",
    name: "Product Design",
    description:
      "UI/UX validation, interactive prototypes & feature usability benchmarks",
    icon: Palette,
    badge: "UX & Prototype",
  },
  {
    id: "market-strategy",
    name: "Market Strategy",
    description:
      "Go-to-market testing, pricing sensitivity & customer segment validation",
    icon: TrendingUp,
    badge: "GTM & Growth",
  },
  {
    id: "brand-perception",
    name: "Brand Perception",
    description:
      "Brand sentiment, net promoter scoring (NPS) & competitive positioning",
    icon: Award,
    badge: "Brand & Trust",
  },
  {
    id: "market-research",
    name: "Market Research",
    description:
      "Industry trends, consumer pain points & broad demographic surveys",
    icon: BarChart3,
    badge: "Insights & Data",
  },
  {
    id: "competition-analysis",
    name: "Competition Analysis",
    description:
      "Feature parity analysis, competitor switching triggers & moat auditing",
    icon: Target,
    badge: "Benchmarking",
  },
  {
    id: "event-planning",
    name: "Event Planning",
    description:
      "Attendee preferences, speaker ratings & post-conference satisfaction",
    icon: Calendar,
    badge: "Conferences & NPS",
  },
];

export const CategoriesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("product-design");

  return (
    <section
      id="categories"
      aria-label="Survey Categories Showcase"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-bg-dark text-white"
    >
      {/* Background Graphic with AAA Contrast Overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/bg-gradient.svg"
          alt=""
          fill
          className="object-cover opacity-25"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/95 via-bg-dark/85 to-bg-dark/98" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-purple/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-start space-y-10">
        {/* Upper Client Label */}
        <div className="flex items-center gap-2">
          <span
            data-testid="client-label"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-primary-purple-light bg-primary-purple/10 border border-primary-purple/30 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>CLIENT</span>
          </span>
        </div>

        {/* Main Heading & Intro */}
        <div className="max-w-3xl space-y-4">
          <h2
            data-testid="showcase-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-light leading-[1.15]"
          >
            Are you looking for user insights on your..
          </h2>
          <p className="text-text-gray text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Get rapid, targeted feedback from verified respondents tailored to
            your exact industry and project goals.
          </p>
        </div>

        {/* Categories Showcase: Mobile Horizontal Scrolling & Tablet/Desktop Grid */}
        <div className="w-full">
          {/* Mobile Scroll Prompt */}
          <div className="sm:hidden flex items-center justify-between text-xs text-text-gray-medium pb-2 px-1">
            <span>Scroll categories horizontally</span>
            <span aria-hidden="true">→</span>
          </div>

          <div
            data-testid="categories-list"
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 overflow-x-auto pb-4 sm:pb-0 scroll-smooth snap-x snap-mandatory focus:outline-none"
            role="tablist"
            aria-label="Survey Categories"
          >
            {CATEGORIES_DATA.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;

              return (
                <div
                  key={category.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isSelected}
                  data-testid={`category-card-${category.id}`}
                  onClick={() => setSelectedCategory(category.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedCategory(category.id);
                    }
                  }}
                  className={`snap-center shrink-0 w-[270px] sm:w-auto p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer select-none flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-purple-light ${
                    isSelected
                      ? "bg-bg-card/90 border-primary-purple/70 shadow-lg shadow-primary-purple/15 ring-1 ring-primary-purple/50 translate-y-[-2px]"
                      : "bg-bg-darker/70 hover:bg-bg-card/50 border-border-gray/50 hover:border-primary-purple/40 hover:translate-y-[-2px]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-primary-purple text-white shadow-md shadow-primary-purple/30"
                            : "bg-white/5 text-primary-purple-light group-hover:bg-primary-purple/20 group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-semibold text-text-gray-medium bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        {category.badge}
                      </span>
                    </div>

                    <div>
                      <h3
                        data-testid="category-name"
                        className="text-lg sm:text-xl font-bold text-text-light group-hover:text-primary-purple-light transition-colors"
                      >
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-gray mt-1.5 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-text-gray-medium">
                    <span className="font-medium">Explore insights</span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-primary-purple-light translate-x-1"
                          : "text-text-gray group-hover:translate-x-1 group-hover:text-primary-purple-light"
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Text Link CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="#create-survey"
            data-testid="create-survey-cta"
            className="group inline-flex items-center gap-2 text-primary-purple-light hover:text-white font-semibold text-base sm:text-lg transition-all duration-200 underline-offset-8 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-purple rounded-md cursor-pointer"
          >
            <span>Create a survey now</span>
            <span
              className="text-lg transition-transform duration-200 group-hover:translate-x-1.5"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;
