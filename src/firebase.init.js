// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3jakivHlKcGFi2jDOEOFv4oHDjqVMnFE",
  authDomain: "simple-firebase-auth-930de.firebaseapp.com",
  projectId: "simple-firebase-auth-930de",
  storageBucket: "simple-firebase-auth-930de.appspot.com",
  messagingSenderId: "446939872261",
  appId: "1:446939872261:web:a54276ecfc456bcbc7f06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app