// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB86EilrBBW9iPpJR8eXF-nW6chqcs2GHs",
  authDomain: "gym-projects-87b8b.firebaseapp.com",
  projectId: "gym-projects-87b8b",
  storageBucket: "gym-projects-87b8b.firebasestorage.app",
  messagingSenderId: "29169334908",
  appId: "1:29169334908:web:b19a741b8d1794514de7f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)