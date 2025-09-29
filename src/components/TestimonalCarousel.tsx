"use client";
import { paginNumbers } from "@/constants";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import TestimonialCard from "./TestimonialCard";
const TestimonalCarousel = () => {
  const [currentPagin, setCurrentPagin] = useState<number>(1);
  const handlePrev = (): void => {
    if (currentPagin === 1) {
      setCurrentPagin(1);
    } else {
      setCurrentPagin((prev) => prev - 1);
    }
  };
  const handleNext = (): void => {
    if (currentPagin === 3) {
      setCurrentPagin(3);
    } else {
      setCurrentPagin((prev) => prev + 1);
    }
  };
  return (
    <>
      <TestimonialCard />

      <div className="border-t mx-auto max-w-[1008px] border-[#C1C0BFB2] flex items-center justify-between px-4 py-3 my-6">
        <button onClick={handlePrev} className="flex gap-1">
          <IoIosArrowRoundBack className="size-6" /> Previous
        </button>
        <div className="flex items-center gap-3">
          {paginNumbers.map((paginNumber) => (
            <button
              onClick={() => setCurrentPagin(paginNumber)}
              key={paginNumber}
              className={`py-2 px-3 rounded-lg ${
                paginNumber === currentPagin ? "bg-[#C1C0BFB2]" : ""
              }`}
            >
              {paginNumber}
            </button>
          ))}
        </div>
        <button onClick={handleNext} className="flex gap-1">
          Next <IoIosArrowRoundForward className="size-6" />
        </button>
      </div>
    </>
  );
};

export default TestimonalCarousel;
