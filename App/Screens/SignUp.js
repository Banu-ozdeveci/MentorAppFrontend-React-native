import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Screen from "../Components/Screen";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../style/colors";
import { Formik } from "formik";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import * as Yup from "yup";

import { connect } from "react-redux";
import { signupUser, selectAuthStatus } from "../Store/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),

  username: Yup.string().required().label("Name"),
  password: Yup.string().required().min(4).label("Password"),
  confirm: Yup.string().required().min(4).label("Confirm Password"),
});

const mapStateToProps = (state) => ({
  authStatus: selectAuthStatus(state),
});

const SignUp = connect(mapStateToProps, {
  signupUser,
})(({ signupUser, navigation }) => {
  const [enableshift, setenableShift] = useState(false);
  return (
    <Screen>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
        <FontAwesome
          name="angle-left"
          size={30}
          color={colors.GREY}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        behavior="position"
        style={styles.container}
        enabled={enableshift}
      >
        <View>
          <Image
            style={styles.image}
            source={require("../../assets/login.jpg")}
          />
          <AppText style={styles.login}>Sign-Up</AppText>
          <Formik
            initialValues={{
              email: "",
              password: "",
              username: "",
              confirm: "",
            }}
            onSubmit={(values) => signupUser(values)}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <AppTextInput
                  placeholder="Name:"
                  onChangeText={handleChange("username")}
                  onBlur={() => setFieldTouched("username")}
                  onFocus={() => setenableShift(false)}
                />
                {touched.username && (
                  <AppText
                    style={{
                      color: "#BD0505",
                      fontWeight: "400",
                      alignSelf: "center",
                    }}
                  >
                    {errors.username}
                  </AppText>
                )}
                <AppTextInput
                  placeholder="Email:"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={() => setFieldTouched("email")}
                  onFocus={() => setenableShift(false)}
                />
                {touched.email && (
                  <AppText
                    style={{
                      color: "#BD0505",
                      fontWeight: "400",
                      alignSelf: "center",
                    }}
                  >
                    {errors.email}
                  </AppText>
                )}
                <AppTextInput
                  placeholder="Password:"
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  onFocus={() => setenableShift(true)}
                  secureTextEntry
                />
                {touched.password && (
                  <AppText
                    style={{
                      color: "#BD0505",
                      fontWeight: "400",
                      alignSelf: "center",
                    }}
                  >
                    {errors.password}
                  </AppText>
                )}
                <AppTextInput
                  placeholder="Confirm Password:"
                  onChangeText={handleChange("confirm")}
                  onBlur={() => setFieldTouched("confirm")}
                  onFocus={() => setenableShift(true)}
                  secureTextEntry
                />
                {touched.confirm && (
                  <AppText
                    style={{
                      color: "#BD0505",
                      fontWeight: "400",
                      alignSelf: "center",
                    }}
                  >
                    {errors.confirm}
                  </AppText>
                )}

                <View style={{ marginTop: 10 }}>
                  <AppButton
                    title="Sign-Up"
                    onPress={handleSubmit}
                    width={140}
                    titleColor={colors.DARKGREEN}
                    style={{ alignSelf: "center" }}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  image: {
    width: "96%",
    height: "30%",
    marginBottom: 16,
    alignSelf: "center",
  },

  icon: { left: 20, top: 10 },
  login: {
    alignSelf: "flex-start",
    fontSize: 30,
    left: 55,
    color: colors.TITLE,
    fontWeight: "bold",
    marginBottom: 10,
  },
  forget: {
    alignSelf: "flex-end",
    right: 30,
    margin: 5,
    color: colors.SOFTBLACK,
    fontSize: 14,
  },
  text1: {
    left: -8,
    fontSize: 14,
    top: 2,
  },
  signup: {
    color: colors.TITLE,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignUp;
