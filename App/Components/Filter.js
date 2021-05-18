import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../style/colors";

function Filter({ onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <FontAwesome name="sliders" color="#48B13E" size={27} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 35,
    backgroundColor: colors.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    elevation: 10,
  },
});

export default Filter;
