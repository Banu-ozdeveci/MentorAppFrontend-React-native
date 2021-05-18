import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../style/colors";
import AppText from "./AppText";
import Line from "./Line";
import Icon from "./Icon";

function SettingItem({ icon, title, onPress, color = colors.TITLE }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name={icon} size={50} iconColor={color} />
        <View style={styles.column}>
          <AppText style={styles.title}>{title}</AppText>
          <Line width="80%" height={1} style={styles.line} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 8,
  },
  column: { alignItems: "center", flex: 1 },
  title: {
    fontSize: 19,
    letterSpacing: 1,
  },
  line: {
    top: 14,
  },
});

export default SettingItem;
