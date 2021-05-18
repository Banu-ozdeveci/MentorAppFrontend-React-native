import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  LogBox,
} from "react-native";
import TopRectangle from "../Components/TopRectangle";
import Filter from "../Components/Filter";
import FavMentor from "../Components/FavMentor";
import Screen from "../Components/Screen";
import { selectFavMentorsData, getFavMentors } from "../Store/mentors";
import { connect } from "react-redux";
import colors from "../style/colors";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";

const mapStateToProps = (state) => ({
  favMentors: selectFavMentorsData(state),
});

const WeekFavorites = connect(mapStateToProps, { getFavMentors })(
  ({ favMentors, navigation, getFavMentors }) => {
    const [data, setData] = useState(favMentors);
    const [visible, setVisible] = useState(false);

    const handleResetFilter = () => {
      setData(favMentors);
      setVisible(false);
    };
    LogBox.ignoreLogs(["Virtualized"]);
    LogBox.ignoreLogs(["YellowBox"]);
    const handleFavMentorsData = async () => {
      try {
        await getFavMentors();
      } catch (error) {
        console.log("App get fav mentor error", error);
      }
    };

    useEffect(() => {
      handleFavMentorsData();
    }, []);
    return (
      <Screen>
        <View style={styles.container}>
          <TopRectangle
            children="This Week's Favorites"
            onPress={() => navigation.navigate("Home")}
            style1={styles.style1}
          />
          <Filter onPress={() => setVisible(true)} />
          <ScrollView>
            {visible ? (
              <>
                <AppButton
                  left={7}
                  title="Reset Filters"
                  titleColor="black"
                  onPress={() => handleResetFilter()}
                />
                <AppTextInput
                  placeholder="Enter uni"
                  onChangeText={(text) =>
                    setData(
                      favMentors.filter((item) => {
                        const itemData = item.uni.toUpperCase();

                        const textData = text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                      })
                    )
                  }
                />
                <AppTextInput
                  placeholder="Enter major"
                  onChangeText={(text) =>
                    setData(
                      favMentors.filter((item) => {
                        const itemData = item.major.toUpperCase();

                        const textData = text.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                      })
                    )
                  }
                />
              </>
            ) : null}
            <FlatList
              contentContainerStyle={{
                width: "100%",
              }}
              numColumns={2}
              data={data}
              renderItem={({ item, index }) => (
                <FavMentor
                  onPress={() =>
                    navigation.navigate("MentorProfile", { data: item })
                  }
                  name={item.name}
                  uni={item.uni}
                  major={item.major}
                  price={item.price}
                  calls={item.calls}
                  number={index + 1}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>
      </Screen>
    );
  }
);

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1 },
  style1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.TITLE,
  },
});

export default WeekFavorites;
