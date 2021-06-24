import React from "react";
import { View, StyleSheet, Dimensions, Alert } from "react-native";
import PageRectangle from "../Components/PageRectangle";
import colors from "../style/colors";
import Screen from "../Components/Screen";
import ProfileNamePhoto from "../Components/ProfileNamePhoto";
import ProfileList from "../Components/ProfileList";
import AppText from "../Components/AppText";
import Calendar from "../Components/Calendar";
import BookingBox from "../Components/BookingBox";
import { connect } from "react-redux";
import { selectCurrentMentor } from "../Store/mentors";

const { width, height } = Dimensions.get("window");

const mapStateToProps = (state) => ({
  currentMentor: selectCurrentMentor(state),
});

const MentorAvailabilty = connect(
  mapStateToProps,
  {}
)(({ navigation, currentMentor }) => {
  const { name, availability, price } = currentMentor;

  return (
    <Screen>
      <View style={styles.container}>
        <PageRectangle
          index={2}
          onPress1={() => navigation.navigate("MentorProfile")}
          onPress3={() => navigation.navigate("MentorReviews")}
        />
        <ProfileNamePhoto
          name={name}
          onPress={() => navigation.navigate("Home")}
        />
        <View style={styles.column}>
          <Calendar width={180} height={50} />
          <AppText style={styles.this}>This Week</AppText>
          {availability.length !== 0 ? (
            availability.map((item, index) => (
              <BookingBox
                date={item.date}
                time={item.time}
                booked={item.booked}
                onPress={() => {
                  item.booked == true
                    ? Alert.alert("Already booked")
                    : navigation.navigate("PaymentScreen", {
                        name: name,
                        date: item.date,
                        time: item.time,
                        price: price,
                      });
                }}
              />
            ))
          ) : (
            <AppText>{name} is not available this week.</AppText>
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
    left: width / 2 - 85,
    top: height / 2 - 130,

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
  this: {
    marginTop: 30,
    fontSize: 20,
    color: colors.DARKGREEN,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default MentorAvailabilty;
