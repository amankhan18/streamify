// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7kl8Pe_IySGoSF4iohuH0JZ2nTiPXTEk",
  authDomain: "streamify-903bc.firebaseapp.com",
  projectId: "streamify-903bc",
  storageBucket: "streamify-903bc.firebasestorage.app",
  messagingSenderId: "1070250668445",
  appId: "1:1070250668445:web:042f133994e7a4dc84ff74",
  measurementId: "G-RCQWT61P2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();