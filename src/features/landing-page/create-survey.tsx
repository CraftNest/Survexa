import { ArrowRightIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CreateSurvey = () => {
  const featureCards = [
    {
      text: "Get quick customer Insights",
      position: "top-0 left-[4.75rem]",
      width: "w-[17.875rem]",
    },
    {
      text: "Exportable Survey result",
      position: "top-[16.6875rem] left-[17.9375rem]",
      width: "w-[11.125rem]",
    },
    {
      text: "Create custom survey template",
      position: "top-[32.1875rem] left-0",
      width: "w-[17.875rem]",
    },
  ];

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

          {featureCards.map((feature, index) => (
            <Card
              key={`feature-${index}`}
              className={`flex flex-col ${feature.width} items-center gap-[2.3125rem] p-5 absolute ${feature.position} bg-bg-card rounded-xl overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className="relative self-stretch mt-[-0.0625rem] font-typography-paragraph-md-bold font-[number:var(--typography-paragraph-md-bold-font-weight)] text-text-light-alt text-[length:var(--typography-paragraph-md-bold-font-size)] tracking-[var(--typography-paragraph-md-bold-letter-spacing)] leading-[var(--typography-paragraph-md-bold-line-height)] [font-style:var(--typography-paragraph-md-bold-font-style)]">
                  {feature.text}
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
