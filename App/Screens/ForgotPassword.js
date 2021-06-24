import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import AppTextInput from "../Components/AppTextInput";
import Screen from "../Components/Screen";
import colors from "../style/colors";
import { FontAwesome } from "@expo/vector-icons";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import { PasswordForgot, CompareResetToken } from "../API";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [errorCompare, setErrorCompare] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [code, setCode] = useState(null);
  const [enableshift, setenableShift] = useState(false);

  const sendMail = async (email) => {
    setOpenModal(true);
    try {
      const response = await PasswordForgot(email);

      if (response.success) {
        setSuccess(response.data);
        setTimeout(() => {
          setSuccess(null);
        }, 5000);
      } else {
        setError(response.data);
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    } catch (error) {
      console.log("Send Email error", error);
    }
  };

  const Compare = async (code) => {
    try {
      const response = await CompareResetToken(code);

      if (response.success) {
        navigation.navigate("ChangePassword", { email });
      } else {
        setErrorCompare(response.error);
        setTimeout(() => {
          setErrorCompare(null);
        }, 5000);
      }
    } catch (error) {
      console.log("Compare ResetToken error", error);
    }
  };

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
        style={styles.kcontainer}
        behavior="position"
        enabled={enableshift}
      >
        <View style={styles.container}>
          <AppText style={styles.header}>Forgot Password ? </AppText>
          <Image
            style={styles.image}
            source={require("../../assets/forgotPassword.jpg")}
          />
          <AppText style={styles.infotext}>
            Please enter the email address you register your account with. We
            will send you reset password confirmation to this email
          </AppText>
          {error ? <AppText style={{ color: "red" }}>{error}</AppText> : null}
          {success ? (
            <AppText style={{ color: colors.TITLE }}>{success}</AppText>
          ) : null}
          {errorCompare ? (
            <AppText style={{ color: "red" }}>{errorCompare}</AppText>
          ) : null}
          <View style={{ alignSelf: "flex-start" }}>
            <AppTextInput
              width={300}
              marginVertical={35}
              placeholder="Email :"
              onChangeText={(mail) => setEmail(mail)}
              onFocus={() => setenableShift(false)}
            />
          </View>
          <View style={{ alignSelf: "flex-end", right: 20, top: -30 }}>
            <AppButton
              title="Send Verification Code"
              onPress={() => sendMail(email)}
              width={210}
              titleColor={colors.DARKGREEN}
              top={15}
            />
          </View>
          {openModal === true ? (
            <>
              <View style={{ alignSelf: "flex-start" }}>
                <AppTextInput
                  marginVertical={15}
                  placeholder="Verification Code :"
                  onChangeText={(a) => setCode(a)}
                  width={300}
                  onFocus={() => setenableShift(true)}
                />
              </View>
              <View
                style={{
                  alignSelf: "flex-end",

                  right: 20,
                  top: -20,
                }}
              >
                <AppButton
                  title="Confirm"
                  onPress={() => Compare(code)}
                  width={210}
                  titleColor={colors.DARKGREEN}
                  top={15}
                />
              </View>
            </>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", top: 10, flex: 1 },
  kcontainer: { alignItems: "center" },
  image: {
    width: "43%",
    height: "19%",
    marginBottom: 16,
    top: 15,
  },
  icon: { left: 20, top: 18 },
  infotext: {
    alignSelf: "center",
    marginVertical: 4,
    marginHorizontal: 25,
    color: colors.SOFTBLACK,
    fontSize: 16,
    padding: 6,
    borderColor: colors.DARKGREEN,
    borderWidth: 1,
  },
  header: {
    fontSize: 25,
    alignSelf: "center",
    color: colors.DARKGREEN,
    fontWeight: "bold",
    marginBottom: 9,
    bottom: 5,
  },
});

export default ForgotPassword;
