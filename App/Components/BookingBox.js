import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function BookingBox({ date, time, booked, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.mainBox}>
        <AppText style={styles.date}>{date}</AppText>
        <AppText style={styles.time}>{time}</AppText>
      </View>
      <TouchableOpacity onPress={onPress}>
        {booked == true ? (
          <View style={styles.greyBox}>
            <AppText>Booked</AppText>
          </View>
        ) : (
          <View style={styles.greenBox}>
            <AppText>Book</AppText>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  mainBox: {
    backgroundColor: colors.TOPBACKGROUND,
    elevation: 20,
    width: 190,
    height: 85,
  },
  date: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
    letterSpacing: 1,
    margin: 7,
  },
  time: {
    color: colors.LIGHTBLACK,
    alignSelf: "center",
    top: 5,
  },
  greyBox: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    backgroundColor: colors.BOOKINGBOX,
    height: 60,
    width: 60,
  },
  greenBox: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    backgroundColor: colors.BACKGROUND,
    height: 60,
    width: 60,
  },
});

export default BookingBox;
