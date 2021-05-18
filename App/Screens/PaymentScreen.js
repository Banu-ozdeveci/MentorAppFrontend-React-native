import React, { Component, useState, useEffect } from "react";
import { View, UIManager, StyleSheet } from "react-native";

import AppButton from "../Components/AppButton";
import { addReservation } from "../API/index";
import { YellowBox } from "react-native";
import { getCurrentUserData, selectUserData } from "../Store/user";
import { connect } from "react-redux";
import colors from "../style/colors";
import Screen from "../Components/Screen";

YellowBox.ignoreWarnings(["Warning: ..."]);
import TopRectangle from "../Components/TopRectangle";

UIManager.setLayoutAnimationEnabledExperimental(true);

import { CreditCardInput } from "react-native-credit-card-input";

const mapStateToProps = (state) => ({
  user: selectUserData(state),
});

export const PaymentScreen = connect(mapStateToProps, {
  getCurrentUserData,
})(({ navigation, route, user, getCurrentUserData }) => {
  const { name, date, time, price } = route.params;

  const handleGetCurrentUserData = async () => {
    try {
      getCurrentUserData();
    } catch (error) {
      console.log("getCurrentUser", error);
    }
  };

  useEffect(() => {
    handleGetCurrentUserData();
  }, []);

  const handleReservation = () => {
    addReservation({
      name: name,
      date: date,
      time: time,
      price: price,
    });

    navigation.navigate("ReservationScreen");
  };

  const [color, setColor] = useState("red");
  return (
    <Screen>
      <TopRectangle
        height="12%"
        children="Payment Screen"
        onPress={() => navigation.navigate("MentorProfile")}
        style1={styles.style1}
      ></TopRectangle>
      <View style={styles.container}>
        <View style={styles.container}>
          <CreditCardInput
            autoFocus
            requireName={true}
            requireCVC={true}
            requirePostalCode={true}
            validColor="black"
            invalidColor="red"
            placeholderColor="darkgray"
            labelStyle={{ color: "black", fontSize: 12 }}
            inputStyle={{ color: "black", fontSize: 16 }}
            //onFocus={}
            onChange={(data) => {
              data.valid == true ? setColor("green") : null;
            }}
          />
          <View style={{ marginTop: 20 }}>
            <AppButton
              title="Pay"
              titleColor="black"
              color={color}
              onPress={() => handleReservation()}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "white",
  },
  style1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.TITLE,
  },
});

export default PaymentScreen;
