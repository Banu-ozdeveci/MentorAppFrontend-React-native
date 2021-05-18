import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function ReviewBox({ name, date, review, url }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
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
        <View style={styles.textColumn}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.date}>{date}</AppText>
        </View>
      </View>
      <AppText style={styles.review} numberOfLines={2}>
        {review}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    left: -25,
    backgroundColor: colors.TOPBACKGROUND,
    elevation: 10,
    width: 270,
    // height: 200,
    marginVertical: 9,
  },
  row: {
    flexDirection: "row",
    margin: 8,
    alignItems: "center",
    marginBottom: 9,
  },
  textColumn: {
    left: 14,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  date: {
    fontSize: 15,
    color: colors.LIGHTBLACK,
  },
  review: {
    marginBottom: 9,
    marginHorizontal: 6,
    fontSize: 15,
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 35,
    marginBottom: 4,
  },
});

export default ReviewBox;
