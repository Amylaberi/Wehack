// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVY-9KQkeAPhX2PnSMr4mavkpfG-gepbI",
    authDomain: "budget-tracker-859dd.firebaseapp.com",
    projectId: "budget-tracker-859dd",
    storageBucket: "budget-tracker-859dd.firebasestorage.app",
    messagingSenderId: "1065485700136",
    appId: "1:1065485700136:web:df731e0b20e5f04327391d",
    measurementId: "G-79SXBBR85S"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth }; // Export the auth instance for use in your components
