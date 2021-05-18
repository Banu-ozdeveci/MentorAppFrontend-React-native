import React from "react";
import { View, StyleSheet } from "react-native";
import Number from "./Number";
import MentorCard from "./MentorCard";
import { TouchableOpacity } from "react-native-gesture-handler";

function FavMentor({
  name,
  uni,
  url,
  major,
  calls,
  price,
  onPress,
  ranking,
  number,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Number number={number} style={styles.number} />
        <MentorCard
          name={name}
          uni={uni}
          major={major}
          ranking={ranking}
          calls={calls}
          price={price}
          url={url}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 1,
  },
  number: {
    top: 18,
    right: -8,
  },
});

export default FavMentor;
