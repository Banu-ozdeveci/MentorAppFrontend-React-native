import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "./ListItem";

function ProfileList({ uni, major, ranking, year }) {
  return (
    <View style={styles.container}>
      <ListItem text={uni} />
      <ListItem text={major} />
      <ListItem text={ranking} />
      <ListItem text={year} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default ProfileList;
