"use client";
import { motion, AnimatePresence } from "framer-motion";
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
      className={`max-w-[1008px] bg-[#FAFAFA] p-4 md:py-6 md:px-8 flex flex-col justify-between border border-[#C1C0BF4D] rounded-2xl overflow-hidden gap-5 transition-all duration-300 ${
        isOpen ? "min-h-[183px]" : "h-[79px]"
      }`}
    >
      <div className="flex items-start md:items-center gap-2 md:gap-0 justify-between w-full">
        <h3 className="font-semibold text-xl text-[#050803]">{question}</h3>
        <motion.button
          className="mt-2 md:mt-0"
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <HiMiniMinus className="size-6" />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <IoMdAdd className="size-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-4">{answer}</p>
            <Link href="faqs" className="pointer ">
              Learn More
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionCard;
