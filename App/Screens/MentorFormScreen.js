import React, { useState } from "react";
import { View, StyleSheet, Alert, KeyboardAvoidingView } from "react-native";
import AppText from "../Components/AppText";
import colors from "../style/colors";
import Screen from "../Components/Screen";
import TopRectangle from "../Components/TopRectangle";
import MentorFormInput from "../Components/MentorFormInput";
import AppButton from "../Components/AppButton";
import IconText from "../Components/IconText";

function MentorFormScreen({ navigation }) {
  const [enableshift, setenableShift] = useState(false);
  return (
    <Screen>
      <TopRectangle
        width={100}
        children="Mentor Student Form"
        style1={styles.title}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <View style={styles.container}>
        <View style={styles.whiteBox}>
          <AppText style={styles.addInfo}>Add your informations</AppText>
        </View>
        <KeyboardAvoidingView
          behavior="position"
          style={styles.container}
          enabled={enableshift}
        >
          <View style={styles.greenBox}>
            <AppText style={styles.greenBoxText}>
              Tell us about yourself:
            </AppText>
          </View>

          <View style={styles.inputs}>
            <MentorFormInput
              title="University:"
              width={250}
              height={50}
              onFocus={() => setenableShift(false)}
            />
            <MentorFormInput
              title="Major:"
              width={120}
              height={40}
              onFocus={() => setenableShift(false)}
            />
            <View style={styles.row1}>
              <MentorFormInput
                title="Year:"
                width={100}
                height={40}
                style={styles.year}
                onFocus={() => setenableShift(true)}
              />
              <MentorFormInput
                onFocus={() => setenableShift(true)}
                title="Ranking:"
                width={100}
                height={40}
              />
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={styles.row2}>
          <View style={styles.iconText}>
            <IconText icon={"file"} text="Student Document" />
            <IconText icon={"file"} text="Exam Result" />
          </View>
          <AppButton
            width={85}
            height={60}
            title="Submit"
            color={colors.DARKGREEN}
            titleColor={colors.WHITE}
            onPress={() => Alert.alert("We will inform you soon.")}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 20,
  },
  row2: {
    flexDirection: "row",
    marginTop: 20,
  },
  iconText: {
    marginRight: 40,
  },
  inputs: {},
  whiteBox: {
    width: "89%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.TOPBACKGROUND,
    elevation: 15,
    marginVertical: 10,
    marginBottom: 30,
    alignSelf: "center",
  },
  addInfo: {
    color: colors.LIGHTBLACK,
  },
  greenBox: {
    width: "80%",
    padding: 10,
    height: 70,
    backgroundColor: colors.BACKGROUND,
    elevation: 15,
    marginVertical: 5,
  },
  year: {
    marginRight: 80,
  },
  greenBoxText: {},
  row1: {
    flexDirection: "row",
  },
});

export default MentorFormScreen;
