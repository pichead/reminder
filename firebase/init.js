// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc,query,orderBy,limit,where   } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWAZQA76zuTULA_idrDiyq99bXZjudjUU",
  authDomain: "me-remind-me.firebaseapp.com",
  projectId: "me-remind-me",
  storageBucket: "me-remind-me.appspot.com",
  messagingSenderId: "608898568782",
  appId: "1:608898568782:web:c7d182a63fc7a6d0cc691f",
  measurementId: "G-4GEPXK4LTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,db, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc ,query,orderBy ,limit ,where
}