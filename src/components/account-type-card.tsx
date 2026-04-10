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
        "group relative flex flex-col items-center gap-4 rounded-2xl border p-8 text-center transition-all duration-300 cursor-pointer",
        "hover:border-primary-purple/60 hover:shadow-[0_0_30px_rgba(144,17,255,0.15)]",
        "md:p-10 lg:p-12",
        selected
          ? "border-primary-purple bg-primary-purple/10 shadow-[0_0_40px_rgba(144,17,255,0.2)]"
          : "border-border-gray bg-bg-card/50"
      )}
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300",
          selected
            ? "bg-primary-purple text-white"
            : "bg-bg-card text-primary-purple-light group-hover:bg-primary-purple/20"
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text-light md:text-2xl">
        {title}
      </h3>
      <p className="text-sm text-text-gray md:text-base">{description}</p>
    </button>
  );
}
