import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function ProfileBox({ url, name, style }) {
  return (
    <View style={[styles.container, style]}>
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
          style={styles.anonim}
        />
      )}
      <AppText style={styles.name}>{name}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    width: 140,
    height: 120,
    backgroundColor: colors.BACKGROUND,
    padding: 20,
    elevation: 10,
  },
  anonim: {
    width: 55,
    height: 55,
    borderRadius: 35,
    marginBottom: 4,
    bottom: 6,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 35,
    marginBottom: 4,
    bottom: 6,
  },
  name: {
    top: 4,
    fontWeight: "700",
  },
});

export default ProfileBox;
