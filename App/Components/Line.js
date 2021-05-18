import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../style/colors";

function Line({ width = "90%", color = colors.LIGHTGREEN, height = 1, style }) {
  return (
    <View
      style={[
        styles.container,
        { width, backgroundColor: color, height },
        style,
      ]}
    ></View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
});

export default Line;
