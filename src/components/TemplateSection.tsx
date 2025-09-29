"use client";
import { categories } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TemplateSection = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  return (
    <section className="max-h-[1100px] overflow-hidden mt-16">
      <div className="max-w-[1072px] mx-auto flex justify-between md:gap-28 md:justify-start flex-col md:flex-row items-center">
        <h2 className="font-semibold text-[37px] text-nowrap">
          Featured Templates
        </h2>
        <p className="text-center md:text-start">
          Elevate your SaaS, Fintech, Ecommerce, Agrictech, and Edutech
          communications with captivating designs meticulously crafted for
          success.
        </p>
      </div>
      <div className="mx-auto max-w-[1072px] flex justify-center md:justify-start gap-2 flex-wrap my-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setCurrentCategory(category)}
            className={`circle outline-border px-7 py-[19px] ${
              currentCategory === category ? "bg-black text-white" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mx-auto max-w-[1072px] mt-6 flex items-center md:justify-between justify-center flex-col gap-4 md:gap-0 md:flex-row">
        <p className=" text-center md:text-start ">
          Engage your users with modern and professional SaaS email templates
          designed to convert.
        </p>
        <Link href="template" className="text-orange-300">
          See all
        </Link>
      </div>
      <div className="max-w-[1072px] mx-auto mt-4 flex items-center justify-center md:justify-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src="/Result.png" alt="Result" width={490} height={500} />
          <Image src="/Result.png" alt="Result" width={490} height={500} />
          <Image src="/Result.png" alt="Result" width={490} height={500} />
          <Image src="/Result.png" alt="Result" width={490} height={500} />
        </div>
      </div>
    </section>
  );
};

export default TemplateSection;
