import React from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";

import _ from "lodash";

type AnswerChoicesProps = {
  selectedIndex: number;
  choices: string[];
  selected: string;
  handleCheckCorrectAnswer: (index: number, choice: string) => void;
};

const AnswerChoices = ({
  selectedIndex,
  choices,
  selected,
  handleCheckCorrectAnswer,
}: AnswerChoicesProps) => {
  return (
    <View>
      {_.shuffle(choices).map((choice) => (
        <RadioButton.Group
          onValueChange={() => handleCheckCorrectAnswer(selectedIndex, choice)}
          key={choice}
        >
          <RadioButton.Item
            label={choice}
            value={choice}
            status={selected === choice ? "checked" : "unchecked"}
          />
        </RadioButton.Group>
      ))}
    </View>
  );
};

export default AnswerChoices;
