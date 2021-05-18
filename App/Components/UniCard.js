import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function UniCard({ title, subtitle, source, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={source} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    left: 12,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: colors.DARKGREEN,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    elevation: 20,
  },
  image: {
    width: 95,
    height: 95,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    color: colors.GREY,
    fontSize: 14,
  },
  textContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default UniCard;
