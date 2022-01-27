import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyDRZztjdxrgT1bWXe0PWVTHu0IrFg6AFWg",
    authDomain: "project-71-9b3c1.firebaseapp.com",
    projectId: "project-71-9b3c1",
    storageBucket: "project-71-9b3c1.appspot.com",
    messagingSenderId: "794020683812",
    appId: "1:794020683812:web:4fe23dce6bd413a53438b1"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


