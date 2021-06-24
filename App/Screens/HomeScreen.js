import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ScrollView,
  Image,
  LogBox,
} from "react-native";

import {
  getUniMajor,
  getFavMentors,
  selectFavMentorsData,
  selectRecommendedMentorsData,
  getRecommendedMentors,
  getOnlineMentors,
} from "../Store/mentors";

import Screen from "../Components/Screen";
import RecommandationCard from "../Components/RecommandationCard";
import WelcomeBox from "../Components/WelcomeBox";
import HomeSubtitle from "../Components/HomeSubtitle";
import MentorCard from "../Components/MentorCard";
import AppText from "../Components/AppText";
import colors from "../style/colors";
import { getRecommendedData } from "../API";
import { connect } from "react-redux";
import { selectAuthUser, selectAuthToken } from "../Store/auth";

const mapStateToProps = (state) => ({
  favMentors: selectFavMentorsData(state),
  user: selectAuthUser(state),
  token: selectAuthToken(state),
  recommended: selectRecommendedMentorsData(state),
});

const HomeScreen = connect(mapStateToProps, {
  getUniMajor,
  getOnlineMentors,
  getFavMentors,
  getRecommendedMentors,
})(
  ({
    navigation,
    user,
    getUniMajor,
    getRecommendedMentors,
    getFavMentors,
    favMentors,
    getOnlineMentors,
    recommended,
    token,
  }) => {
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    LogBox.ignoreLogs(["Setting a timer"]);
    LogBox.ignoreLogs(["Encountered"]);
    LogBox.ignoreLogs(["Each"]);

    const handleFavMentorsData = async () => {
      try {
        await getFavMentors();
      } catch (error) {
        console.log("Get fav mentor error", error);
      }
    };
    const handleOnlineData = async () => {
      try {
        await getOnlineMentors();
      } catch (error) {
        console.log("App get Online error", error);
      }
    };

    const handleRecommendedData = async (data) => {
      try {
        await getRecommendedMentors(data);
      } catch (error) {
        console.log("Get recommended mentor error", error);
      }
    };

    useEffect(() => {
      setMasterDataSource(data);
      handleFavMentorsData();
      handleRecommendedData(user._id);
      handleOnlineData();
    }, []);

    const searchFilterFunction = (text) => {
      if (text != " " && text) {
        const newData = masterDataSource.filter(function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : "".toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        setFilteredDataSource("");
        setSearch("");
      }
    };

    const ItemView = ({ item }) => {
      return (
        <Text style={styles.itemStyle} onPress={() => handleCategory(item)}>
          {item.title.toUpperCase()}
        </Text>
      );
    };

    const ItemSeparatorView = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "#C8C8C8",
          }}
        />
      );
    };

    const handleCategory = async (item) => {
      try {
        await getUniMajor(item.domain, item.nav);
      } catch (error) {
        console.log("getAllData", error);
      }
      navigation.navigate("SelectedUniMajor", {
        title: item.title,
      });
    };

    return (
      <Screen>
        <View style={styles.container}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Ara"
          />
          <FlatList
            data={filteredDataSource}
            keyExtractor={(index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
        </View>
        <View style={styles.contain}>
          <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <WelcomeBox
              onPress={() => {
                navigation.navigate("SurveyScreen");
              }}
            />
            <HomeSubtitle
              title="Bu Haftanın Favorileri"
              style1={{ right: 20 }}
              onPress={() => navigation.navigate("WeekFavorites")}
            />

            <FlatList
              horizontal
              data={favMentors}
              renderItem={({ item }) => (
                <MentorCard
                  onPress={() =>
                    navigation.navigate("MentorProfile", { data: item })
                  }
                  name={item.name}
                  uni={item.uni}
                  major={item.major}
                  price={item.price}
                  calls={item.calls}
                />
              )}
              keyExtractor={(item) => item.id}
            />
            <View style={{ marginVertical: 10, left: -20 }}>
              <HomeSubtitle
                style2={{ left: 30 }}
                title="Senin için Öneriler"
                onPress={() => navigation.navigate("Recommendations")}
              />
            </View>
            {recommended.length !== 0 ? (
              recommended.map((item) => (
                <RecommandationCard
                  name={item.name}
                  uni={item.uni}
                  major={item.major}
                  year={item.year}
                  onPress={() =>
                    navigation.navigate("MentorProfile", { data: item })
                  }
                />
              ))
            ) : (
              <View style={styles.recContainer}>
                <AppText style={styles.recText}>
                  You don't have recommendations yet.
                </AppText>
                <AppText style={styles.recText}>Fill the survey first.</AppText>
                <Image
                  source={require("../../assets/rec.jpg")}
                  style={styles.rec}
                />
              </View>
            )}
          </ScrollView>
        </View>
      </Screen>
    );
  }
);

const styles = StyleSheet.create({
  contain: { flex: 1, alignItems: "center", top: 8 },
  container: {
    backgroundColor: "#48B13E",
    width: "90%",
    marginBottom: 15,
    alignSelf: "center",
    top: 10,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    // margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
  rec: {
    width: 200,
    height: 150,
  },
  recContainer: {
    margin: 30,
    alignItems: "center",
  },
  recText: {
    color: colors.DARKGREEN,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default HomeScreen;

const data = [
  {
    id: 1,
    title: "Galatasaray Üniversitesi",
    domain: "uni",
    nav: "Galatasaray",
  },
  {
    id: 2,
    title: "Boğaziçi Üniversitesi",
    domain: "uni",
    nav: "Boğaziçi",
  },
  {
    id: 3,
    title: "İstanbul Teknik Üniversitesi",
    domain: "uni",
    nav: "İtü",
  },
  {
    id: 4,
    title: "Orta Doğu Teknik Üniversitesi",
    domain: "uni",
    nav: "Odtü",
  },

  {
    id: 6,
    title: "Koç Üniversitesi",
    domain: "uni",
    nav: "Koç",
  },
  {
    id: 7,
    title: "Hacettepe Üniversitesi",
    domain: "uni",
    nav: "Hacettepe Üniversitesi",
  },

  {
    id: 15,
    title: "Bilgisayar Mühendisliği",
    domain: "major",
    nav: "Bilgisayar M.",
  },
  {
    id: 16,
    title: "Ekonomi",
    domain: "major",
    nav: "Ekonomi",
  },
  {
    id: 17,
    title: "Tıp",
    domain: "major",
    nav: "Tıp",
  },
  {
    id: 17,
    title: "Hukuk",
    domain: "major",
    nav: "Hukuk",
  },
  {
    id: 18,
    title: "Matematik",
    domain: "major",
    nav: "Matematik",
  },
];
