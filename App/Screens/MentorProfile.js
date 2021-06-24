import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import PageRectangle from "../Components/PageRectangle";
import colors from "../style/colors";
import Screen from "../Components/Screen";
import ProfileNamePhoto from "../Components/ProfileNamePhoto";
import ProfileList from "../Components/ProfileList";
import AppText from "../Components/AppText";
import { connect } from "react-redux";
import StarRating from "react-native-star-rating";
import { getCurrentMentor, selectCurrentMentor } from "../Store/mentors";

const { width, height } = Dimensions.get("window");
const mapStateToProps = (state) => ({
  currentMentor: selectCurrentMentor(state),
});

export const MentorProfile = connect(mapStateToProps, { getCurrentMentor })(
  ({ route, navigation, getCurrentMentor, currentMentor }) => {
    const { _id, name, major, uni, ranking, year } = route.params.data;

    const handleGetCurrentProduct = async () => {
      try {
        await getCurrentMentor(_id);
      } catch (error) {
        console.log("handleGetCurrentMentor", error);
      }
    };

    useEffect(() => {
      handleGetCurrentProduct();
    }, []);

    return (
      <Screen>
        <View style={styles.container}>
          <PageRectangle
            index={1}
            onPress2={() => navigation.navigate("MentorAvailability")}
            onPress3={() => navigation.navigate("MentorReviews")}
          />
          <ProfileNamePhoto
            name={name}
            onPress={() => navigation.navigate("Home")}
          />
          <View style={{ position: "absolute", top: 230, left: 120 }}>
            <StarRating
              disabled={true}
              fullStarColor={colors.YELLOW}
              starSize={28}
              starStyle={{ margin: 4 }}
              containerStyle={{ marginTop: 8, width: 100 }}
              maxStars={5}
              rating={4.5}
            />
          </View>
          <View style={styles.column}>
            <ProfileList
              uni={uni}
              major={major}
              year={year}
              ranking={ranking}
            />
            <AppText style={styles.intro}>Details</AppText>
            <AppText style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sociis ac enim condimentum id pellentesque.
            </AppText>
          </View>
        </View>
      </Screen>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    position: "absolute",
    left: width / 2 - 65,
    top: height / 2 - 70,

    width: "63%",
    height: "55%",
  },
  intro: {
    fontWeight: "bold",
    fontSize: 24,
    right: 15,

    marginVertical: 20,
  },
  text: {
    bottom: 5,
    color: colors.LIGHTBLACK,
  },
});

export default MentorProfile;
