"use client";
import { StepThreeCardType } from "@/types";
import React from "react";
import { motion } from "framer-motion";

const StepThreeCard = ({
  text,
  bgColor,
  containerRef,
  tilt,
}: StepThreeCardType & { tilt: number }) => {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      initial={{ rotate: tilt }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full flex items-center justify-center w-28 h-14 border-2 border-dashed border-neutral-300 cursor-grab"
      style={{
        backgroundColor: bgColor,
        color: "white",
        boxShadow: `0 0 25px ${bgColor}70`,
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <p className="font-semibold">{text}</p>
    </motion.div>
  );
};

export default StepThreeCard;
