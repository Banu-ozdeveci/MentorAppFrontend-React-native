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
import { SendHelpMessage } from "../API/index";
import { connect } from "react-redux";
import { selectAuthUser } from "../Store/auth";

const mapStateToProps = (state) => ({
  user: selectAuthUser(state),
});

const Help = connect(
  mapStateToProps,
  {}
)(({ navigation, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  let text = text1 + " " + text2 + " " + " " + text3;

  const handleSendMessage = async (message) => {
    try {
      const res = await SendHelpMessage(user.email, message);

      res.status == 200
        ? Alert.alert("Mesajını aldık. En kısa zamanda geri dönüş yapacağız.")
        : Alert.alert("Mesaj gönderilemedi.");
    } catch (er) {
      console.log("error Send Message", er);
    }
  };
  return (
    <Screen>
      <TopRectangle
        children="Yardım"
        style1={styles.style1}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <View style={styles.container}>
        <AppButton
          onPress={() => setShowModal(true)}
          title="Uygulama Hakkında"
          width="80%"
          titleColor="black"
        />
        <View style={{ top: 25, marginBottom: 50 }}>
          <AppTextInput
            placeholder="Nasıl Yardımcı olabiliriz ?"
            width={"90%"}
            height={60}
            onChangeText={(text) => setText1(text)}
          />
          <AppTextInput
            width={"90%"}
            height={50}
            onChangeText={(text) => setText2(text)}
          />
          <AppTextInput
            width={"90%"}
            height={50}
            onChangeText={(text) => setText3(text)}
          />
        </View>
        <AppButton
          title="Gönder"
          width="40%"
          titleColor="black"
          onPress={() => handleSendMessage(text)}
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
              height: "95%",
              width: "95%",
              borderRadius: 5,

              padding: 50,
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
              1) Kategori kısmından kendine uygun mentörü bulabilirsin.Şu anda
              görüşme yapmak istiyorsan online olan mentörlerden birini seç.
            </AppText>
            <AppText style={styles.subtitle}>
              2) Rezervasyon yapmak içi mentörün uygun olduğu saatlerden
              birisini seç ve ödemeni yaptıktan sonra reservasyonun onaylanacak.
            </AppText>
            <AppText style={styles.subtitle}>
              3) Üniversite öğrencisiysen ve mentör olmak istiyorsan mentör
              formunu doldurabilirsin. En kısa zamanda sana geri döneceğiz.
            </AppText>

            <TouchableOpacity
              style={{ top: 20 }}
              onPress={() => setShowModal(false)}
            >
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
});

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
