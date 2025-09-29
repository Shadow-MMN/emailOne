import QuestionsAnswers from "@/components/QuestionsAnswers";

import React from "react";

const FAQs = () => {
  return (
    <main className="mt-16 px-4 md:px-8 lg:px-0 min-h-screen">
      <div className="max-w-[600px] mx-auto text-center mb-8">
        <h2 className="font-semibold text-[37px] text-nowrap">
          Frequently Asked Questions
        </h2>
        <p>
          Got questions? We&#39;ve got answers! Explore our FAQ section to find
          solutions to common queries about our email templates.
        </p>
      </div>
      <QuestionsAnswers />
    </main>
  );
};

export default FAQs;
