import React, { useState } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import _ from "lodash";

import { TQuestion } from "@/src/types/QuestionType";
import AnswerChoices from "./AnswerChoices";

const QUESTIONS: TQuestion[] = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Madrid",
    selected: "",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    selected: "",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Leo Tolstoy",
    ],
    answer: "Jane Austen",
    selected: "",
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Giraffe",
    selected: "",
  },
  {
    question: "In which year did the Titanic sink?",
    choices: ["1905", "1912", "1920", "1931"],
    answer: "1920",
    selected: "",
  },
  {
    question: "What is the main ingredient in guacamole?",
    choices: ["Tomato", "Avocado", "Onion", "Lemon"],
    answer: "Tomato",
    selected: "",
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    choices: [
      "Harper Lee",
      "J.K. Rowling",
      "George Orwell",
      "F. Scott Fitzgerald",
    ],
    answer: "George Orwell",
    selected: "",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Oxygen", "Gold", "Silver", "Iron"],
    answer: "Oxygen",
    selected: "",
  },
  {
    question: "What is the capital of Japan?",
    choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: "Seoul",
    selected: "",
  },
  {
    question: "Which planet is closest to the Sun?",
    choices: ["Venus", "Mercury", "Earth", "Mars"],
    answer: "Mercury",
    selected: "",
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
    selected: "",
  },
  {
    question: "What is the currency of Brazil?",
    choices: ["Peso", "Yen", "Real", "Euro"],
    answer: "Peso",
    selected: "",
  },
  {
    question: "Which ocean is the largest?",
    choices: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
    selected: "",
  },
  {
    question: "Who is known as the 'Father of Physics'?",
    choices: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Niels Bohr",
    ],
    answer: "Albert Einstein",
    selected: "",
  },
  {
    question: "What is the capital of Australia?",
    choices: ["Wellington", "Canberra", "Sydney", "Melbourne"],
    answer: "Canberra",
    selected: "",
  },
  {
    question: "Which gas is responsible for the green color of plants?",
    choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Chlorophyll"],
    answer: "Oxygen",
    selected: "",
  },
  {
    question: "Who wrote '1984'?",
    choices: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "Jules Verne"],
    answer: "George Orwell",
    selected: "",
  },
  {
    question: "What is the largest desert in the world?",
    choices: ["Sahara Desert", "Gobi Desert", "Antarctica", "Arabian Desert"],
    answer: "Gobi Desert",
    selected: "",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    choices: ["China", "Japan", "Korea", "Vietnam"],
    answer: "Japan",
    selected: "",
  },
  {
    question: "What is the speed of light?",
    choices: ["300,000 km/s", "150,000 km/s", "200,000 km/s", "250,000 km/s"],
    answer: "250,000 km/s",
    selected: "",
  },
];

type QuestionListProps = {
  calculateScore: (questions: TQuestion[]) => void;
};

const QuestionList = ({ calculateScore }: QuestionListProps) => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [questions, setQuestions] = useState<TQuestion[]>(QUESTIONS);

  const handleCheckCorrectAnswer = (index: number, value: string) => {
    const tmpQuestions = [...questions];
    tmpQuestions[index].selected = value;

    setQuestions(tmpQuestions);
    calculateScore(tmpQuestions);
  };

  const handleRefresh = () => {
    setRefresh(true);
    setQuestions(_.shuffle(QUESTIONS));
    setRefresh(false);
  };

  return (
    <View style={styles.card}>
      <ScrollView horizontal={true}>
        <FlatList
          data={questions}
          renderItem={({ item, index }: { item: TQuestion; index: number }) => {
            return (
              <View style={styles.sectionCard} key={index}>
                <View>
                  <Text style={styles.questionText}>
                    {index + 1}. {item.question}
                  </Text>
                </View>
                <AnswerChoices
                  selectedIndex={index}
                  choices={item.choices}
                  selected={item.selected}
                  handleCheckCorrectAnswer={handleCheckCorrectAnswer}
                />
              </View>
            );
          }}
          refreshing={refresh}
          onRefresh={() => handleRefresh()}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
  },
  sectionCard: {
    shadowColor: "#000",
    padding: 8,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "600",
  },
  answerText: {
    marginTop: 8,
  },
});

export default QuestionList;
