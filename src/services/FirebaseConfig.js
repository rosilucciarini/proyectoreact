// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX5gsUaaLpniXXZkiz7WAgNN__YW2tlJk",
  authDomain: "reactproyecto-dea0a.firebaseapp.com",
  projectId: "reactproyecto-dea0a",
  storageBucket: "reactproyecto-dea0a.appspot.com",
  messagingSenderId: "1081861576508",
  appId: "1:1081861576508:web:c53837c0e40bbacfae7039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);