import React, { useState, useEffect } from "react";
import { View, StyleSheet, Switch } from "react-native";
import AppText from "../Components/AppText";
import Screen from "../Components/Screen";
import TopRectangle from "../Components/TopRectangle";
import { connect } from "react-redux";
import { getCurrentUserData, selectUserData } from "../Store/user";

import colors from "../style/colors";

const mapStateToProps = (state) => ({
  user: selectUserData(state),
});

export const Account = connect(mapStateToProps, {
  getCurrentUserData,
})(({ getCurrentUserData, navigation, user }) => {
  const handleGetCurrentUserData = async () => {
    try {
      await getCurrentUserData();
    } catch (error) {
      console.log("getCurrentUser", error);
    }
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  useEffect(() => {
    handleGetCurrentUserData();
  }, []);

  return (
    <Screen>
      <TopRectangle
        children="Account"
        style1={styles.style1}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <View style={styles.box}>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <AppText style={styles.text1}>UserName:</AppText>
          <AppText style={{ color: "black", left: 10 }}>
            {user.username}
          </AppText>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <AppText style={styles.text1}>Email</AppText>
          <AppText style={{ color: "black", left: 10 }}>{user.email}</AppText>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.container}>
          <AppText style={styles.preferences}>Notifications</AppText>
        </View>
        <View style={styles.row1}>
          <View style={{ position: "absolute", top: 30, flexDirection: "row" }}>
            <Switch
              trackColor={{ false: "#767577", true: colors.GREY }}
              thumbColor={isEnabled ? colors.TITLE : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <AppText style={styles.not}>
              Send an e-mail when the meeting time is near.
            </AppText>
          </View>
        </View>
        <View style={styles.row1}>
          <View style={{ position: "absolute", top: 60, flexDirection: "row" }}>
            <Switch
              trackColor={{ false: "#767577", true: colors.GREY }}
              thumbColor={isEnabled1 ? colors.TITLE : "#f4f3f4"}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
            <AppText style={styles.not}>
              Send an e-mail when the meeting is canceled.
            </AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
});

const styles = StyleSheet.create({
  container: {},
  style1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.TITLE,
  },
  notificationContainer: {
    top: 100,
  },
  preferences: {
    color: colors.TITLE,
    fontSize: 20,
    fontWeight: "bold",
    left: 10,
  },
  row1: {
    flexDirection: "row",
    left: 10,
  },
  box: {
    width: "80%",
    height: 100,
    backgroundColor: colors.BACKGROUND,
    borderRadius: 15,
    padding: 20,
    elevation: 15,
    marginVertical: 8,
    alignSelf: "center",
  },
  text1: {
    fontWeight: "bold",
    color: colors.TITLE,
  },
  not: {
    fontSize: 14,
  },
});

export default Account;
