import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import colors from "../style/colors";

function Icon({
  fontAwesome = true,
  name = "chevron-down",
  size = 40,
  backgroundColor = colors.TOPBACKGROUND,
  iconColor = colors.GREY,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        margin: 5,
      }}
    >
      {fontAwesome == true ? (
        <FontAwesome name={name} color={iconColor} size={size * 0.5} />
      ) : (
        <MaterialCommunityIcons
          name={name}
          color={iconColor}
          size={size * 0.5}
        />
      )}
    </View>
  );
}

export default Icon;
