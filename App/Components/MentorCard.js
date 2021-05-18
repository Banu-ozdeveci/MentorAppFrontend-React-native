import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../style/colors";
import AppText from "./AppText";

function MentorCard({
  onPress,
  name,
  uni,
  url,
  major,
  calls,
  price,
  online,
  ranking,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {online == true ? (
          <View style={styles.dot} />
        ) : (
          <View style={styles.dot2} />
        )}
        <View style={styles.urlAndName}>
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

        <View style={styles.row}>
          <AppText style={styles.uni}>{uni}</AppText>
          <View style={styles.line} />
          <AppText style={styles.major}>{major}</AppText>
        </View>

        <View style={styles.row2}>
          {calls ? <AppText style={styles.calls}>{calls} Calls</AppText> : null}
          {ranking ? (
            <AppText style={styles.ranking}>{ranking} th</AppText>
          ) : null}
          {price ? <AppText style={styles.price}>{price} tl</AppText> : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: colors.CARDBACKGROUND,
    margin: 15,
    elevation: 14,
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: 8,
    backgroundColor: "#50AF6F",
    bottom: 5,
    right: 5,
  },
  dot2: {
    width: 12,
    height: 12,
    borderRadius: 8,
    backgroundColor: colors.CARDBACKGROUND,
    top: 5,
    left: 5,
  },
  anonim: {
    width: 55,
    height: 55,
    borderRadius: 35,
    marginBottom: 4,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 35,
    marginBottom: 4,
  },
  urlAndName: {
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    top: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 6,
  },
  uni: {
    fontSize: 13,
  },
  line: {
    height: 20,
    width: 1,
    backgroundColor: colors.GREY,
    marginHorizontal: 5,
  },
  major: { fontSize: 13 },
  row2: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 7,
  },
  calls: {
    fontSize: 15,
    marginRight: 35,
    color: colors.TITLE,
    fontWeight: "bold",
  },
  price: {
    color: colors.TITLE,
    fontSize: 15,
  },
  ranking: {
    fontSize: 14,
    marginRight: 35,
    color: colors.TITLE,
    fontWeight: "500",
  },
});

export default MentorCard;
