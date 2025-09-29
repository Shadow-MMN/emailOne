"use client";
import { paginNumbers } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const SearchResults = () => {
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
    <div className="max-w-[1008px] mx-auto mt-4">
      <div className=" flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/Result.png" alt="Result" width={490} height={500} />
          <Image src="/Result.png" alt="Result" width={490} height={500} />
          <Image src="/Result.png" alt="Result" width={490} height={500} />
          <Image src="/Result.png" alt="Result" width={490} height={500} />
        </div>
      </div>
      <div className="border-t border-[#C1C0BFB2] flex items-center justify-between px-4 py-3 my-6">
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
    </div>
  );
};

export default SearchResults;
