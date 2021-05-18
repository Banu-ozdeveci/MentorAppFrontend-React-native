import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../style/colors";
import AppText from "./AppText";

function PageRectangle({ index, onPress1, onPress2, onPress3 }) {
  return (
    <View style={styles.container}>
      {index == 1 ? (
        <View style={styles.dark}>
          <AppText style={styles.white}>PROFILE </AppText>
        </View>
      ) : (
        <View style={styles.light}>
          <TouchableOpacity onPress={onPress1}>
            <AppText style={styles.grey}>PROFILE </AppText>
          </TouchableOpacity>
        </View>
      )}
      {index == 2 ? (
        <View style={styles.dark}>
          <AppText style={styles.white2}>AVAILABILTY </AppText>
        </View>
      ) : (
        <View style={styles.light}>
          <TouchableOpacity onPress={onPress2}>
            <AppText style={styles.grey2}>AVAILABILTY </AppText>
          </TouchableOpacity>
        </View>
      )}

      {index == 3 ? (
        <View style={styles.dark}>
          <AppText style={styles.white3}>REVIEWS </AppText>
        </View>
      ) : (
        <View style={styles.light}>
          <TouchableOpacity onPress={onPress3}>
            <AppText style={styles.grey3}>REVIEWS </AppText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  dark: {
    height: "32%",
    width: 100,
    backgroundColor: colors.DARKGREEN,
    borderRadius: 15,
    left: -19,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 4,
  },
  white: {
    color: "white",
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: "600",
    transform: [{ rotate: "270deg" }],
  },
  white2: {
    color: "white",
    fontSize: 17,
    // letterSpacing: 1,
    fontWeight: "600",
    transform: [{ rotate: "270deg" }],
  },
  grey2: {
    color: colors.GREY,
    fontSize: 17,
    // letterSpacing: 1,
    fontWeight: "600",
    transform: [{ rotate: "270deg" }],
  },
  white3: {
    color: "white",
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: "600",
    transform: [{ rotate: "270deg" }],
  },
  grey3: {
    color: colors.GREY,
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: "600",
    transform: [{ rotate: "270deg" }],
  },
  light: {
    height: "32%",
    width: 100,
    backgroundColor: colors.PROFIL,
    borderRadius: 15,
    left: -19,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 4,
    elevation: 20,
  },
  grey: {
    color: colors.GREY,
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: "600",
    transform: [{ rotate: "270deg" }],
  },
});

export default PageRectangle;
