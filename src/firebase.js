import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDT4jEDXoe-BIoYvGHO9yBISCFTbWvf6iQ",
  authDomain: "react-contact-22251.firebaseapp.com",
  projectId: "react-contact-22251",
  storageBucket: "react-contact-22251.appspot.com",
  messagingSenderId: "247874827437",
  appId: "1:247874827437:web:9bcc662c9f9aebaaee4224",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
