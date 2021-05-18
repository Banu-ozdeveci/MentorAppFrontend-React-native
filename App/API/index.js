import * as firebase from "firebase";
import "./firebase";

//************************* */
export const getData = async () => {
  const products = [];
  let ref = {};
  try {
    ref = firebase.firestore().collection("mentors");

    const productsSnap = await ref.get();
    productsSnap.forEach((item) => {
      const data = item.data();
      products.push({
        id: item.id,
        ...data,
      });
    });
  } catch (e) {
    console.log("getData", e);
  }
  return products;
};

export const getUniMajorData = async (domain, data) => {
  const mentors = [];
  let ref = {};
  try {
    ref = firebase.firestore().collection("mentors").where(domain, "==", data);

    const mentorsSnap = await ref.get();
    mentorsSnap.forEach((item) => {
      const data = item.data();
      mentors.push({
        id: item.id,
        ...data,
      });
    });
  } catch (e) {
    console.log("getUniMajorData", e);
  }
  return mentors;
};

export const getOnlineMentorsData = async () => {
  const mentors = [];
  let ref = {};
  try {
    ref = firebase
      .firestore()
      .collection("mentors")
      .where("online", "==", true);

    const mentorsSnap = await ref.get();
    mentorsSnap.forEach((item) => {
      const data = item.data();
      mentors.push({
        id: item.id,
        ...data,
      });
    });
  } catch (e) {
    console.log("getOnlineMentorData", e);
  }
  return mentors;
};

export const getWeekFavData = async () => {
  const mentors = [];
  let ref = {};
  try {
    ref = firebase
      .firestore()
      .collection("mentors")

      .orderBy("calls", "desc")
      .limit(5);

    const mentorsSnap = await ref.get();
    mentorsSnap.forEach((item) => {
      const data = item.data();
      mentors.push({
        id: item.id,
        ...data,
      });
    });
  } catch (e) {
    console.log("getWeekFavData", e);
  }
  return mentors;
};

export const getRecommendedData = async (uni, major) => {
  let mentors = [];
  let data1 = [];
  let data2 = [];
  let ref = {};
  let ref1 = {};
  try {
    ref = firebase.firestore().collection("mentors").where("uni", "==", uni);

    const mentorsSnap = await ref.get();
    mentorsSnap.forEach((item) => {
      const data = item.data();
      data1.push({
        id: item.id,
        ...data,
      });
    });

    ref1 = firebase
      .firestore()
      .collection("mentors")
      .where("major", "==", major);

    const mentorsS = await ref1.get();
    mentorsS.forEach((item) => {
      const dataa = item.data();
      data2.push({
        id: item.id,
        ...dataa,
      });
    });

    mentors = [...data1, ...data2];
  } catch (e) {
    console.log("getRecommendedData", e);
  }
  return mentors;
};

export const getRanking = async (min, max) => {
  const mentors = [];
  let ref = {};
  try {
    ref = firebase
      .firestore()
      .collection("mentors")
      .where("ranking", ">=", min)
      .where("ranking", "<=", max);

    const mentorsSnap = await ref.get();
    mentorsSnap.forEach((item) => {
      const data = item.data();
      mentors.push({
        id: item.id,
        ...data,
      });
    });
  } catch (e) {
    console.log("getRanking Data", e);
  }
  return mentors;
};

export const addReservation = async (payload) => {
  try {
    console.log("auth", firebase.auth().currentUser.uid);
    const resRef = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid);

    const resSnap = await resRef.get();
    const resData = resSnap.data();
    console.log("reservation index", payload);
    resData.reservations.push(payload);

    resRef
      .set(
        {
          reservations: resData.reservations,
        },

        { merge: true }
      )
      .catch((error) => {
        console.log(
          "Something went wrong with added user to firestore: ",
          error
        );
      });
  } catch (error) {
    console.log("sendRes error", error);
  }
};
