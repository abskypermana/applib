// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUqx9jdEOgd4ct8_70U2FbCZvRl7LE8d8",
  authDomain: "applib-320cf.firebaseapp.com",
  projectId: "applib-320cf",
  storageBucket: "applib-320cf.appspot.com",
  messagingSenderId: "459415683423",
  appId: "1:459415683423:web:1f7f1ee2695d55ad0176ea",
  measurementId: "G-HN94CKW0L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
//const analytics = getAnalytics(app);