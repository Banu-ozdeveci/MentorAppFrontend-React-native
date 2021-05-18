import * as firebase from "firebase";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCgJTaq_9GL8cHPjDe7CSyDoCN6922UBNw",
  authDomain: "mentorship-b5001.firebaseapp.com",
  databaseURL: "https://mentorship-b5001-default-rtdb.firebaseio.com/",
  projectId: "mentorship-b5001",
  storageBucket: "mentorship-b5001.appspot.com",
  messagingSenderId: "13776314395",
  appId: "1:13776314395:web:468bc31411c65d011b98be",
  measurementId: "G-2RF8CHVVRZ",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
