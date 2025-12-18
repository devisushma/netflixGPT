// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZhh3amI4R2_hF_ID4FPpsofRnmvGN-rs",
  authDomain: "gptnetflix-15ca4.firebaseapp.com",
  projectId: "gptnetflix-15ca4",
  storageBucket: "gptnetflix-15ca4.firebasestorage.app",
  messagingSenderId: "604416707036",
  appId: "1:604416707036:web:c4ae3770eb033abc4be719",
  measurementId: "G-WW6KFMC4XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();