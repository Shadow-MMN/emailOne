"use client";
import { categories } from "@/constants";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  return (
    <div className="max-w-[1008px] mx-auto ">
      <div className="circle outline-border bg-gray-100 mx-auto items-center flex mt-4">
        <CiSearch className="size-6 ml-4" />
        <input
          type="text"
          placeholder="Search by keyword or product type"
          className="w-full py-5 px-4 focus:outline-none"
        />
      </div>
      <div className="mx-auto flex justify-center md:justify-start gap-2 flex-wrap my-4">
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
      <p className="max-w-[699px] mx-auto md:mx-0 text-[18px] text-center md:text-start font-medium text-gray-500">
        Engage your users with modern and professional SaaS email templates
        designed to convert.
      </p>
    </div>
  );
};

export default SearchBar;
