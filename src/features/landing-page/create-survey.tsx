import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CreateSurvey = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<"creator" | "taker" | null>(null);

  const handleSelect = (type: "creator" | "taker") => {
    setSelected(type);
    if (type === "creator") {
      router.push("/create-account/surveys");
    } else {
      router.push("/create-account/respondent");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="mb-8 text-4xl font-bold text-white">
        Choose Your Account Type
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl w-full">
        {/* Survey Creator Card */}
        <Card
          className={`cursor-pointer transition-all duration-200 ${
            selected === "creator"
              ? "border-2 border-primary bg-primary/10 ring-2 ring-primary"
              : "border border-border-light hover:border-primary hover:ring-2 hover:ring-primary"
          }`}
          onClick={() => handleSelect("creator")}
        >
          <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Create Surveys & Get Insights
            </h2>
            <p className="text-center text-text-gray-alt">
              Build custom surveys, collect data, and gain actionable insights.
            </p>
            <Button
              variant="ghost"
              className="mt-4 flex items-center gap-2 text-white hover:text-primary"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Survey Taker Card */}
        <Card
          className={`cursor-pointer transition-all duration-200 ${
            selected === "taker"
              ? "border-2 border-primary bg-primary/10 ring-2 ring-primary"
              : "border border-border-light hover:border-primary hover:ring-2 hover:ring-primary"
          }`}
          onClick={() => handleSelect("taker")}
        >
          <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Take Surveys & Earn Money
            </h2>
            <p className="text-center text-text-gray-alt">
              Participate in surveys and earn rewards for your valuable
              feedback.
            </p>
            <Button
              variant="ghost"
              className="mt-4 flex items-center gap-2 text-white hover:text-primary"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};