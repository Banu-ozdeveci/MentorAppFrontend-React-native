import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../style/colors";

function AppButton({
  title,
  onPress,
  color = colors.BACKGROUND,
  titleColor,
  width = 100,
  height = 45,
  icon,
  style,
  left,
  top = 0,
  ...otherProps
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color, width, height, top },
        style,
      ]}
      onPress={onPress}
      {...otherProps}
    >
      <Text style={[styles.text, { color: titleColor, left }]}>{title}</Text>
      {icon ? (
        <FontAwesome
          name={icon}
          color={"white"}
          size={26}
          style={styles.icon}
        />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",

    margin: 5,
    elevation: 20,
  },
  text: {
    color: colors.DARKGREEN,
    fontSize: 17,

    fontWeight: "bold",
  },
  icon: { left: 3 },
});

export default AppButton;
