"use client";
import { IoMdAdd } from "react-icons/io";
import { HiMiniMinus } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";

const QuestionCard = ({
  initial,
  question,
  answer,
}: {
  initial: boolean;
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(initial);
  return (
    <div
      className={`max-w-[1008px] bg-[#FAFAFA] p-4 md:py-6 md:px-8 flex flex-col justify-between border border-[#C1C0BF4D] rounded-2xl overflow-hidden gap-5 ${
        isOpen ? "min-h-[183px]" : "h-[79px]"
      }`}
    >
      <div className="flex items-start md:items-center gap-2 md:gap-0 justify-between w-full">
        <h3 className="font-semibold text-xl text-[#050803]">{question}</h3>
        <button className="mt-2 md:mt-0" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiMiniMinus className="size-6" />
          ) : (
            <IoMdAdd className="size-6" />
          )}
        </button>
      </div>
      <p>{answer}</p>
      <Link href="faqs">Learn More</Link>
    </div>
  );
};

export default QuestionCard;
