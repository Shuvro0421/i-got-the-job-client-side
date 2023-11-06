// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5wypISU-CKxYoPYemVb6bxfSLKEAak4U",
  authDomain: "i-got-the-job-auth.firebaseapp.com",
  projectId: "i-got-the-job-auth",
  storageBucket: "i-got-the-job-auth.appspot.com",
  messagingSenderId: "754173601299",
  appId: "1:754173601299:web:8e9ea708f58c1c934b01e6",
  measurementId: "G-0K79VVB8GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth