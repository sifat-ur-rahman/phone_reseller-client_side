// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFLTnenV7j-2Y7AgrLfRJdu2tOvUqjtyo",
  authDomain: "phone-reseller-1a73e.firebaseapp.com",
  projectId: "phone-reseller-1a73e",
  storageBucket: "phone-reseller-1a73e.appspot.com",
  messagingSenderId: "563922424432",
  appId: "1:563922424432:web:919172bbcc782f065a1ab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app