import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDymG1Xb4i2nlE6_1CGK0hfVQLXZw8zRAw",
  authDomain: "rnauth-1c7bf.firebaseapp.com",
  projectId: "rnauth-1c7bf",
  storageBucket: "rnauth-1c7bf.firebasestorage.app",
  messagingSenderId: "610220046616",
  appId: "1:610220046616:web:0c42f5b0bfc5b938e2466d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);