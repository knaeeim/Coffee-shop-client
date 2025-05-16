// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRW6X5OImlTHidIgy8yHT9Q-RERd6Mvgk",
  authDomain: "coffee-store-app-217d0.firebaseapp.com",
  projectId: "coffee-store-app-217d0",
  storageBucket: "coffee-store-app-217d0.firebasestorage.app",
  messagingSenderId: "325667734606",
  appId: "1:325667734606:web:163f4cf38789ec20966f1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);