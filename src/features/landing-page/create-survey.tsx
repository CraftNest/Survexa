import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export const CreateSurvey = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    {
      label: "Create Surveys & Get Insights",
      route: "/create-account/surveys",
    },
    {
      label: "Take Surveys & Earn Money",
      route: "/create-account/respondent",
    },
  ];

  const handleSelect = (index: number, route: string) => {
    setSelected(index);
    router.push(route);
  };

  return (
    <div className="flex max-w-7xl w-full mx-auto items-center gap-16 relative">
      <div className="relative flex-1 grow h-[38.6875rem]">
        <div className="relative w-[29.0625rem] h-[38.6875rem] left-[-0.1875rem]">
          <Image
            className="absolute w-[23.3125rem] h-[33.5rem] top-[2.6875rem] left-[2.4375rem]"
            alt="Woman with laptop"
            src="/woman-with-laptop.svg"
            width={373}
            height={536}
            priority
          />

          {options.map((option, index) => (
            <Card
              key={`option-${index}`}
              className={`flex flex-col items-center gap-4 p-6 cursor-pointer transition-colors duration-200 rounded-xl ${
                selected === index
                  ? "border-2 border-blue-500 bg-blue-50"
                  : "border border-transparent hover:border-blue-300"
              }`}
              onClick={() => handleSelect(index, option.route)}
            >
              <CardContent className="p-0">
                <div className="text-center font-semibold text-lg">
                  {option.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="gap-16 inline-flex flex-col items-start relative flex-[0_0_auto]">
        <div className="gap-8 inline-flex flex-col items-start relative flex-[0_0_auto]">
          <h1 className="relative w-[44.125rem] mt-[-0.0625rem] [font-family:'Manrope',Helvetica] font-bold text-white text-[4rem] tracking-[0] leading-[5rem]">
            Your single platform for all survey and research needs.
          </h1>

          <p className="relative w-[39.4375rem] [font-family:'Manrope',Helvetica] font-normal text-text-gray-alt text-xl tracking-[0] leading-8">
            Survexa helps you ask the right questions and get powerful insights
            to delight customers and build happier teams. Best part? You
            don&#39;t pay platform fees - only reward survey participants
            through our cost-efficient Starknet system.
          </p>
        </div>

        <Button className="inline-flex items-center justify-center gap-2 px-4 py-3.5 relative flex-[0_0_auto] rounded-xl border border-solid border-border-light bg-transparent">
          <span className="relative w-fit [font-family:'Manrope',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Create a Survey
          </span>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};