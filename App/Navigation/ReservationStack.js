import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReservationScreen from "../Screens/ReservationScreen";
import PaymentScreen from "../Screens/PaymentScreen";

const { Navigator, Screen } = createStackNavigator();

export const ReservationStack = () => {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="ReservationScreen"
        component={ReservationScreen}
      />
      <Screen
        options={{ headerShown: false }}
        name="PaymentScreen"
        component={PaymentScreen}
      />
    </Navigator>
  );
};
