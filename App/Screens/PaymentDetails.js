import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../Components/Screen";
import TopRectangle from "../Components/TopRectangle";
import AppText from "../Components/AppText";
import colors from "../style/colors";
import PaymentList from "../Components/PaymentList";

import { connect } from "react-redux";
import { selectAuthUser } from "../Store/auth";

const mapStateToProps = (state) => ({
  user: selectAuthUser(state),
});

export const PaymentDetails = connect(
  mapStateToProps,
  {}
)(({ navigation, user }) => {
  return (
    <Screen>
      <TopRectangle
        children="Ödeme Geçmişi"
        style1={styles.style1}
        onPress={() => navigation.navigate("SettingsScreen")}
      ></TopRectangle>
      <AppText style={styles.subtitle}>
        ({user.reservations.length}) Ödeme
      </AppText>
      <View style={styles.container}>
        {user.reservations.map((item) => (
          <PaymentList
            date={item.date}
            time={item.time}
            name={item.name}
            price={item.price}
          />
        ))}
      </View>
    </Screen>
  );
});
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  style1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.TITLE,
  },
  subtitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: colors.LIGHTBLACK,
    fontSize: 20,
    marginBottom: 20,
  },
});

export default PaymentDetails;
