import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import TopRectangle from "../Components/TopRectangle";
import SettingItem from "../Components/SettingItem";
import Screen from "../Components/Screen";
import ProfileBox from "../Components/ProfileBox";
import colors from "../style/colors";
import { logOut, selectAuthUser } from "../Store/auth";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  user: selectAuthUser(state),
});

export const SettingsScreen = connect(mapStateToProps, {
  logOut,
})(({ navigation, user, logOut }) => {
  return (
    <Screen>
      <TopRectangle height={75} children="Ayarlar" style1={styles.title} />

      <View style={styles.container}>
        <ProfileBox
          name={user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          style={styles.profileBox}
        />
        <SettingItem
          icon="user"
          title="Hesabım"
          onPress={() => navigation.navigate("Account")}
        />
        <SettingItem
          icon="credit-card"
          title="Ödeme Geçmişi"
          onPress={() => navigation.navigate("PaymentDetails")}
        />
        <SettingItem
          icon="question"
          title="Mentör olmak ister misin?"
          onPress={() => navigation.navigate("MentorFormScreen")}
        />

        <SettingItem
          icon="info"
          title="Yardım"
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
