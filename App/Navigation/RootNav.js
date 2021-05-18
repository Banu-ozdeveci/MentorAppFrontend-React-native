import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";

import Tabs from "./Tabs";
import { selectAuthStatus } from "../Store/auth";
import { AuthStack } from "./AuthStack";

const mapStateToProps = (state) => ({
  auth: selectAuthStatus(state),
});

export const RootNav = connect(mapStateToProps)(({ auth }) => (
  <NavigationContainer>{!auth ? <AuthStack /> : <Tabs />}</NavigationContainer>
));
