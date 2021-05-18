import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../style/colors";
import { FontAwesome } from "@expo/vector-icons";

function AppTextInput({ icon, width, height, borderRadius, ...otherProps }) {
  return (
    <View style={[styles.container, { width, height, borderRadius }]}>
      <TextInput
        maxLength={45}
        placeholderTextColor={colors.SOFTBLACK}
        style={styles.textInput}
        {...otherProps}
      />
      {icon && (
        <FontAwesome
          name={icon}
          size={20}
          color={colors.GREY}
          style={styles.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    width: "90%",
    justifyContent: "center",
  },
  textInput: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,

    width: "77%",
    marginLeft: 30,
    fontSize: 17,
    fontWeight: "300",
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
  },
});

export default AppTextInput;
