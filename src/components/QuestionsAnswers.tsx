import { questionsAnswers } from "@/constants";
import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionsAnswers = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[1008px] mx-auto">
      {questionsAnswers.slice(0, 3).map((questionAnswer, index) => (
        <QuestionCard
          key={index}
          question={questionAnswer.question}
          answer={questionAnswer.answer}
          initial={true}
        />
      ))}
      {questionsAnswers.slice(3).map((questionAnswer, index) => (
        <QuestionCard
          key={index}
          question={questionAnswer.question}
          answer={questionAnswer.answer}
          initial={false}
        />
      ))}
    </div>
  );
};

export default QuestionsAnswers;
