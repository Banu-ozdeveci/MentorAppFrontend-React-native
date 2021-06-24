import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import OnBoarding from "../Screens/OnBoarding";
import ForgotPassword from "../Screens/ForgotPassword";
import ChangePassword from "../Screens/ChangePassword";

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />

      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};
