import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/HomeScreen";
import SurveyScreen from "../Screens/SurveyScreen";
import WeekFavorites from "../Screens/WeekFavorites";
import Recommendations from "../Screens/Recommendations";

import MentorProfile from "../Screens/MentorProfile";
import MentorReviews from "../Screens/MentorReviews";
import MentorAvailability from "../Screens/MentorAvailability";
import SelectedUniMajor from "../Screens/SelectedUniMajor";
import PaymentScreen from "../Screens/PaymentScreen";
import ReservationScreen from "../Screens/ReservationScreen";
const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator>
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Screen
        options={{ headerShown: false }}
        name="WeekFavorites"
        component={WeekFavorites}
      />
      <Screen
        options={{ headerShown: false }}
        name="Recommendations"
        component={Recommendations}
      />
      <Screen
        options={{ headerShown: false }}
        name="SurveyScreen"
        component={SurveyScreen}
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
        name="SelectedUniMajor"
        component={SelectedUniMajor}
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
