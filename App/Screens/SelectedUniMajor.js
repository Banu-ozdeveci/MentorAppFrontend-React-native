import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Screen from "../Components/Screen";
import MentorCard from "../Components/MentorCard";
import TopRectangle from "../Components/TopRectangle";
import Filter from "../Components/Filter";
import colors from "../style/colors";
import { selectUniMajorData } from "../Store/mentors";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  uniMajorData: selectUniMajorData(state),
});

export const SelectedUniMajor = connect(
  mapStateToProps,
  {}
)(({ route, navigation, uniMajorData }) => {
  const title = route.params.title;
  return (
    <Screen>
      <View style={styles.container}>
        <TopRectangle
          children={title}
          style1={styles.style1}
          onPress={() => navigation.navigate("CategoryScreen")}
        />
        <Filter />
        <FlatList
          numColumns={2}
          data={uniMajorData}
          renderItem={({ item }) => (
            <MentorCard
              name={item.name}
              uni={item.uni}
              major={item.major}
              price={item.price}
              online={item.online}
              onPress={() => navigation.navigate("MentorProfile")}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Screen>
  );
});

const styles = StyleSheet.create({
  container: { alignItems: "center", flex: 1 },
  style1: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.TITLE,
    textTransform: "uppercase",
  },
});

export default SelectedUniMajor;
