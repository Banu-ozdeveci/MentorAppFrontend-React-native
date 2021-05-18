import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";

{
  /* <MentorFormInput
width={100}
height={200}
title="University"

/> */
}

function MentorFormInput({
  width = 150,
  height = 80,
  title,
  style,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.title}>{title}</AppText>
      <View style={[styles.box, { width, height }]}>
        <TextInput
          placeholder="-->"
          placeholderTextColor={colors.SOFTBLACK}
          style={styles.input}
          {...otherProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  box: {
    backgroundColor: colors.BACKGROUND,
    elevation: 10,
    borderRadius: 10,
    padding: 5,
  },
  input: {
    fontSize: 19,
  },
  title: {
    fontSize: 17,
    marginBottom: 10,
  },
});

export default MentorFormInput;
