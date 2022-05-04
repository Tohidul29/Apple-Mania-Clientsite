// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoqMBBBNfNbsZy5yh2fOYhB7ux8v0Pb94",
  authDomain: "assignment-11-df587.firebaseapp.com",
  projectId: "assignment-11-df587",
  storageBucket: "assignment-11-df587.appspot.com",
  messagingSenderId: "752531221218",
  appId: "1:752531221218:web:a0541778ae1ed5ea724cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;