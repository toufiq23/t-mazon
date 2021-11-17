import firebase from "firebase"
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsqMGy4tiiEfZmsQVwgSTw49OLaT4llbc",
  authDomain: "t-mazon.firebaseapp.com",
  projectId: "t-mazon",
  storageBucket: "t-mazon.appspot.com",
  messagingSenderId: "506249224490",
  appId: "1:506249224490:web:ba5934f753c798759b3e53",
  measurementId: "G-XPLN2PT0RG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()