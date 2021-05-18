import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";
import { FontAwesome } from "@expo/vector-icons";

{
  /* <RecommandationCard
name="Mina Yılmaz"
uni="A University"
major="Medical"
class="Second Year"
url="url"
/> */
}

function RecommandationCard({ name, uni, major, year, url, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
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
        <View style={styles.row}>
          <View style={styles.column}>
            <AppText style={styles.name}>{name}</AppText>
            <AppText style={styles.uni}>
              {uni} , {major}
            </AppText>
            <AppText style={styles.year}>{year} Year</AppText>
          </View>
        </View>
        <FontAwesome
          name="user"
          color={colors.GREY}
          size={25}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", margin: 10, alignItems: "center" },
  anonim: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginBottom: 4,
    right: 72,
    top: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginBottom: 4,
    right: 72,
  },
  row: {
    flexDirection: "row",
    right: 46,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  uni: {
    fontSize: 14,
  },
  icon: {
    left: 60,
  },
  year: {
    fontSize: 13,
    color: colors.GREY,
  },
});

export default RecommandationCard;
