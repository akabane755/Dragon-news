// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVEjFLWBmm-LvJo5SoSt_aqWH9NrCwbaw",
  authDomain: "dragon-news-efb1c.firebaseapp.com",
  projectId: "dragon-news-efb1c",
  storageBucket: "dragon-news-efb1c.firebasestorage.app",
  messagingSenderId: "595418111313",
  appId: "1:595418111313:web:bbe6417716fddbc69e0770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};