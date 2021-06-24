import React, { useState } from "react";
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
import { PasswordChange } from "../API";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(4).label("Password"),
  confirm: Yup.string()
    .required()
    .min(4)
    .label("Confirm Password")
    .oneOf([Yup.ref("password"), null], "Does not match with Password!"),
});

const ChangePassword = ({ navigation, route }) => {
  const email = route.params.email;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = async (password) => {
    try {
      const response = await PasswordChange(email, password);

      if (response.success) {
        setSuccess(response.data);
        setTimeout(() => {
          navigation.navigate("Login");
        }, 1000);
      } else {
        setError(response.error);
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    } catch (error) {
      console.log("handlePasswordChange error", error);
    }
  };

  return (
    <Screen>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/forgotpassword2.jpg")}
        />
        <AppText style={styles.login}>Change Password</AppText>
        {error ? (
          <AppText style={{ color: "red", alignSelf: "center" }}>
            {error}
          </AppText>
        ) : null}
        {success ? (
          <AppText style={{ color: colors.TITLE, alignSelf: "center" }}>
            {success}
          </AppText>
        ) : null}
        <Formik
          initialValues={{
            password: "",

            confirm: "",
          }}
          onSubmit={(values) => handlePasswordChange(values.password)}
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
                placeholder="Password:"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                height={60}
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
                height={60}
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

              <View style={{ marginTop: 30 }}>
                <AppButton
                  title="Change Password"
                  onPress={handleSubmit}
                  width={200}
                  titleColor={colors.DARKGREEN}
                  style={{ alignSelf: "center" }}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  image: {
    width: "46%",
    height: "30%",
    marginBottom: 20,
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

export default ChangePassword;
