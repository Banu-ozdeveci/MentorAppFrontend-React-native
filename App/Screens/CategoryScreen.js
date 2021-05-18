import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import CategoryTitle from "../Components/CategoryTitle";
import Screen from "../Components/Screen";
import SearchBox from "../Components/SearchBox";
import MajorCard from "../Components/MajorCard";
import UniCard from "../Components/UniCard";
import TopRectangle from "../Components/TopRectangle";
import AppText from "../Components/AppText";
import colors from "../style/colors";
import Icon from "../Components/Icon";
import {
  getUniMajor,
  selectUniMajorData,
  selectRankingData,
  getRankingData,
  getAllData,
  selectAllMentorData,
} from "../Store/mentors";
import { connect } from "react-redux";
import { getRanking } from "../API";
import AppButton from "../Components/AppButton";
import AppTextInput from "../Components/AppTextInput";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";

const mapStateToProps = (state) => ({
  uniMajor: selectUniMajorData(state),
  ranking: selectRankingData(state),
  allData: selectAllMentorData(state),
});

const CategoryScreen = connect(mapStateToProps, {
  getUniMajor,
  getRankingData,
  getAllData,
})(
  ({
    navigation,
    uniMajor,
    getUniMajor,
    getRankingData,
    ranking,
    getAllData,
    allData,
  }) => {
    const [min, setMin] = useState();
    const [max, setMax] = useState();
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const handleCategory = async (domain, data) => {
      try {
        await getUniMajor(domain, data);
      } catch (error) {
        console.log("getAllData", error);
      }
      navigation.navigate("SelectedUniMajor", {
        title: data,
      });
    };

    const handleRanking = async (min, max) => {
      let result = [];
      try {
        await getAllData();
        result = allData.filter(
          (item) => item.ranking > min && item.ranking < max
        );
        console.log("ass", result);
      } catch (error) {
        console.log("getAllData", error);
      }
      navigation.navigate("SelectedRanking", { rank: result, min, max });
    };

    useEffect(() => {
      setMasterDataSource(data);
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
        setSearch(text);
      }
    };

    const ItemView = ({ item }) => {
      return (
        <Text style={styles.itemStyle} onPress={() => handleCategories(item)}>
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

    const handleCategories = async (item) => {
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
        <TopRectangle
          height="12%"
          children="Categories Screen"
          children2="Select Your Goal"
          style1={styles.style1}
          back={false}
        ></TopRectangle>

        <View style={styles.contain}>
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
        <ScrollView>
          <View style={styles.container}>
            <CategoryTitle title="Universites" width={120} />
            <View style={{ flexDirection: "row" }}>
              <FlatList
                horizontal
                data={uniData}
                renderItem={({ item }) => (
                  <UniCard
                    onPress={() => handleCategory("uni", item.title)}
                    title={item.title}
                    subtitle={item.subtitle}
                    source={item.source}
                  />
                )}
                keyExtractor={(item) => item.title}
              />
            </View>
            <CategoryTitle title="Ranking" width={120} />
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View style={{ left: 10 }}>
                <AppButton
                  title="Choose Ranking"
                  titleColor="black"
                  onPress={() => setShowModal(true)}
                  color={colors.DARKGREEN}
                  width={160}
                />
              </View>
              <View style={{ left: 70 }}>
                <AppButton
                  title="Show "
                  titleColor="black"
                  color="white"
                  onPress={() => handleRanking(min, max)}
                />
              </View>
            </View>
            <View style={{ margin: 20 }} />
            <CategoryTitle title="Majors" width={120} />

            <View style={{ flexDirection: "row", margin: 17 }}>
              <FlatList
                horizontal
                data={majorData}
                renderItem={({ item }) => (
                  <MajorCard
                    onPress={() => handleCategory("major", item.title)}
                    icon={item.icon}
                    title={item.title}
                  />
                )}
                keyExtractor={(item) => item.title}
              />
            </View>
          </View>
        </ScrollView>
        <Modal transparent={true} visible={showModal}>
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                height: "60%",
                width: "80%",
                borderRadius: 5,

                paddingLeft: 50,
                justifyContent: "center",
              }}
            >
              <AppText style={{ fontWeight: "bold" }}>Min</AppText>
              <AppTextInput
                width={"80%"}
                onChangeText={(text) => setMin(text)}
              />
              <AppText style={{ fontWeight: "bold" }}>Max</AppText>
              <AppTextInput
                width={"80%"}
                onChangeText={(text) => setMax(text)}
              />
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Icon
                  name="check-circle"
                  backgroundColor={colors.TITLE}
                  iconColor="white"
                  size={50}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Screen>
    );
  }
);

const styles = StyleSheet.create({
  container: {},
  style1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.TITLE,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    // margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
  contain: {
    backgroundColor: "#48B13E",
    width: "90%",
    marginBottom: 15,
    alignSelf: "center",
    top: 5,
  },
});

export default CategoryScreen;

const uniData = [
  {
    title: "Boğaziçi",
    subtitle: "24 mentor",
    source: require("../../assets/uni1.jpg"),
  },
  {
    title: "Galatasaray ",
    subtitle: "12 mentor",
    source: require("../../assets/uni2.jpg"),
  },
  {
    title: "İtü",
    subtitle: "18 mentor",
    source: require("../../assets/uni4.jpg"),
  },
  {
    title: "Odtü",
    subtitle: "18 mentor",
    source: require("../../assets/uni3.jpg"),
  },
];

const majorData = [
  {
    icon: "code",
    title: "CS",
  },
  {
    icon: "user-md",
    title: "Medical",
  },
  {
    icon: "dollar",
    title: "Economy",
  },
  { icon: "gavel", title: "Law" },
  { icon: "calculator", title: "Math" },
];

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
