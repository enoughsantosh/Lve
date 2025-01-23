// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyDLW0P7Op6coJkNzJj0ck9pLNdneJplcbI",
    authDomain: "love-6996.firebaseapp.com",
    projectId: "love-6996",
    storageBucket: "love-6996.firebasestorage.app",
    messagingSenderId: "1050433920317",
    appId: "1:1050433920317:web:99246747017f6bdca1b954",
    measurementId: "G-EKDTE6WQY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase modules
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
