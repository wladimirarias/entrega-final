// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCSZ5KEeGLX6vIFmvSi6wtGPaLbATBBTTg",
  authDomain: "tienda-88aa3.firebaseapp.com",
  projectId: "tienda-88aa3",
  storageBucket: "tienda-88aa3.appspot.com",
  messagingSenderId: "148460501850",
  appId: "1:148460501850:web:cffa2ba843554c2f351163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
