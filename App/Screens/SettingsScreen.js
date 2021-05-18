import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TopRectangle from "../Components/TopRectangle";
import SettingItem from "../Components/SettingItem";
import Screen from "../Components/Screen";
import ProfileBox from "../Components/ProfileBox";
import colors from "../style/colors";
import { logOut } from "../Store/auth";
import { connect } from "react-redux";
import { getCurrentUserData, selectUserData } from "../Store/user";

const mapStateToProps = (state) => ({
  user: selectUserData(state),
});

export const SettingsScreen = connect(mapStateToProps, {
  getCurrentUserData,
  logOut,
})(({ getCurrentUserData, navigation, user, logOut }) => {
  const handleGetCurrentUserData = async () => {
    try {
      await getCurrentUserData();
    } catch (error) {
      console.log("getCurrentUser", error);
    }
  };

  useEffect(() => {
    handleGetCurrentUserData();
  }, []);

  return (
    <Screen>
      <TopRectangle height={75} children="Settings" style1={styles.title} />

      <View style={styles.container}>
        <ProfileBox name={user.username} style={styles.profileBox} />
        <SettingItem
          icon="user"
          title="Account"
          onPress={() => navigation.navigate("Account")}
        />
        <SettingItem
          icon="credit-card"
          title="Payment Details"
          onPress={() => navigation.navigate("PaymentDetails")}
        />
        <SettingItem
          icon="questtion"
          title="Want to be a mentor"
          onPress={() => navigation.navigate("MentorFormScreen")}
        />

        <SettingItem
          icon="info"
          title="Help"
          onPress={() => navigation.navigate("Help")}
        />
        <SettingItem icon="sign-out" title="Logout" onPress={() => logOut()} />
      </View>
    </Screen>
  );
});

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  title: {
    color: colors.TITLE,
    fontWeight: "bold",
    fontSize: 26,
  },
  profileBox: {
    top: -8,
  },
});

export default SettingsScreen;
