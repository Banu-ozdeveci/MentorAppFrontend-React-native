import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import OnBoarding from "../Screens/OnBoarding";

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
    </Navigator>
  );
};
