import React, { useState } from "react";
import { View } from "react-native";

import LeaderBoard from "./LeaderBoard";
import QuestionList from "./QuestionList";

import { TQuestion } from "../../types/QuestionType";

const QuestionAnswer = () => {
  const [score, setScore] = useState<number>(0);

  const calculateScore = (questions: TQuestion[]) => {
    const score = questions.filter(
      (question: TQuestion) => question.answer === question.selected
    ).length;

    setScore(score);
  };

  return (
    <View>
      <LeaderBoard score={score} />
      <QuestionList calculateScore={calculateScore} />
    </View>
  );
};

export default QuestionAnswer;
