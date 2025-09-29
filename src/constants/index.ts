import {
  MobileItemVariants,
  MobileMenuVariants,
  NavButtonVariants,
  NavLinks,
  QuestionAnswers,
  Testimonies,
} from "@/types";
import { Variants } from "framer-motion";

export const categories: string[] = [
  "All",
  "SaaS",
  "Fintech",
  "Ecommerce",
  "Agrictech",
  "Edutech",
];
export const features: string[] = [
  "💡 Diverse Niche Temaplates",
  "🚀 Effortless HTML and MJML implementation",
  "🤝 Dedicated Support",
  "🖋 Easy Customization",
  "💰 Flexible Pricing",
  "💫 Transformative Templates",
];

export const navLinks: NavLinks[] = [
  { name: "Temaplate", link: "template" },
  { name: "How it works", link: "overview" },
  { name: "Pricing", link: "pricing" },
  { name: "FAQs", link: "faqs" },
];

export const firstPicingPerks: string[] = [
  "Design access",
  "HTML and MJML Implementation",
  "Standard support for 1 month",
];
export const secondPricingPerks: string[] = [
  "HTML and MJML implementation",
  "Standard Support for 6 months",
  "Access to template updates",
];
export const thirdPricingPerks: string[] = [
  "Lifetime standard support",
  "Access to new designs for each template",
  "Exclusive access to new sector/niche email template designs",
];

export const paginNumbers: number[] = [1, 2, 3];
export const footerTexts: string[] = [
  "2025 Your Company. All rights reserved",
  "Privacy & Policy",
  "Support",
  "Terms of Service",
];

export const questionsAnswers: QuestionAnswers[] = [
  {
    question: `How do I access the email templates after purchase?`,
    answer: `A: After completing your purchase, you'll receive a confirmation email with a link to our secure template library. Simply log in, and you'll have instant access to your chosen templates.`,
  },
  {
    question: `Can I customize the templates to match my brand's colors and style?`,
    answer: `A: Absolutely! Our templates are designed with customization in mind. Use Figma to tweak colors, fonts, and layouts until the template aligns perfectly with your brand identity.`,
  },
  {
    question: `Are the templates compatible with all email marketing platforms?`,
    answer: `A: Yes, our templates are built with compatibility in mind. You can easily implement them using HTML and CSS on most major email marketing platforms. For an even smoother experience, our templates are also MJML compatible.`,
  },
  {
    question: `How often are new templates added to the library?`,
    answer: `A: We add fresh templates every month, covering diverse niches and trends. This ensures you always have access to modern, high-converting designs.`,
  },
  {
    question: `What if I need help using or customizing a template?`,
    answer: `A: No worries! Our dedicated support team is here to guide you. You can reach out anytime for assistance with implementation, customization, or troubleshooting.`,
  },
];

export const testimonies: Testimonies[] = [
  {
    testimony: `The SaaS email templates from EmailOne have been a game-changer for us. Visually appealing and conversion-focused, they've significantly boosted our user engagement. It's like having a design team on standby!`,
    username: "John Philips",
    occupation: "CEO of TechVibes Inc",
    imgSrc: "/testimonialPic1.png",
    rating: 5,
    date: `January 10, 2024`,
  },
  {
    testimony: `We were able to launch campaigns much faster using these templates. The customization options saved us hours of design work, and the results have been incredible.`,
    username: "Maria Lopez",
    occupation: "Marketing Director at GrowthHub",
    imgSrc: "/testimonialPic2.png",
    rating: 4,
    date: `February 22, 2024`,
  },
  {
    testimony: `Finally, email templates that look professional and actually convert! Our open and click-through rates have improved noticeably since switching to EmailOne.`,
    username: "David Chen",
    occupation: "Founder of EcomEdge",
    imgSrc: "/testimonialPic3.png",
    rating: 5,
    date: `March 15, 2024`,
  },
];

// Animation variants for mobile menu
export const navbarMobileMenuVariants: Variants<MobileMenuVariants> = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const navbarMobileItemVariants: Variants<MobileItemVariants> = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Enhanced button variants
export const navbarButtonVariants: Variants<NavButtonVariants> = {
  idle: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 25px rgba(0,0,0,0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};
