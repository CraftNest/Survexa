import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface AccountTypeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
}

export const AccountTypeCard = ({
  title,
  description,
  icon: Icon,
  isSelected,
  onClick,
}: AccountTypeCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative cursor-pointer group transition-all duration-300 p-6 rounded-2xl border-2 w-full max-w-sm",
        "flex flex-col items-center text-center gap-4",
        "hover:border-primary/50 hover:bg-primary/5",
        isSelected 
          ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.3)]" 
          : "border-muted bg-card"
      )}
    >
      <div className={cn(
        "p-4 rounded-full transition-colors",
        isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-primary"
      )}>
        <Icon size={32} />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {isSelected && (
        <div className="absolute top-3 right-3">
          <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
        </div>
      )}
    </div>
  );
};
