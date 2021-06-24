import React, { useState, useEffect } from "react";
import { View, StyleSheet, Switch } from "react-native";
import AppText from "../Components/AppText";
import Screen from "../Components/Screen";
import TopRectangle from "../Components/TopRectangle";
import { connect } from "react-redux";
import { selectAuthUser } from "../Store/auth";
import SettingItem from "../Components/SettingItem";

import colors from "../style/colors";

const mapStateToProps = (state) => ({
  user: selectAuthUser(state),
});

export const Account = connect(
  mapStateToProps,
  {}
)(({ navigation, user }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  return (
    <Screen>
      <TopRectangle
        children="Hesabım"
        style1={styles.style1}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <View style={styles.box}>
        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <AppText style={styles.text1}>UserName:</AppText>
          <AppText style={{ color: "black", left: 10 }}>
            {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </AppText>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 6 }}>
          <AppText style={styles.text1}>Email</AppText>
          <AppText style={{ color: "black", left: 10 }}>{user.email}</AppText>
        </View>
      </View>
      <View style={styles.items}>
        <SettingItem
          icon="comments"
          title="Mesajlarım"
          onPress={() => navigation.navigate("MessagesScreen")}
        />
        <SettingItem
          icon="heart"
          title="Favori Mentörlerim"
          onPress={() => navigation.navigate("MessagesScreen")}
        />
        <SettingItem
          icon="list"
          title="Görüşme Geçmişim"
          onPress={() => navigation.navigate("MessagesScreen")}
        />
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.container}>
          <AppText style={styles.preferences}>Bildirimler</AppText>
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
  items: {
    marginVertical: 30,

    width: "98%",
    alignSelf: "center",
  },
  notificationContainer: {
    top: 10,
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
