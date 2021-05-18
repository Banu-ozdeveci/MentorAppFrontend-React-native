import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "../Screens/CategoryScreen";
import SelectedUniMajor from "../Screens/SelectedUniMajor";
import SelectedRanking from "../Screens/SelectedRanking";
import MentorProfile from "../Screens/MentorProfile";
import MentorReviews from "../Screens/MentorReviews";
import MentorAvailability from "../Screens/MentorAvailability";
import PaymentScreen from "../Screens/PaymentScreen";
import ReservationScreen from "../Screens/ReservationScreen";

const { Navigator, Screen } = createStackNavigator();

export const CategoryStack = () => {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="CategoryScreen"
        component={CategoryScreen}
      />
      <Screen
        options={{ headerShown: false }}
        name="SelectedUniMajor"
        component={SelectedUniMajor}
      />
      <Screen
        options={{ headerShown: false }}
        name="SelectedRanking"
        component={SelectedRanking}
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
