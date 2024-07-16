import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//
const firebaseConfig = {
};

// app => objeto com todas as configurações do Firebase
 export const app = initializeApp(firebaseConfig);
 // auth => objeto com as configurações de Authentication
 export const auth = getAuth(app);
 // db => objeto com as configurações do Firestore
 export const db = getFirestore(app);