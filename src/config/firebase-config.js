import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX5RhX2kpSF4aTN11n-xSknPlaHU3YryI",
  authDomain: "recetario-882a9.firebaseapp.com",
  projectId: "recetario-882a9",
  storageBucket: "recetario-882a9.appspot.com",
  messagingSenderId: "861750366717",
  appId: "1:861750366717:web:cac9729b039482e50e4994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

// firebase login
// firebase init
// firebase deploy