import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppText from "../Components/AppText";
import Screen from "../Components/Screen";
import AppButton from "../Components/AppButton";
import colors from "../style/colors";
import TopRectangle from "../Components/TopRectangle";
import Icon from "../Components/Icon";
import AppTextInput from "../Components/AppTextInput";

function Help({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Screen>
      <TopRectangle
        children="Help"
        style1={styles.style1}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <View style={styles.container}>
        <AppButton
          onPress={() => setShowModal(true)}
          title="About the App"
          width="80%"
          titleColor="black"
        />
        <View style={{ top: 25, marginBottom: 50 }}>
          <AppTextInput placeholder="Need Help?" width={"90%"} height={60} />
          <AppTextInput width={"90%"} height={50} />
        </View>
        <AppButton
          title="Send"
          width="40%"
          titleColor="black"
          onPress={() =>
            Alert.alert("We got your message, we will return you soon.")
          }
        />
        <Image source={require("../../assets/help.jpg")} style={styles.image} />
      </View>
      <Modal transparent={true} visible={showModal}>
        <View
          style={{
            backgroundColor: "#000000aa",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              height: "90%",
              width: "90%",
              borderRadius: 5,

              paddingLeft: 50,
            }}
          >
            <AppText
              style={{
                fontWeight: "bold",
                fontSize: 24,
                color: colors.TITLE,
                marginTop: 40,
                marginBottom: 30,
              }}
            >
              User Guide
            </AppText>

            <AppText style={styles.subtitle}>
              1)Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              pulvinar erat sociis purus at tristique. Volutpat nulla imperdiet
              laoreet commodo vitae turpis risus, duis dui.
            </AppText>
            <AppText style={styles.subtitle}>
              2) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              pulvinar erat sociis purus at tristique. Volutpat nulla imperdiet
              laoreet commodo vitae turpis risus, duis dui.
            </AppText>
            <AppText style={styles.subtitle}>
              3) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              pulvinar erat sociis purus at tristique. Volutpat nulla imperdiet
              laoreet commodo vitae turpis risus, duis dui.
            </AppText>

            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Icon
                name="check-circle"
                backgroundColor={colors.TITLE}
                iconColor="white"
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  style1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.TITLE,
  },
  subtitle: {
    marginVertical: 5,
    marginBottom: 10,
  },
  image: {
    width: 270,
    height: 200,
    top: 40,
  },
});

export default Help;
