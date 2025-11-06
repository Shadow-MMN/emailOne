"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import TestimonialCard from "./TestimonialCard";
import { testimonies } from "@/constants";

const TestimonialCarousel = () => {
  const [currentPagin, setCurrentPagin] = useState<number>(1);

  const handlePrev = (): void => {
    if (currentPagin === 1) {
      setCurrentPagin(testimonies.length);
    } else {
      setCurrentPagin((prev) => prev - 1);
    }
  };

  const handleNext = (): void => {
    if (currentPagin === testimonies.length) {
      setCurrentPagin(1);
    } else {
      setCurrentPagin((prev) => prev + 1);
    }
  };

  const currentTestimonial = testimonies[currentPagin - 1];

  return (
    <>
      <div className="transition-opacity duration-300">
        <TestimonialCard {...currentTestimonial} />
      </div>

      <div className="border-t mx-auto max-w-[1008px] border-[#C1C0BFB2] flex items-center justify-between px-4 py-3 my-6">
        <button
          onClick={handlePrev}
          className="flex gap-1 items-center hover:opacity-70 transition-opacity"
        >
          <IoIosArrowRoundBack className="size-6" /> Previous
        </button>
        <div className="flex items-center gap-3">
          {testimonies.map((_, index) => (
            <button
              onClick={() => setCurrentPagin(index + 1)}
              key={index + 1}
              className={`py-2 px-3 rounded-lg transition-colors ${
                index + 1 === currentPagin
                  ? "bg-[#C1C0BFB2]"
                  : "hover:bg-[#C1C0BFB2]/50"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="flex gap-1 items-center hover:opacity-70 transition-opacity"
        >
          Next <IoIosArrowRoundForward className="size-6" />
        </button>
      </div>
    </>
  );
};

export default TestimonialCarousel;
