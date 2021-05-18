import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function ReservationLine({ time1 }) {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <AppText style={[styles.time1]}>{time1}</AppText>
        {/* <AppText style={styles.time1}>{time2}</AppText> */}
      </View>

      {/* <View style={styles.dotContainer}>
        <View style={styles.dot} />
        <View style={styles.line} />
        <View style={styles.dot} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  timeContainer: { marginHorizontal: 10, top: -5 },
  time1: { fontWeight: "600", fontSize: 19 },
  dotContainer: { alignItems: "center" },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: colors.DARKGREEN,
  },
  line: {
    backgroundColor: colors.LINE,
    height: 60,
    width: 2,
  },
});

export default ReservationLine;
