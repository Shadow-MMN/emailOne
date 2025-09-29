"use client";
import {
  navbarButtonVariants,
  navbarMobileItemVariants,
  navbarMobileMenuVariants,
  navLinks,
} from "@/constants";
import { Position } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import Button from "./sub/Button";

export default function NavBar() {
  const MotionLink = motion.create(Link);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Enhanced scroll detection for navbar background changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    updatePosition(e.currentTarget);
  };

  const handleFocus = (e: React.FocusEvent<HTMLLIElement>) => {
    updatePosition(e.currentTarget);
  };

  const updatePosition = (el: HTMLLIElement) => {
    const ul = ulRef.current;
    if (!el || !ul) return;

    const elRect = el.getBoundingClientRect();
    const ulRect = ul.getBoundingClientRect();

    setPosition({
      left: elRect.left - ulRect.left,
      width: elRect.width,
      opacity: 1,
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,

        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,

        backdropFilter: { duration: 0.3 },
      }}
      className="sticky top-0 md:top-5 z-50"
    >
      {/*Desktop View */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="hidden md:flex items-center max-w-[1072px] h-[96px] mx-auto justify-between outline-border circle px-8 mt-12 shadow-2xl"
      >
        <MotionLink
          variants={navbarButtonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="tap"
          className="font-semibold text-2xl text-[#1C1C25] circle px-4 py-2 transition-colors duration-300"
          href="/"
        >
          <motion.span
            whileHover={{
              backgroundImage: "linear-gradient(45deg, #000, #333)",
              color: "transparent",
            }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
            transition={{ duration: 0.3 }}
          >
            EmailOne
          </motion.span>
        </MotionLink>

        <ul
          ref={ulRef}
          onMouseLeave={() => setPosition((p) => ({ ...p, opacity: 0 }))}
          className="flex md:gap-4 lg:gap-8 xl:gap-16 items-center relative"
        >
          {navLinks.map((navlink, idx) => (
            <motion.li
              key={navlink.name ?? idx}
              onMouseEnter={handleMouseEnter}
              onFocus={handleFocus}
              whileHover={{ y: -2, color: "white" }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative z-10 select-none cursor-pointer"
            >
              <Link
                href={navlink.link}
                className="px-3 py-2 block relative z-10"
              >
                <motion.span
                  className="text-[#1C1C25] hover:text-white transition-colors duration-200 relative z-10 last:ml-4 ml-2"
                  style={{
                    color: "inherit",
                  }}
                >
                  {navlink.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}

          <Button
            text={"Get Started"}
            textColor="text-white"
            bgColor="bg-black"
          />

          {/* Enhanced highlight cursor */}
          <motion.li
            initial={{ left: 0, width: 0, opacity: 0 }}
            animate={{
              left: position.left,
              width: position.width,
              opacity: position.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
            className="absolute top-1/2 -translate-y-1/2 z-0 h-7 md:h-12 rounded-full pointer-events-none"
            style={{
              left: 0,
              background: "linear-gradient(45deg, #000, #333)",
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0,0,0,0.3)",
                  "0 0 30px rgba(0,0,0,0.5)",
                  "0 0 20px rgba(0,0,0,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full h-full rounded-full bg-gradient-to-r from-black via-gray-800 to-black"
            />
          </motion.li>
        </ul>
      </motion.div>

      {/*Mobile View */}
      <div className="flex relative md:hidden items-center justify-between py-3 px-6 mt-4">
        <MotionLink
          onClick={() => setIsMenuOpen(false)}
          whileHover={{
            scale: 1.05,
            color: "#000",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="font-semibold text-2xl text-[#1C1C25]"
          href="/"
        >
          <motion.span
            whileHover={{
              backgroundImage: "linear-gradient(45deg, #000, #666)",
              color: "transparent",
            }}
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            EmailOne
          </motion.span>
        </MotionLink>

        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{
            scale: 1.1,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
            rotate: -5,
          }}
          transition={{ duration: 0.2 }}
          className="relative z-20"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="cancel"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MdCancel className="size-10" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMenuSharp className="size-10" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0  bg-opacity-20 backdrop-blur-sm z-10"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Mobile Menu */}
              <motion.ul
                variants={navbarMobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-w-52 outline-border pt-4 rounded-xl absolute top-16 right-0 flex flex-col bg-white z-20 overflow-hidden"
                style={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                }}
              >
                {navLinks.map((navlink, index) => (
                  <motion.li
                    key={index}
                    variants={navbarMobileItemVariants}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{
                      backgroundColor: "#f8f9fa",
                      x: 8,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="px-4 border-b border-[#C1C0BFB2] py-4 cursor-pointer"
                  >
                    <Link href={navlink.link} className="block w-full">
                      {navlink.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={navbarMobileItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{
                    backgroundColor: "#333",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black rounded-b-xl text-center text-white p-4 cursor-pointer relative overflow-hidden"
                >
                  <button className="w-full relative z-10">Get Started</button>
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
                  />
                </motion.li>
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
