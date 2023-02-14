// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ36mfFXRY4bPrqc_zB0DxtFH9TT5RhfQ",
  authDomain: "vcrm-15e56.firebaseapp.com",
  projectId: "vcrm-15e56",
  storageBucket: "vcrm-15e56.appspot.com",
  messagingSenderId: "88570923739",
  appId: "1:88570923739:web:3c0816dd08f8d84adc5afe",
  measurementId: "G-GY55Y411HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);