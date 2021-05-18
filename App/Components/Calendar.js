import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../style/colors";
import AppText from "./AppText";

function Calendar({ onPress, width, height, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { width, height }, style]}>
        <FontAwesome name="calendar" color="#48B13E" size={27} />
        <AppText style={styles.text}>Choose Date</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 60,
    backgroundColor: colors.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 10,
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    left: 7,
  },
});

export default Calendar;
