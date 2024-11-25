import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA5vxQ3Qer3MoaHHE99Y5NyBjc2CAwXK08",
  authDomain: "netflix-clone-9686e.firebaseapp.com",
  projectId: "netflix-clone-9686e",
  storageBucket: "netflix-clone-9686e.firebasestorage.app",
  messagingSenderId: "699053281143",
  appId: "1:699053281143:web:f902be903ffd70e1b31b72",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign-up function
const signUp = async (name, email, password) => {
  try {
    // Ensure email and password are strings
    email = String(email);
    password = String(password);

    console.log("Email:", email, "Password:", password); // Debugging logs

    // Basic email validation (optional)
    if (!email.includes("@")) {
      throw new Error("Invalid email format.");
    }

    // Check if email and password are valid
    if (typeof email !== 'string' || typeof password !== 'string') {
      throw new Error("Email and password must be strings.");
    }

    // Create user with email and password
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const userData = response.user;

    // Add user data to Firestore (in 'users' collection)
    await addDoc(collection(db, "users"), {
      uid: userData.uid,
      name,
      authProvider: "local",
      email,
    });

    console.log("User registered successfully");
  } catch (error) {
    console.error("Sign up error:", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Login function
const login = async (email, password) => {
  try {
    // Ensure email and password are strings
    email = String(email);
    password = String(password);

    // Sign in with email and password
    const userData = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in", userData.user);
  } catch (error) {
    console.error("Login error", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Logout error", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

export { auth, db, login, signUp, logout };
