import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";

import QuestionAnswer from "./src/components/QuestionAnswer/QuestionAnswer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <QuestionAnswer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
  },
});
