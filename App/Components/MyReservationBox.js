import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ReservationLine from "./ReservationLine";
import colors from "../style/colors";
import AppText from "./AppText";

function MyReservationBox({ url, name, time1 }) {
  return (
    <View style={styles.container}>
      <ReservationLine time1={time1} />
      <View style={{ flexDirection: "row" }}>
        <View style={styles.boxContainer}>
          {url ? (
            <Image
              style={styles.image}
              source={{
                uri: url,
              }}
            />
          ) : (
            <Image
              source={require("../../assets/girl.jpg")}
              style={styles.image}
            />
          )}
          <AppText style={styles.name}>{name}</AppText>
        </View>
        <View style={styles.greenBox}>
          <AppText style={styles.status}>Done</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 40 },
  boxContainer: {
    flexDirection: "row",
    padding: 14,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.TOPBACKGROUND,
    elevation: 25,
    width: 200,
    height: 80,
    left: 60,
    // margin: 10,
    // right: -15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    margin: 5,
    left: -10,
  },

  name: {
    fontWeight: "600",
    fontSize: 18,
  },
  greenBox: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    backgroundColor: colors.BACKGROUND,
    height: 60,
    width: 130,
    left: 30,
    top: 8,
  },
  status: {
    fontWeight: "bold",
    color: colors.DARKGREEN,
  },
});

export default MyReservationBox;
