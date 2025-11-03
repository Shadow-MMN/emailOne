"use client";
import { stepThreeCardConstants } from "@/constants";
import StepThreeCard from "../sub/StepThreeCard";
import { useRef } from "react";

const StepThreeAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  return (
    <div
      ref={containerRef}
      className="h-full flex items-center justify-center gap-6" // ⬅ flex row
    >
      {stepThreeCardConstants.map((card, index) => {
        return (
          <StepThreeCard
            key={index}
            text={card.text}
            bgColor={card.bgColor}
            tilt={index}
            containerRef={containerRef}
          />
        );
      })}
    </div>
  );
};

export default StepThreeAnimation;
