// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sedbuzz-7b0dd.firebaseapp.com",
  projectId: "sedbuzz-7b0dd",
  storageBucket: "sedbuzz-7b0dd.appspot.com",
  messagingSenderId: "456826613860",
  appId: "1:456826613860:web:da3d0578b0d00f7791ef71",
  measurementId: "G-BWG4PX1YWJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);