"use client";
import { features } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./sub/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.section
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <div className="max-w-[900px] mx-auto mt-14 md:mt-28">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-[36px] md:text-[54px] font-semibold leading-[75.6px] text-center"
        >
          Transform Your Email Marketing with Tailored Template Brilliance
        </motion.h1>
        <p className="text-center mt-4">
          Our meticulously crafted email templates are brilliantly tailored and
          designed to transform your marketing strategy, ensuring every message
          captivates and converts.
        </p>
        <div className="flex items-center justify-center gap-3 my-8">
          <Link href="template">
            <Button
              text={
                <>
                  Browse Template <IoIosArrowRoundForward className="size-6" />
                </>
              }
              textColor="text-white"
              bgColor="bg-orange-300"
            />
          </Link>

          <Button
            text={"Learn More"}
            textColor="text-white"
            bgColor="bg-black"
          />
        </div>
        <div className="flex flex-col gap-3 items-center justify-center mb-8">
          <ul className="flex flex-col md:flex-row justify-center gap-3 md:gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <ul className="flex flex-col md:flex-row -ml-28 md:-ml-0 justify-center gap-3 md:gap-6">
            {features.slice(3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        src="/heroSection.png"
        alt="Three templates"
        width={1440}
        height={1150}
        className="mx-auto w-full"
      />
    </motion.section>
  );
};

export default Hero;
