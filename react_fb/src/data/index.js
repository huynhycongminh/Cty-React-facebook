import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqY3jR471BcL_U1uSjtx7KUa1L5dj_q1E",
  authDomain: "react-facebook-project.firebaseapp.com",
  projectId: "react-facebook-project",
  storageBucket: "react-facebook-project.appspot.com",
  messagingSenderId: "985735259820",
  appId: "1:985735259820:web:6069047747b016ac3a6109",
  measurementId: "G-NHK4SVB3WD",
};

// export default firebase;
// Initialize Firebase
export const firebaseConnect = firebase.initializeApp(firebaseConfig);

//connect to firestore datastore use in retrieving data from multiple tables in firestore using redux
const baseDb = firebaseConnect.firestore();

//Firebase Authentication using in Login with email and password
export const auth = firebaseConnect.auth();

export default baseDb;
