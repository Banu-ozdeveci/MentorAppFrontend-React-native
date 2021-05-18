import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function ListItem({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 3,
    marginVertical: 5,
  },
  text: {
    fontSize: 19,
    left: 12,
    fontWeight: "600",
    bottom: 7,
    //letterSpacing: 1,
  },
  dot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: colors.DARKGREEN,
  },
});

export default ListItem;
