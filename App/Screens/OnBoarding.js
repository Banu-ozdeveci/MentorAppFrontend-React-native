import React from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";

const { width, height } = Dimensions.get("window");

const onBoardings = [
  {
    img: require("../../assets/welcome.jpg"),
    style: {
      width: "88%",
      height: "52%",
      //justifyContent: "center",
      top: height / 4.5,
    },
  },
  {
    title: "Let's Help You Reach Your Goals",
    description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
    img: require("../../assets/Ob1.jpg"),
  },
  {
    title: "Choose your mentor according to your goal ",
    description: "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
    img: require("../../assets/ob2.jpg"),
  },
];

const OnBoarding = ({ navigation }) => {
  const [completed, setCompleted] = React.useState(false);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    scrollX.addListener(({ value }) => {
      if (Math.floor(value / width) === onBoardings.length - 1) {
        setCompleted(true);
      }
    });

    return () => scrollX.removeListener();
  }, []);

  // Render

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {onBoardings.map((item, index) => (
          <View
            //center
            //bottom
            key={`img-${index}`}
            style={styles.imageAndTextContainer}
          >
            <View
              style={{
                // flex: 1,
                alignItems: "center",
                // justifyContent: "flex-start",
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={[
                  {
                    width: "96%",
                    height: "58%",
                  },
                  item.style,
                ]}
              />
            </View>
            <View
              style={{
                position: "absolute",
                bottom: "40%",
                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 28,
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  color: "#696969",
                  fontWeight: "bold",
                  fontSize: 16,
                  top: 12,
                }}
              >
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 0,
                bottom: 20,
                width: 200,
                height: 60,
                paddingLeft: 39,
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.button}>
                {index === 2 ? "Get Started" : "Skip"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, width);

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [12, 20, 12],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  imageAndTextContainer: {
    width: width,
    marginTop: 30,
  },
  button: {
    color: "#48B13E",
    fontWeight: "bold",
    fontSize: 26,
    left: 4,
  },
  dotsRootContainer: {
    position: "absolute",
    bottom: height > 700 ? "12%" : "6%",
    left: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginBottom: 70,
    height: 45,
    backgroundColor: "#48B13E",
    width: 240,
    borderRadius: 35,
  },
  dot: {
    borderRadius: 12,
    backgroundColor: "white",
    marginHorizontal: 30,
  },
});

export default OnBoarding;
