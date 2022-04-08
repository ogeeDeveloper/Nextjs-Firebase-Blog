// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF058XSqtw18VWGu0VxNaIexMQedinot0",
  authDomain: "next-firebase-blog-a5a1f.firebaseapp.com",
  projectId: "next-firebase-blog-a5a1f",
  storageBucket: "next-firebase-blog-a5a1f.appspot.com",
  messagingSenderId: "260659695322",
  appId: "1:260659695322:web:e94580f2a710a7e830dfe3"
};

// Initialize Firebase and make sure that firebase only initialize once
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider()

export const firestore = getFirestore(app);
export const storage = getStorage(app)
