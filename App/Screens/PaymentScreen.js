import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { PaymentView } from "../Components/PaymentView";
import axios from "axios";
import { selectAuthUser } from "../Store/auth";
import { connect } from "react-redux";
import SuccessScreen from "../Screens/SuccessScreen";
import { addReservation } from "../API";

const mapStateToProps = (state) => ({
  user: selectAuthUser(state),
});

const PaymentScreen = connect(mapStateToProps)(
  ({ user, navigation, route }) => {
    const { name, date, time, price } = route.params;

    const [response, setResponse] = useState();

    const [makePayment, setMakePayment] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState("");
    console.log("payment", user._id);
    const handleReservation = async () => {
      try {
        const res = await addReservation({
          id: user._id,
          name: name,
          date: date,
          time: time,
          price: price,
        });
        console.log("res", res);
      } catch (er) {
        console.log("handleRes", er);
      }
    };

    const cartInfo = {
      Price: price,

      Name: name,
      time: time,
      date: date,
    };

    const onCheckStatus = async (paymentResponse) => {
      setPaymentStatus("Ödemeniz doğrulanırken bekleyiniz!");
      setResponse(paymentResponse);
      console.log("paymentResponse", paymentResponse);

      let jsonResponse = JSON.parse(paymentResponse);
      // perform operation to check payment status

      try {
        const stripeResponse = await axios.post(
          "http://192.168.1.40:3000/api/payment",
          {
            email: "ozdevecibanu@gmail.com",
            product: cartInfo,
            authToken: jsonResponse,
          }
        );

        if (stripeResponse) {
          const { paid } = stripeResponse.data;
          if (paid === true) {
            setPaymentStatus("Payment Success");
          } else {
            setPaymentStatus("Payment failed due to some issue1,paid ==false");
          }
        } else {
          setPaymentStatus(
            " Payment failed due to some issue2,no stripe response"
          );
        }
      } catch (error) {
        console.log(error);
        setPaymentStatus(" Payment failed due to some issue3");
      }
    };

    const paymentUI = () => {
      if (!makePayment) {
        return (
          <View
            style={{
              //display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              backgroundColor: "#dcdcdc",
              flex: 1,
            }}
          >
            <Text
              style={{
                bottom: 140,
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: 28,
                margin: 10,
                color: "green",
              }}
            >
              ---Ödeme Bilgileri---
            </Text>
            <Text style={[styles.title, { bottom: 95, fontWeight: "bold" }]}>
              Ödenecek Tutar : {price}
            </Text>
            <Text style={[styles.title, { bottom: 95, fontWeight: "bold" }]}>
              Seçilen Mentör : {name}
            </Text>
            <Text style={[styles.title, { bottom: 95, fontWeight: "bold" }]}>
              Rezervasyon Tarihi: {date}
            </Text>
            <Text style={[styles.title, { bottom: 95, fontWeight: "bold" }]}>
              Saat: {time}
            </Text>

            <TouchableOpacity
              style={{
                height: 60,
                width: 250,
                backgroundColor: "green",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                setMakePayment(true);
              }}
            >
              <Text style={{ color: "#FFF", fontSize: 22 }}>Onayla</Text>
            </TouchableOpacity>
          </View>
        );

        // show to make payment
      } else {
        if (paymentStatus == "Payment Success") {
          handleReservation();
          return <SuccessScreen></SuccessScreen>;
        } else {
          return (
            <PaymentView
              onCheckStatus={onCheckStatus}
              product={name}
              amount={price}
            />
          );
        }
      }
    };

    return <View style={styles.container}>{paymentUI()}</View>;
  }
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  navigation: { flex: 2, backgroundColor: "red" },
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  footer: { flex: 1, backgroundColor: "cyan" },
  title: {
    marginVertical: 5,
    fontSize: 17,
  },
});

export default PaymentScreen;

// import React, { Component, useState, useEffect } from "react";
// import { View, UIManager, StyleSheet, LogBox } from "react-native";

// import AppButton from "../Components/AppButton";
// import { addReservation } from "../API/index";

// import { connect } from "react-redux";
// import colors from "../style/colors";
// import Screen from "../Components/Screen";

// LogBox.ignoreLogs(["Setting a timer"]);
// import TopRectangle from "../Components/TopRectangle";

// UIManager.setLayoutAnimationEnabledExperimental(true);
// import { selectAuthToken } from "../Store/auth";

// import { CreditCardInput } from "react-native-credit-card-input";

// const mapStateToProps = (state) => ({
//   user: selectAuthToken(state),
// });

// export const PaymentScreen = connect(
//   mapStateToProps,
//   {}
// )(({ navigation, route, user }) => {
//   const { name, date, time, price } = route.params;

//   const handleReservation = () => {
//     addReservation({
//       name: name,
//       date: date,
//       time: time,
//       price: price,
//     });

//     navigation.navigate("ReservationScreen");
//   };

//   const [color, setColor] = useState("red");
//   return (
//     <Screen>
//       <TopRectangle
//         height="12%"
//         children="Payment Screen"
//         onPress={() => navigation.navigate("MentorProfile")}
//         style1={styles.style1}
//       ></TopRectangle>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <CreditCardInput
//             autoFocus
//             requireName={true}
//             requireCVC={true}
//             requirePostalCode={true}
//             validColor="black"
//             invalidColor="red"
//             placeholderColor="darkgray"
//             labelStyle={{ color: "black", fontSize: 12 }}
//             inputStyle={{ color: "black", fontSize: 16 }}
//             //onFocus={}
//             onChange={(data) => {
//               data.valid == true ? setColor("green") : null;
//             }}
//           />
//           <View style={{ marginTop: 20 }}>
//             <AppButton
//               title="Pay"
//               titleColor="black"
//               color={color}
//               onPress={() => handleReservation()}
//             />
//           </View>
//         </View>
//       </View>
//     </Screen>
//   );
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 5,
//     backgroundColor: "white",
//   },
//   style1: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: colors.TITLE,
//   },
// });

// export default PaymentScreen;
