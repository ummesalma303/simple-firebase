// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKAhjZshupDc9MkVekdaWgldR9vSEuQrA",
  authDomain: "simple-firebase-490fa.firebaseapp.com",
  projectId: "simple-firebase-490fa",
  storageBucket: "simple-firebase-490fa.firebasestorage.app",
  messagingSenderId: "337787084760",
  appId: "1:337787084760:web:8f961f9d90ca81d11fdcad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);