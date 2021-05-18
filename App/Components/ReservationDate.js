import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function ReservationDate({ date }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.date}>{date}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 60,
    margin: 10,
    elevation: 20,
    backgroundColor: "white",
  },
  date: {
    fontWeight: "bold",
    fontSize: 19,
  },
});

export default ReservationDate;
