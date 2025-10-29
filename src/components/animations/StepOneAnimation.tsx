"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StepOneCard from "../sub/StepOneCard";

const cardTexts: string[] = ["DV", "MV", "CV"];

const StepOneAnimation = () => {
  const [cards, setCards] = useState(cardTexts);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCards((prev) => {
          const newArr = [...prev];
          const first = newArr.shift();
          if (first) newArr.push(first);
          return newArr;
        });
        setAnimating(false);
      }, 600);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {cards.map((text, index) => {
        const isTop = index === 0;
        const isLast = index === cards.length - 1;

        return (
          <motion.div
            key={`${text}-${index}`}
            className="absolute"
            initial={false}
            animate={
              isTop && animating
                ? { x: "120%", opacity: 0 }
                : isLast && animating
                ? { x: 0, opacity: 1 }
                : { x: 0, opacity: 1 }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              zIndex: cards.length - index,
              transform: `translateY(${index * 10}px)`,
              x: isLast && !animating ? "-120%" : 0,
            }}
          >
            <StepOneCard text={text} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default StepOneAnimation;
