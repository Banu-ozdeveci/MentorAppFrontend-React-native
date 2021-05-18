import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

function ProfileNamePhoto({ name, url, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <AppText style={styles.back}>Back</AppText>
      </TouchableWithoutFeedback>

      {url ? (
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      ) : (
        <Image source={require("../../assets/girl.jpg")} style={styles.image} />
      )}

      <AppText style={styles.name}>{name}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "68%",
    height: "30%",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    left: 20,
    margin: 6,
  },
  back: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    left: 20,
    top: 15,
    letterSpacing: 1,
  },
});

export default ProfileNamePhoto;
