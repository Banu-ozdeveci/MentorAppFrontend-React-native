import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Screen from "../Components/Screen";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../style/colors";
import { Formik } from "formik";
import AppTextInput from "../Components/AppTextInput";
import AppButton from "../Components/AppButton";
import AppText from "../Components/AppText";
import * as Yup from "yup";
import Line from "../Components/Line";
import Icon from "../Components/Icon";
import { connect } from "react-redux";

import { signIn, selectAuthError } from "../Store/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const mapStateToProps = (state) => ({
  authError: selectAuthError(state),
});

const Login = connect(mapStateToProps, {
  signIn,
})(({ signIn, navigation, authError }) => {
  return (
    <Screen>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("OnBoarding")}
      >
        <FontAwesome
          name="angle-left"
          size={30}
          color={colors.GREY}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/login.jpg")}
        />
        <AppText style={styles.login}>Login</AppText>
        {authError !== null ? (
          <AppText style={styles.authError}>{authError}</AppText>
        ) : null}
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => signIn(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            touched,
            errors,
            setFieldTouched,
          }) => (
            <>
              <AppTextInput
                placeholder="Email:"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                height={57}
              />
              {touched.email && (
                <AppText
                  style={{
                    color: "#BD0505",
                    fontWeight: "400",
                    right: 35,
                  }}
                >
                  {errors.email}
                </AppText>
              )}
              <AppTextInput
                placeholder="Password:"
                onChangeText={handleChange("password")}
                secureTextEntry
                height={57}
              />
              {touched.password && (
                <AppText style={{ color: "#BD0505", fontWeight: "400" }}>
                  {errors.password}
                </AppText>
              )}
              <TouchableOpacity
                style={styles.forget}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <AppText style={styles.forget}>Forgot Password?</AppText>
              </TouchableOpacity>

              <AppButton
                title="Login"
                onPress={handleSubmit}
                width={130}
                titleColor={colors.DARKGREEN}
                top={10}
              />
            </>
          )}
        </Formik>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 15,
            top: 15,
            marginBottom: 20,
          }}
        >
          <AppText style={styles.text1}>Don't Have an Account?</AppText>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SignUp")}
          >
            <AppText style={styles.signup}>Sign Up</AppText>
          </TouchableWithoutFeedback>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <Line width="15%" color={colors.DARKGREEN} />
          <AppText style={{ marginHorizontal: 20, marginTop: 10 }}>
            or Login with
          </AppText>
          <Line width="15%" color={colors.DARKGREEN} />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 2,
            top: -5,
          }}
        >
          <View style={{ right: 20 }}>
            <Icon
              name="envelope"
              backgroundColor={colors.TOPBACKGROUND}
              iconColor={colors.DARKGREEN}
            />
          </View>
          <View style={{ left: 20 }}>
            <Icon
              name="google"
              backgroundColor={colors.TOPBACKGROUND}
              iconColor={colors.DARKGREEN}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
});

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  image: {
    width: "58%",
    height: "23%",
    marginBottom: 16,
  },
  authError: {
    color: "red",
    alignSelf: "center",
  },
  icon: { left: 20, top: 18 },
  login: {
    alignSelf: "flex-start",
    fontSize: 31,
    left: 58,
    color: colors.TITLE,
    fontWeight: "bold",
    marginBottom: 2,
  },
  forget: {
    alignSelf: "flex-end",
    right: 30,
    margin: 5,
    color: colors.TITLE,
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
