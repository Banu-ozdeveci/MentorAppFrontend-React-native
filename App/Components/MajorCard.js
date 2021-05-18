import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../style/colors";

function MajorCard({ title, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome name={icon} color={colors.TITLE} size={45} />
        </View>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 10,
    backgroundColor: colors.MAJOR,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  title: {
    fontWeight: "bold",
    left: 15,
    marginRight: 30,
  },
});

export default MajorCard;
