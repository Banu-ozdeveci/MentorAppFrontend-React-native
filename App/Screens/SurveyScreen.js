import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, LogBox } from "react-native";
import SurveyPicker from "../Components/SurveyPicker";
import TopRectangle from "../Components/TopRectangle";
import Screen from "../Components/Screen";
import colors from "../style/colors";
import AppText from "../Components/AppText";

import { connect } from "react-redux";
import AppButton from "../Components/AppButton";

import { saveRecommendedData } from "../API";
import { selectAuthUser } from "../Store/auth";

const uniData = [
  { label: "Boğaziçi Üniversitesi", value: 1, data: "Boğaziçi" },
  { label: "Orta Doğu Teknik Üniversitesi", value: 2, data: "Odtü" },
  { label: "İstanbul Teknik Üniversitesi", value: 3, data: "İtü" },
  { label: "Galatasaray Üniversitesi", value: 4, data: "Galatasaray" },
  { label: "Hacettepe Üniversitesi", value: 5, data: "Hacettepe" },
];

const majorData = [
  { label: "Bilgisayar Mühendisliği", value: 1, data: "Bilgisayar M." },
  { label: "Ekonomi", value: 2, data: "Ekonomi" },
  { label: "Tıp", value: 3, data: "Tıp" },
  { label: "Matematik", value: 4, data: "Matematik" },
  { label: "Hukuk", value: 5, data: "Hukuk" },
  { label: "Psikoloji", value: 5, data: "Psikoloji" },
];

const mapStateToProps = (state) => ({
  user: selectAuthUser(state),
});

const SurveyScreen = connect(
  mapStateToProps,
  {}
)(({ user, navigation }) => {
  const [uni, setUni] = useState();
  const [major, setMajor] = useState();

  const handleRecommendations = async () => {
    try {
      let data1 = uni ? Object.values(uni)[2] : null;
      let data2 = major ? Object.values(major)[2] : null;
      console.log("d", data1, data2);

      await saveRecommendedData(user._id, data1, data2);
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
          children="Merhaba !"
          children2="Hedefin Hangisi?"
          style1={styles.title}
          style2={styles.title2}
        />

        <Image
          style={styles.image}
          source={require("../../assets/survey.jpg")}
        />
        <View style={styles.box}>
          <AppText style={styles.text}>
            Bu soruları cevapla ve sana özel mentör önerileri yapalım.
          </AppText>
        </View>

        <View style={{ right: 30 }}>
          <SurveyPicker
            title="Üniversite Seç"
            data={uniData}
            selectedItem={uni}
            onSelectItem={(item) => setUni(item)}
          />
          <SurveyPicker
            title="Bölüm Seç"
            data={majorData}
            selectedItem={major}
            onSelectItem={(item) => setMajor(item)}
          />
          <AppButton
            title="Onayla"
            onPress={() => handleRecommendations()}
            width={140}
            titleColor={colors.DARKGREEN}
            style={{ alignSelf: "center", left: 32, top: 25 }}
          />
        </View>
      </View>
    </Screen>
  );
});

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
