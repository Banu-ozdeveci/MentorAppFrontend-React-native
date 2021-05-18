import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnlineScreen from "../Screens/OnlineScreen";
import MentorProfile from "../Screens/MentorProfile";
import MentorReviews from "../Screens/MentorReviews";
import MentorAvailability from "../Screens/MentorAvailability";
import PaymentScreen from "../Screens/PaymentScreen";
import ReservationScreen from "../Screens/ReservationScreen";

const { Navigator, Screen } = createStackNavigator();

export const OnlineStack = () => {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="OnlineScreen"
        component={OnlineScreen}
      />
      <Screen
        options={{ headerShown: false }}
        name="MentorAvailability"
        component={MentorAvailability}
      />
      <Screen
        options={{ headerShown: false }}
        name="MentorProfile"
        component={MentorProfile}
      />
      <Screen
        options={{ headerShown: false }}
        name="MentorReviews"
        component={MentorReviews}
      />
      <Screen
        options={{ headerShown: false }}
        name="PaymentScreen"
        component={PaymentScreen}
      />
      <Screen
        options={{ headerShown: false }}
        name="ReservationScreen"
        component={ReservationScreen}
      />
    </Navigator>
  );
};
