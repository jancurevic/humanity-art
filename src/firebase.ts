import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChpRo0uCRNv9OwgtMNTqvIfFfNO6WmjwU",
  authDomain: "vote-counter-4e05d.firebaseapp.com",
  projectId: "vote-counter-4e05d",
  storageBucket: "vote-counter-4e05d.firebasestorage.app",
  messagingSenderId: "492209509913",
  appId: "1:492209509913:web:78a4a796880be29bcefc88",
  measurementId: "G-V7B1YJPCCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Auth instances
export const db = getFirestore(app);
export const auth = getAuth(app);

// Automatically sign in anonymously
signInAnonymously(auth)
  .then(() => console.log("Signed in anonymously"))
  .catch(err => console.error("Firebase auth error:", err));
