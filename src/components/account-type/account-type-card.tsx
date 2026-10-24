"use client";

import React from "react";
import { CheckCircle2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccountType = "creator" | "respondent";

export interface AccountTypeCardProps {
  type: AccountType;
  title: string;
  badge: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  isSelected: boolean;
  onSelect: (type: AccountType) => void;
  className?: string;
}

export function AccountTypeCard({
  type,
  title,
  badge,
  description,
  features,
  icon: Icon,
  isSelected,
  onSelect,
  className,
}: AccountTypeCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      onClick={() => onSelect(type)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(type);
        }
      }}
      className={cn(
        "relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer text-left select-none outline-none focus-visible:ring-2 focus-visible:ring-primary-purple",
        isSelected
          ? "border-primary-purple bg-bg-card shadow-[0_0_30px_rgba(144,17,255,0.3)] ring-1 ring-primary-purple/50 scale-[1.02]"
          : "border-border-gray bg-bg-darker/80 hover:border-border-purple/60 hover:bg-bg-darker hover:shadow-[0_0_15px_rgba(144,17,255,0.1)]",
        className
      )}
    >
      {/* Selection indicator pill */}
      <div className="flex items-center justify-between mb-6">
        <div
          className={cn(
            "p-3 rounded-xl transition-colors duration-300",
            isSelected
              ? "bg-primary-purple text-white shadow-md shadow-primary-purple/40"
              : "bg-bg-card text-text-gray"
          )}
        >
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex items-center space-x-2">
          <span
            className={cn(
              "text-xs px-2.5 py-1 rounded-full font-medium transition-colors",
              isSelected
                ? "bg-primary-purple/20 text-primary-purple-light border border-primary-purple/40"
                : "bg-bg-dark text-text-gray-dark border border-border-gray"
            )}
          >
            {badge}
          </span>
          <div
            className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center transition-all",
              isSelected
                ? "text-primary-purple"
                : "text-text-gray-dark/40 border border-border-gray"
            )}
          >
            {isSelected ? (
              <CheckCircle2 className="w-5 h-5 fill-primary-purple text-white" />
            ) : null}
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-2 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-text-gray leading-relaxed">
          {description}
        </p>
      </div>

      {/* Feature bullets */}
      <div className="space-y-2.5 pt-4 border-t border-border-gray/50">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-text-gray-alt">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-purple" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
