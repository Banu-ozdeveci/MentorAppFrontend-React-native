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
import colors from "../style/colors";
import { connect } from "react-redux";

import { selectOnlineMentorData, getOnlineMentors } from "../Store/mentors";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";

const mapStateToProps = (state) => ({
  onlineMentors: selectOnlineMentorData(state),
});

const OnlineScreen = connect(mapStateToProps, {
  getOnlineMentors,
})(({ getOnlineMentors, onlineMentors, navigation }) => {
  const handleOnlineData = async () => {
    try {
      await getOnlineMentors();
    } catch (error) {
      console.log("App get Online error", error);
    }
  };

  const [data, setData] = useState(onlineMentors);
  const [visible, setVisible] = useState(false);

  const handleResetFilter = () => {
    setData(onlineMentors);
    setVisible(false);
  };

  useEffect(() => {
    handleOnlineData();
  }, []);
  LogBox.ignoreLogs(["Virtualized"]);
  LogBox.ignoreLogs(["YellowBox"]);
  return (
    <Screen>
      <View style={styles.container}>
        <TopRectangle
          children="Online Mentors"
          children2="Do a call now"
          back={false}
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
                    onlineMentors.filter((item) => {
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
                    onlineMentors.filter((item) => {
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
                onPress={() =>
                  navigation.navigate("MentorProfile", { data: item })
                }
                name={item.name}
                uni={item.uni}
                major={item.major}
                price={item.price}
                ranking={item.ranking}
                online={item.online}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </View>
    </Screen>
  );
});

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1 },
  style1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.TITLE,
  },
});

export default OnlineScreen;
