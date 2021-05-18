import React from "react";
import { View, StyleSheet, TouchableOpacity, onPress } from "react-native";
import AppText from "./AppText";
import { AntDesign } from "@expo/vector-icons";

function HomeSubtitle({ title, style1, style2, onPress }) {
  return (
    <View style={styles.container}>
      <AppText style={[styles.title, styles.style1]}>{title}</AppText>
      <TouchableOpacity
        onPress={onPress}
        style={{ left: 30, flexDirection: "row" }}
      >
        <AppText style={[styles.see, styles.style2]}>See all</AppText>
        <AntDesign name="caretright" color="#48B13E" size={16} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    marginVertical: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 21,
    color: "black",

    right: 27,
    top: 5,
  },
  see: {
    color: "#48B13E",
    fontSize: 15,
    bottom: 3,
    marginRight: 4,
  },
});

export default HomeSubtitle;
