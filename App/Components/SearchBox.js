import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../style/colors";
import { FontAwesome } from "@expo/vector-icons";
import AppText from "./AppText";

function SearchBox({ width = "88%", height = 67, title, style }) {
  return (
    <View style={[styles.container, { width, height }, style]}>
      <FontAwesome name="search" color={colors.GREY} size={20} />
      {title ? (
        <AppText style={styles.text}>{title}</AppText>
      ) : (
        <AppText style={styles.text}>Search for Major, University</AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    elevation: 30,
    width: "85%",
    height: "10%",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  text: {
    left: 12,
    color: colors.GREY,
  },
});

export default SearchBox;
