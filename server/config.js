// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCMA_9F6uUvaa155PMoexDCz4QzFQfrMvk",
//   authDomain: "passwordmanagemen.firebaseapp.com",
//   projectId: "passwordmanagemen",
//   storageBucket: "passwordmanagemen.appspot.com",
//   messagingSenderId: "126315585746",
//   appId: "1:126315585746:web:58523078bfc15c7f260d0b"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCbRTM0eSuKFfoN1wyscgJqUW9Kpku3trM",
  authDomain: "rsa-password.firebaseapp.com",
  projectId: "rsa-password",
  storageBucket: "rsa-password.appspot.com",
  messagingSenderId: "334746649365",
  appId: "1:334746649365:web:2f65cf88596e43e4fbdf1c"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCb1zeNb6DP-Dz-IiC4MB8aImaExLv4pOw",
//   authDomain: "passwordmanager-e08e4.firebaseapp.com",
//   projectId: "passwordmanager-e08e4",
//   storageBucket: "passwordmanager-e08e4.appspot.com",
//   messagingSenderId: "256643935779",
//   appId: "1:256643935779:web:ec2760adc6e1eba26b8b96"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = getAuth(firebaseApp);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
// const app = initializeApp(firebaseConfig);