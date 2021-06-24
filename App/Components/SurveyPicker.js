import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import AppText from "./AppText";
import colors from "../style/colors";
import Line from "./Line";
import { AntDesign } from "@expo/vector-icons";
import Screen from "./Screen";
import SurveyPickerItem from "./SurveyPickerItem";
import AppButton from "../Components/AppButton";

function SurveyPicker({ title, data, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.iconContainer}>
          <AntDesign name="caretdown" color="#48B13E" size={22} />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.column}>
        <AppText style={styles.title}>
          {selectedItem ? selectedItem.label : title}
        </AppText>
        <Line width={180} style={styles.line} height={2} />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <AppButton
            title="Kapat"
            onPress={() => setModalVisible(false)}
            width={"90%"}
            titleColor={"white"}
            color={colors.DARKGREEN}
            style={{ alignSelf: "center", marginBottom: 20 }}
          />
          <FlatList
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <SurveyPickerItem
                text={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 22,
    alignItems: "center",
    marginHorizontal: 57,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  line: {
    top: 20,
  },
  column: {
    left: 26,
    alignItems: "center",
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: colors.TOPBACKGROUND,
    elevation: 20,
    alignItems: "center",
    justifyContent: "center",
    top: 6,
  },
});

export default SurveyPicker;
