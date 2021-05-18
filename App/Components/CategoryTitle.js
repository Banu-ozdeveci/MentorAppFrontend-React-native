import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function CategoryTitle({ title, title2, width = 150, top }) {
  return (
    <View style={[styles.container, { width, top }]}>
      <AppText style={styles.title}>{title}</AppText>
      {title2 ? <AppText style={styles.title2}>{title2}</AppText> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.BACKGROUND,
    height: 40,
    elevation: 10,
    borderRadius: 6,
    margin: 8,
    left: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
  },
  title2: {
    color: colors.GREY,
    fontSize: 14,
    left: 15,
  },
});

export default CategoryTitle;
