// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjcqV5nsSiJfR-O-qdKdigv970j7DpoaY",
  authDomain: "lily-readly.firebaseapp.com",
  projectId: "lily-readly",
  storageBucket: "lily-readly.firebasestorage.app",
  messagingSenderId: "274286258522",
  appId: "1:274286258522:web:3e61941904b62aaa4d6b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);