// import * as firebase from "firebase/app";
// import "firebase/messaging";

// export const initializeFirebase = () => {
//   var config = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//   };

//   firebase.initializeApp(config);
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// export const initializeFirebase = () => {
//   var config = {
//     apiKey: "AIzaSyBIdDXUyBEetVR1w2Xqy5xNEZWXyyQd4A8",
//     authDomain: "messyfeed-bf7f2.firebaseapp.com",
//     projectId: "messyfeed-bf7f2",
//     storageBucket: "messyfeed-bf7f2.appspot.com",
//     messagingSenderId: "456404882293",
//     appId: "1:456404882293:web:92a196fac47204d519f93c",
//   };

//   return firebase.initializeApp(config);
// };

const firebaseConfig = {
  apiKey: "AIzaSyBIdDXUyBEetVR1w2Xqy5xNEZWXyyQd4A8",
  authDomain: "messyfeed-bf7f2.firebaseapp.com",
  projectId: "messyfeed-bf7f2",
  storageBucket: "messyfeed-bf7f2.appspot.com",
  messagingSenderId: "456404882293",
  appId: "1:456404882293:web:92a196fac47204d519f93c",
};

// // Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(app);
