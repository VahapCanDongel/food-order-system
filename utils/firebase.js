// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdVxghxVN2rpBK8sLf0m5p6DBtntO1W_I",
  authDomain: "food-ord-b2e87.firebaseapp.com",
  projectId: "food-ord-b2e87",
  storageBucket: "food-ord-b2e87.appspot.com",
  messagingSenderId: "161302099584",
  appId: "1:161302099584:web:38718b44fc7a3b81421865",
  measurementId: "G-QV42NNW5WP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
