import QuestionsAnswers from "./QuestionsAnswers";

const FAQsSection = () => {
  return (
    <section>
      <div className="max-w-[1008px] mx-auto flex justify-between md:gap-28 md:justify-start flex-col md:flex-row items-center mb-8">
        <h2 className="font-semibold text-[37px] text-center md:text-start md:text-nowrap">
          Frequently Asked Questions
        </h2>
        <p className="text-center md:text-start">
          Got questions? We&#39;ve got answers! Explore our FAQ section to find
          solutions to common queries about our email templates.
        </p>
      </div>
      <QuestionsAnswers />
    </section>
  );
};

export default FAQsSection;
