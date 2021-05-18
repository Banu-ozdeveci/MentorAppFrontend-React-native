import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function PaymentList({ name, price, date, time }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginBottom: 6 }}>
        <AppText style={styles.text1}>Selected Mentor:</AppText>
        <AppText style={{ color: "black", left: 10 }}>{name}</AppText>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 6 }}>
        <AppText style={styles.text1}>Date:</AppText>
        <AppText style={{ color: "black", left: 10 }}>{date}</AppText>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 6 }}>
        <AppText style={styles.text1}>Time:</AppText>
        <AppText style={{ color: "black", left: 10 }}>{time}</AppText>
      </View>

      <View style={{ flexDirection: "row", marginBottom: 6 }}>
        <AppText style={styles.text1}>Payment Amount:</AppText>
        <AppText style={{ color: "black", left: 10 }}>{price}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 150,
    backgroundColor: colors.BACKGROUND,
    borderRadius: 15,
    padding: 20,
    elevation: 15,
    marginVertical: 10,
  },
  text1: {
    fontWeight: "bold",
    color: colors.TITLE,
  },
});

export default PaymentList;
