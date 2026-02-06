import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACHw0WcBnqc4HCJX57aOcxOq57Kl33JKY",
  authDomain: "tp-utn-bf4ca.firebaseapp.com",
  projectId: "tp-utn-bf4ca",
  storageBucket: "tp-utn-bf4ca.firebasestorage.app",
  messagingSenderId: "929024556272",
  appId: "1:929024556272:web:710c49b04bac47f6f6d635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}