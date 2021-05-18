import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function Number({ number, backgroundColor = colors.YELLOW, size = 35, style }) {
  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2, backgroundColor },
        style,
      ]}
    >
      <AppText style={styles.number}>{number}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontWeight: "bold",
    color: colors.DARKGREEN,
    fontSize: 21,
  },
});

export default Number;
