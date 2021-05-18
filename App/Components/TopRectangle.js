import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import colors from "../style/colors";
import AppText from "./AppText";
import { FontAwesome } from "@expo/vector-icons";

function TopRectangle({
  children,
  children2,
  height = "11%",
  back = true,
  style1,
  style2,
  onPress,
}) {
  return (
    <View style={[styles.container, { height }]}>
      {back !== false ? (
        <TouchableWithoutFeedback onPress={onPress}>
          <FontAwesome
            name="angle-left"
            size={27}
            color={colors.GREY}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      ) : null}
      <View style={styles.textContainer}>
        <AppText style={style1}>{children}</AppText>
        {children2 ? <AppText style={style2}>{children2}</AppText> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.TOPBACKGROUND,
    alignItems: "center",
    flexDirection: "row",
    elevation: 20,
    marginBottom: 10,
  },
  icon: { left: 21 },
  textContainer: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    flexDirection: "column",
    marginHorizontal: 18,
  },
});

export default TopRectangle;
