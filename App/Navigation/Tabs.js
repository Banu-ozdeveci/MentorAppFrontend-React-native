import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

import { HomeStack } from "./HomeStack";
import { OnlineStack } from "./OnlineStack";
import { CategoryStack } from "./CategoryStack";
import { ReservationStack } from "./ReservationStack";
import { SettingsStack } from "./SettingsStack";

import colors from "../style/colors";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelPosition: "below-icon",
          activeBackgroundColor: colors.TOPBACKGROUND,
          activeTintColor: colors.TITLE,
          inactiveBackgroundColor: colors.TOPBACKGROUND,
          inactiveTintColor: colors.LIGHTBLACK,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Online"
          component={OnlineStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="wifi" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          component={CategoryStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="bars" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Reservation"
          component={ReservationStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="cogs" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default Tabs;
