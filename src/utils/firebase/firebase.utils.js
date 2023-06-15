// Import necessary functions and modules from the Firebase SDK
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Configuration object containing Firebase project details
const firebaseConfig = {
  apiKey: "AIzaSyAxPBLcEQRyyD9iA1-TY6PCWKtpziLQzjc",
  authDomain: "crwn-clothing-db-f7887.firebaseapp.com",
  projectId: "crwn-clothing-db-f7887",
  storageBucket: "crwn-clothing-db-f7887.appspot.com",
  messagingSenderId: "124046210430",
  appId: "1:124046210430:web:d9407a18609b5b8f486f2f",
};

// Initialize Firebase app with the provided configuration
const firebaseApp = initializeApp(firebaseConfig);

// Create a new instance of GoogleAuthProvider for Google sign-in
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// Get the authentication service instance
export const auth = getAuth();

// Function to sign in with Google using a popup window
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Get the Firestore database service instance
export const db = getFirestore();

// Function to create a user document in the Firestore database
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); // Reference to the user document in the "users" collection

  // Check if the user document already exists
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    // If the user document doesn't exist, create it
    const { displayName, email } = userAuth; // Extract user information from the authentication object
    const createdAt = new Date();

    try {
      // Set the user document with the provided data
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  // Return the reference to the user document
  return userDocRef;
};
