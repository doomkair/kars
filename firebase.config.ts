// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRJRLBUbZab31IGkdt3zyObqasBPPBuns",
  authDomain: "cars-3f3fd.firebaseapp.com",
  projectId: "cars-3f3fd",
  storageBucket: "cars-3f3fd.appspot.com",
  messagingSenderId: "381059255775",
  appId: "1:381059255775:web:8bc58773b9fa7984eb886a",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIRESTORE_AUTH = getAuth(FIREBASE_APP);
