"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import TestimonialCard from "./TestimonialCard";
import { testimonies } from "@/constants";

const TestimonalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Carousel Container */}
      <div className="relative w-full max-w-[1008px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonies.map((item, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="border-t mx-auto max-w-[1008px] border-[#C1C0BFB2] flex items-center justify-between px-4 py-3 my-6">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 hover:opacity-80 transition"
        >
          <IoIosArrowRoundBack className="size-6" /> Previous
        </button>

        <div className="flex items-center gap-3">
          {testimonies.map((_, idx) => (
            <button
              onClick={() => setCurrentIndex(idx)}
              key={idx}
              className={`py-2 px-3 rounded-lg ${
                idx === currentIndex ? "bg-[#C1C0BFB2]" : ""
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex items-center gap-1 hover:opacity-80 transition"
        >
          Next <IoIosArrowRoundForward className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonalCarousel;
