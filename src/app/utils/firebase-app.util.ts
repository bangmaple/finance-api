// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMcLrJlbs6ynjKVbsa6NGFdsJJ-ByD3Zo",
  authDomain: "finance-55737.firebaseapp.com",
  projectId: "finance-55737",
  storageBucket: "finance-55737.appspot.com",
  messagingSenderId: "688198269840",
  appId: "1:688198269840:web:2d605ad1f6b8698ab49115"
};

// Initialize Firebase
export const initializeFirebaseApp = () => initializeApp(firebaseConfig);