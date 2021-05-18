import React, { useState, useEffect } from "react";
import Screen from "../Components/Screen";
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
  selectUniMajorData,
  getFavMentors,
  selectFavMentorsData,
  selectRecommendedMentorsData,
} from "../Store/mentors";
import { connect } from "react-redux";
import RecommandationCard from "../Components/RecommandationCard";
import WelcomeBox from "../Components/WelcomeBox";
import HomeSubtitle from "../Components/HomeSubtitle";
import MentorCard from "../Components/MentorCard";
import AppText from "../Components/AppText";
import colors from "../style/colors";

const mapStateToProps = (state) => ({
  uniMajor: selectUniMajorData(state),
  favMentors: selectFavMentorsData(state),
  recommended: selectRecommendedMentorsData(state),
});

const HomeScreen = connect(mapStateToProps, {
  getUniMajor,
  getFavMentors,
})(
  ({
    navigation,
    uniMajor,
    getUniMajor,
    getFavMentors,
    favMentors,
    recommended,
  }) => {
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [click, setClicked] = useState(false);

    LogBox.ignoreLogs(["Setting a timer"]);
    LogBox.ignoreLogs(["Encountered"]);
    LogBox.ignoreLogs(["Each"]);
    LogBox.ignoreLogs(["YellowBox has been"]);
    const handleFavMentorsData = async () => {
      try {
        await getFavMentors();
      } catch (error) {
        console.log("App get fav mentor error", error);
      }
    };

    useEffect(() => {
      setMasterDataSource(data);
      handleFavMentorsData();
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
          {item.id}

          {"."}
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
            placeholder="Search University Or Major"
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
              user="Banu"
              onPress={() => {
                navigation.navigate("SurveyScreen"), setClicked(true);
              }}
            />
            <HomeSubtitle
              title="This week's favorites"
              style1={{ right: 10 }}
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
            <View style={{ marginVertical: 10 }}>
              <HomeSubtitle
                title="Recommended For you"
                onPress={() => navigation.navigate("Recommendations")}
              />
            </View>
            {click === true ? (
              recommended.map((item, index) => (
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
    title: "Galatasaray University",
    domain: "uni",
    nav: "Galatasaray",
  },
  {
    id: 2,
    title: "Boğaziçi University",
    domain: "uni",
    nav: "Boğaziçi",
  },
  {
    id: 3,
    title: "Istanbul Technical University",
    domain: "uni",
    nav: "İtü",
  },
  {
    id: 4,
    title: "Middle east technical university",
    domain: "uni",
    nav: "Odtü",
  },
  {
    id: 5,
    title: "Computer Science",
    domain: "major",
    nav: "CS",
  },
  {
    id: 6,
    title: "Economy",
    domain: "major",
    nav: "Economy",
  },
];
