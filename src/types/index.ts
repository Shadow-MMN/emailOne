import { ReactNode } from "react";

export interface NavLinks {
  name: string;
  link: string;
}
export interface QuestionAnswers {
  question: string;
  answer: string;
}
export interface Testimonies {
  testimony: string;
  username: string;
  occupation: string;
  imgSrc: string;
  rating: number;
  date: string;
}
export interface Position {
  left: number;
  width: number;
  opacity: number;
}

export interface MobileMenuVariants {
  hidden: {
    opacity: number;
    scale: number;
    y: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
  visible: {
    opacity: number;
    scale: number;
    y: number;
    transition: {
      duration: number;
      ease: string;
      staggerChildren: number;
    };
  };
  exit: {
    opacity: number;
    scale: number;
    y: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}
export interface MobileItemVariants {
  hidden: {
    opacity: number;
    x: number;
  };
  visible: {
    opacity: number;
    x: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}
export interface NavButtonVariants {
  idle: {
    scale: number;
    boxShadow: string;
  };
  hover: {
    scale: number;
    boxShadow: string;
    transition: {
      duration: number;
      ease: string;
    };
  };
  tap: {
    scale: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}

export interface ButtonProps {
  text: ReactNode | string;
  textColor: string;
  bgColor: string;
  color?: string;
}
