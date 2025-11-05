"use client";
import { ButtonProps } from "@/types";
import { motion } from "framer-motion";

const Button = ({ text, textColor, bgColor, color = "white" }: ButtonProps) => {
  return (
    <motion.div
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.1, transition: { duration: 0.6 } }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="relative radial-gradient circle"
      style={{
        background: `radial-gradient(
          circle at 50% 0%,
          rgba(250, 250, 250, 0.05) 0%,
          transparent 60%
        ), ${color}`,
      }}
    >
      <button
        className={`w-full h-full circle bg-black p-4 relative  ${bgColor}`}
      >
        <span
          className={`capitalize tracking-wide font-light h-full w-full relative linear-mask flex items-center gap-2 ${textColor}`}
        >
          {text}
        </span>
      </button>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay circle" />
    </motion.div>
  );
};

export default Button;
