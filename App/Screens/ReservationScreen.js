import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Alert, Image } from "react-native";
import Screen from "../Components/Screen";
import Calendar from "../Components/Calendar";
import TopRectangle from "../Components/TopRectangle";
import AppText from "../Components/AppText";
import colors from "../style/colors";
import ReservationDate from "../Components/ReservationDate";
import ReservationLine from "../Components/ReservationLine";
import MyReservationBox from "../Components/MyReservationBox";
import AppButton from "../Components/AppButton";
import { getCurrentUserData, selectUserData } from "../Store/user";
import { connect } from "react-redux";
import ListItem from "../Components/ListItem";
import Line from "../Components/Line";

const mapStateToProps = (state) => ({
  user: selectUserData(state),
});

export const ReservationScreen = connect(mapStateToProps, {
  getCurrentUserData,
})(({ getCurrentUserData, navigation, user }) => {
  const handleGetCurrentUserData = async () => {
    try {
      await getCurrentUserData();
    } catch (error) {
      console.log("getCurrentUser", error);
    }
  };
  const res = user.reservations;

  useEffect(() => {
    handleGetCurrentUserData();
  }, []);
  return (
    <Screen>
      <TopRectangle
        children="My Reservations"
        style1={styles.style1}
        back={false}
      />
      <View style={styles.container}>
        <Calendar width={170} height={60} style={{ marginVertical: 12 }} />
        <AppText style={styles.title}>This Week</AppText>
        {res.length !== 0 ? (
          <FlatList
            data={res}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "column" }}>
                <ReservationDate date={item.date} />
                <MyReservationBox time1={item.time} name={item.name} />
                <Line />
              </View>
            )}
            keyExtractor={(item) => item.date}
          />
        ) : (
          <View style={styles.warn}>
            <Image
              source={require("../../assets/warning.jpg")}
              style={styles.image}
            />
            <AppText style={styles.warning}>
              You don't have a reservation yet.
            </AppText>
          </View>
        )}
        <AppButton
          style={{
            justifyContent: "flex-end",
            alignSelf: "center",
            bottom: 30,
          }}
          title="Meeting Screen"
          color={colors.DARKGREEN}
          titleColor="white"
          width={220}
          icon="arrow-right"
          left={-35}
          onPress={() => Alert.alert("You don't Have Meeting now ")}
        />
      </View>
    </Screen>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontWeight: "bold",
    color: colors.DARKGREEN,
    margin: 10,
    fontSize: 20,
    marginVertical: 10,
  },
  style1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.TITLE,
  },
  warning: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 100,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 30,
  },
  warn: {
    alignItems: "center",
  },
});

export default ReservationScreen;
