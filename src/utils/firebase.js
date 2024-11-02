// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnC2DH2Z3kCSQeC9dDRP2V9_BcXEWCAqQ",
  authDomain: "netflixgpt-d2732.firebaseapp.com",
  projectId: "netflixgpt-d2732",
  storageBucket: "netflixgpt-d2732.firebasestorage.app",
  messagingSenderId: "319614439142",
  appId: "1:319614439142:web:0f7c5364a5dffdeae6b527",
  measurementId: "G-QQQ14JJJ6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();