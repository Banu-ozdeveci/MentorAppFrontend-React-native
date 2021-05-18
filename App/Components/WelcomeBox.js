import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";
import { AntDesign } from "@expo/vector-icons";

function WelcomeBox({ user, onPress }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}> Welcome!</AppText>
      <AppText style={styles.subtitle}>
        Answer the questions and have personal recommendations!
      </AppText>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{ flexDirection: "row", margin: 5, alignItems: "baseline" }}
        >
          <AppText style={styles.start}>Get Started</AppText>
          <AntDesign name="caretright" color="#48B13E" size={18} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: 10,
    width: "86%",
    margin: 4,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    color: "black",
    marginVertical: 3,
  },
  subtitle: { color: "#848D88", fontSize: 16, margin: 5 },
  start: {
    color: colors.TITLE,
    marginRight: 4,
    marginBottom: 3,
    fontWeight: "bold",
  },
});

export default WelcomeBox;
