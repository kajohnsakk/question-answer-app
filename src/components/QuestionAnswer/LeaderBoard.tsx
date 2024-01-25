import React from "react";
import { View, Text, StyleSheet } from "react-native";

type LeaderBoardProps = {
  score: number;
};

function LeaderBoard({ score = 0 }: LeaderBoardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Leader Board</Text>
      <Text style={styles.score}>Your score : {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#d2d2d2",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  score: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default LeaderBoard;
