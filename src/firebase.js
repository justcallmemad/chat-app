// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgCzYBKa4y3H3PjBKUBJ1h64UAQGzujFs",
  authDomain: "chat-app-650ca.firebaseapp.com",
  projectId: "chat-app-650ca",
  storageBucket: "chat-app-650ca.appspot.com",
  messagingSenderId: "1090842924183",
  appId: "1:1090842924183:web:b7f93d244bd0c5b49205d2",
  measurementId: "G-E87ZMBHXS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
export const db = getFirestore(app);