import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const TemplatePage = () => {
  return (
    <main className="px-4 lg:px-0 mt-16 min-h-screen">
      <header className="max-w-[600px] mt-16 mx-auto text-center">
        <h1 className="font-semibold text-[37px] mb-4 text-[#050200]">
          Templates
        </h1>
        <p className="font-medium text-[18px] text-gray-500">
          Elevate your SaaS, Fintech, Ecommerce, Agrictech, and Edutech
          communications with captivating designs meticulously crafted for
          success.
        </p>
      </header>
      <SearchBar />
      <SearchResults />
    </main>
  );
};

export default TemplatePage;
