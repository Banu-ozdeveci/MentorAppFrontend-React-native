import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import PageRectangle from "../Components/PageRectangle";
import colors from "../style/colors";
import Screen from "../Components/Screen";
import ProfileNamePhoto from "../Components/ProfileNamePhoto";
import ProfileList from "../Components/ProfileList";
import AppText from "../Components/AppText";
import ReviewBox from "../Components/ReviewBox";
import { connect } from "react-redux";
import { selectCurrentMentor } from "../Store/mentors";

const { width, height } = Dimensions.get("window");

const mapStateToProps = (state) => ({
  currentMentor: selectCurrentMentor(state),
});

const MentorReviews = connect(
  mapStateToProps,
  {}
)(({ navigation, currentMentor }) => {
  const { name, reviews } = currentMentor;
  return (
    <Screen>
      <View style={styles.container}>
        <PageRectangle
          index={3}
          onPress2={() => navigation.navigate("MentorAvailability")}
          onPress1={() => navigation.navigate("MentorProfile")}
        />
        <ProfileNamePhoto
          name={name}
          onPress={() => navigation.navigate("Home")}
        />
        <View style={styles.column}>
          {reviews[0] != false && reviews ? (
            <AppText style={styles.feedback}>
              Feedback ({reviews.length})
            </AppText>
          ) : (
            <AppText style={styles.zero}> Feedback 0</AppText>
          )}

          {reviews[0] != false && reviews ? (
            reviews.map((item) => (
              <ReviewBox
                name={item.name}
                date={item.date}
                review={item.review}
              />
            ))
          ) : (
            <AppText style={styles.noReview}>
              {name} doesn't have any review.
            </AppText>
          )}
        </View>
      </View>
    </Screen>
  );
});

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
  feedback: {
    color: colors.DARKGREEN,
    fontSize: 19,
    fontWeight: "bold",
  },
  noReview: {
    fontWeight: "bold",
  },
  zero: {
    fontWeight: "bold",
    color: colors.TITLE,
    fontSize: 20,
    marginBottom: 30,
  },
});

export default MentorReviews;
