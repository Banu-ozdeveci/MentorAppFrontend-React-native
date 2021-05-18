import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
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

import { signIn, selectAuthStatus } from "../Store/auth";
import { color } from "react-native-reanimated";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const mapStateToProps = (state) => ({
  authStatus: selectAuthStatus(state),
});

const Login = connect(mapStateToProps, {
  signIn,
})(({ signIn, navigation }) => {
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
              />
              {touched.password && (
                <AppText style={{ color: "#BD0505", fontWeight: "400" }}>
                  {errors.password}
                </AppText>
              )}

              <AppText style={styles.forget}>Forget Password?</AppText>

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
        <View style={{ flexDirection: "row", marginVertical: 10, top: 15 }}>
          <AppText style={styles.text1}>Don't Have an Account?</AppText>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SignUp")}
          >
            <AppText style={styles.signup}>Sign Up</AppText>
          </TouchableWithoutFeedback>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 40 }}>
          <Line width="15%" color={colors.DARKGREEN} />
          <AppText style={{ marginHorizontal: 20, margin: 10 }}>
            Or login with
          </AppText>
          <Line width="15%" color={colors.DARKGREEN} />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 2,
            bottom: 20,
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
    width: "80%",
    height: "25%",
    marginBottom: 16,
  },

  icon: { left: 20, top: 18 },
  login: {
    alignSelf: "flex-start",
    fontSize: 31,
    left: 55,
    color: colors.TITLE,
    fontWeight: "bold",
    marginBottom: 7,
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
