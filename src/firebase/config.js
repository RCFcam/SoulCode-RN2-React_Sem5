import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//
const firebaseConfig = {
  apiKey: "AIzaSyBaLugrW4T-_HH07dj_-15mCrtt2H6axGI",
  authDomain: "my-taskro.firebaseapp.com",
  projectId: "my-taskro",
  storageBucket: "my-taskro.appspot.com",
  messagingSenderId: "408771440842",
  appId: "1:408771440842:web:d08d53cddb886933d34433"
};

// app => objeto com todas as configurações do Firebase
 export const app = initializeApp(firebaseConfig);
 // auth => objeto com as configurações de Authentication
 export const auth = getAuth(app);
 // db => objeto com as configurações do Firestore
 export const db = getFirestore(app);