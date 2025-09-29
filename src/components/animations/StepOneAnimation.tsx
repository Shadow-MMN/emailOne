"use client";
import { motion } from "framer-motion";
import StepOneCard from "../sub/StepOneCard";

const cardTexts: string[] = ["DV", "MV", "CV"];

const StepOneAnimation = () => {
  return (
    <motion.div className="w-full max-h-full flex items-center justify-center relative border-b-blue-700">
      {cardTexts.map((cardText, index) => (
        <motion.div
          key={index}
          className="transform translate-y-20 z-30 sticky top-0"
        >
          <StepOneCard text={cardText} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StepOneAnimation;
