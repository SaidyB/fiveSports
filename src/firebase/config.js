// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJJ_ZM80luqyFmMzP2OhV_3Qv_XX1h764",
  authDomain: "team5-fb30b.firebaseapp.com",
  projectId: "team5-fb30b",
  storageBucket: "team5-fb30b.appspot.com",
  messagingSenderId: "131626139840",
  appId: "1:131626139840:web:8fe02fe2caf9c2576b2d25",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
