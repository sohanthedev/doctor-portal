// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASbkc_i1CCpkvlxC2vUaRp0L6bDvd9Is8",
  authDomain: "doctor-portal-aca1c.firebaseapp.com",
  projectId: "doctor-portal-aca1c",
  storageBucket: "doctor-portal-aca1c.appspot.com",
  messagingSenderId: "1038869563088",
  appId: "1:1038869563088:web:3861c91f5e5246068440d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;