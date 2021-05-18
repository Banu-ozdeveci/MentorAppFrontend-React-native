import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../Screens/SettingsScreen";
import MentorFormScreen from "../Screens/MentorFormScreen";
import Account from "../Screens/Account";

import Help from "../Screens/Help";
import PaymentDetails from "../Screens/PaymentDetails";

const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <Screen
        options={{ headerShown: false }}
        name="MentorFormScreen"
        component={MentorFormScreen}
      />
      <Screen
        options={{ headerShown: false }}
        name="PaymentDetails"
        component={PaymentDetails}
      />
      <Screen
        options={{ headerShown: false }}
        name="Account"
        component={Account}
      />
      <Screen options={{ headerShown: false }} name="Help" component={Help} />
    </Navigator>
  );
};
