import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../style/colors";
import AppText from "./AppText";

function IconText({ text, icon, iconColor = colors.DARKGREEN }) {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} color={iconColor} size={26} />
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
    marginVertical: 6,
  },
  text: {
    marginLeft: 15,
    fontSize: 17,
  },
});

export default IconText;
