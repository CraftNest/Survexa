"use client";

import { cn } from "@/lib/utils";

interface AccountTypeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function AccountTypeCard({
  title,
  description,
  icon,
  selected,
  onClick,
}: AccountTypeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center gap-4 rounded-2xl border-2 p-8 text-center transition-all duration-300 cursor-pointer",
        "hover:border-primary-purple/60 hover:shadow-[0_0_30px_rgba(144,17,255,0.15)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-purple/50",
        selected
          ? "border-primary-purple bg-primary-purple/10 shadow-[0_0_40px_rgba(144,17,255,0.2)]"
          : "border-border-gray bg-bg-card/50"
      )}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300",
          selected ? "bg-primary-purple/20" : "bg-bg-card"
        )}
      >
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-text-light">{title}</h3>
        <p className="text-sm text-text-gray">{description}</p>
      </div>
      <div
        className={cn(
          "absolute top-4 right-4 h-5 w-5 rounded-full border-2 transition-all duration-300",
          selected
            ? "border-primary-purple bg-primary-purple"
            : "border-text-gray-dark"
        )}
      >
        {selected && (
          <svg
            className="h-full w-full text-white p-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </button>
  );
}
