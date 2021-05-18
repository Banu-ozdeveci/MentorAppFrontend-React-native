import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, LogBox } from "react-native";
import SurveyPicker from "../Components/SurveyPicker";
import TopRectangle from "../Components/TopRectangle";
import Screen from "../Components/Screen";
import colors from "../style/colors";
import AppText from "../Components/AppText";

import { connect } from "react-redux";
import AppButton from "../Components/AppButton";
import {
  getRecommendedMentors,
  selectRecommendedMentorsData,
} from "../Store/mentors";

const uniData = [
  { label: "Boğaziçi University", value: 1, data: "Boğaziçi" },
  { label: "Middle East Technical University", value: 2, data: "Odtü" },
  { label: "Istanbul Technical University", value: 3, data: "İtü" },
  { label: "Galatasaray University", value: 4, data: "Galatasaray" },
  { label: "Sabancı University", value: 5, data: "Sabancı" },
];

const majorData = [
  { label: "Computer Science", value: 1, data: "CS" },
  { label: "Economy", value: 2, data: "Economy" },
  { label: "Medical", value: 3, data: "Medical" },
  { label: "Math", value: 4, data: "Math" },
  { label: "Law", value: 5, data: "Law" },
];

const mapStateToProps = (state) => ({
  recommended: selectRecommendedMentorsData(state),
});

const SurveyScreen = connect(mapStateToProps, {
  getRecommendedMentors,
})(
  ({
    navigation,
    getRecommendedMentors,
    selectRecommendedMentorsData,
    recommended,
  }) => {
    const [uni, setUni] = useState();
    const [major, setMajor] = useState();

    const handleRecommendations = async () => {
      try {
        let data1 = uni ? Object.values(uni)[2] : null;
        let data2 = major ? Object.values(major)[2] : null;
        await getRecommendedMentors(data1, data2);
      } catch (error) {
        console.log("getRecommended", error);
      }
      navigation.navigate("Home");
    };
    LogBox.ignoreLogs(["Each"]);
    return (
      <Screen>
        <View style={styles.container}>
          <TopRectangle
            onPress={() => navigation.navigate("Home")}
            height={77}
            children="Hi User!"
            children2="Let Us Know Your Goals"
            style1={styles.title}
            style2={styles.title2}
          />

          <Image
            style={styles.image}
            source={require("../../assets/survey.jpg")}
          />
          <View style={styles.box}>
            <AppText style={styles.text}>
              Answer these questions and we will make personal recommendations.
            </AppText>
          </View>

          <View style={{ right: 30 }}>
            <SurveyPicker
              title="Select University"
              data={uniData}
              selectedItem={uni}
              onSelectItem={(item) => setUni(item)}
            />
            <SurveyPicker
              title="Select Major"
              data={majorData}
              selectedItem={major}
              onSelectItem={(item) => setMajor(item)}
            />
            <AppButton
              title="Done"
              onPress={() => handleRecommendations()}
              width={140}
              titleColor={colors.DARKGREEN}
              style={{ alignSelf: "center", left: 32, top: 25 }}
            />
          </View>
        </View>
      </Screen>
    );
  }
);

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1 },
  title: {
    fontWeight: "bold",
    color: colors.TITLE,
    fontSize: 22,
    bottom: 4,
  },
  title2: {
    color: colors.TITLE,
    fontSize: 18,
  },
  image: {
    width: 185,
    height: 168,
    alignSelf: "center",
    bottom: 10,
  },
  text: {
    margin: 18,
    left: 21,
  },
  box: {
    width: "80%",
    elevation: 40,
    bottom: 10,
    backgroundColor: colors.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    elevation: 15,
  },
});

export default SurveyScreen;
