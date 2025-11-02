"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const StepTwoAnimation = () => {
  return (
    <div className="flex items-center justify-center h-full">
      {/* Outer Circle (glow + pulse) */}
      <motion.div
        className="bg-[#fbefe5] rounded-full flex items-center justify-center p-4 my-shadow"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 30px 10px rgba(67,39,17,0.5), 0 0 60px 20px rgba(67,39,17,0.3)",
            "0 0 50px 20px rgba(67,39,17,0.7), 0 0 100px 40px rgba(67,39,17,0.4)",
            "0 0 30px 10px rgba(67,39,17,0.5), 0 0 60px 20px rgba(67,39,17,0.3)",
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <motion.div
          className="bg-[#f2c095] rounded-full flex items-center justify-center p-4"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
        >
          <motion.div
            className="bg-[#e56b01] rounded-full flex items-center justify-center p-4"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <Image src="/figma.svg" alt="Figma icon" width={30} height={30} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StepTwoAnimation;
