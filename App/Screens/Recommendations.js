import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  LogBox,
} from "react-native";
import Screen from "../Components/Screen";
import MentorCard from "../Components/MentorCard";
import TopRectangle from "../Components/TopRectangle";
import Filter from "../Components/Filter";
import { selectRecommendedMentorsData } from "../Store/mentors";
import colors from "../style/colors";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";

import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  recommended: selectRecommendedMentorsData(state),
});

const Recommendations = connect(
  mapStateToProps,
  {}
)(
  ({
    navigation,

    recommended,
  }) => {
    const [data, setData] = useState(recommended);
    const [visible, setVisible] = useState(false);

    const handleResetFilter = () => {
      setData(recommended);
      setVisible(false);
    };
    LogBox.ignoreLogs(["Virtualized"]);
    LogBox.ignoreLogs(["YellowBox"]);
    return (
      <Screen>
        <View style={styles.container}>
          <TopRectangle
            children="Recommended For You"
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
                      recommended.filter((item) => {
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
                      recommended.filter((item) => {
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
              numColumns={2}
              data={data}
              renderItem={({ item }) => (
                <MentorCard
                  name={item.name}
                  uni={item.uni}
                  major={item.major}
                  year={item.major}
                  price={item.price}
                  online={item.online}
                  ranking={item.ranking}
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

export default Recommendations;
