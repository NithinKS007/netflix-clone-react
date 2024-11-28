import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc,setDoc, } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "./fireBaseConfig";

const signUp = async (name, email, password) => {
  try {
    email = String(email);
    password = String(password);

    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userData = response.user;

    await setDoc(doc(db, "users",userData.uid), {
      uid: userData.uid,
      name,
      authProvider: "local",
      email,
    });

    toast.success("User signed up successfully!");
  } catch (error) {
    const errorMessage = handleErrorMessage(error);
    toast.error(`Sign-up failed : ${errorMessage}`);
  }
};

const login = async (email, password) => {
  try {
    email = String(email);
    password = String(password);

   await signInWithEmailAndPassword(auth, email, password);

    toast.success("Login successful!");
  } catch (error) {
    const errorMessage = handleErrorMessage(error);
    toast.error(`Login failed : ${errorMessage}`);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.success("You have logged out successfully.");
  } catch (error) {
    const errorMessage = handleErrorMessage(error);
    toast.error(`Logout failed : ${errorMessage}`);
  }
};

const handleErrorMessage = (error) => {
  const errorMessage = error.code
    ? error.code.split("/")[1].split("-").join(" ")
    : "An unknown error occurred";
  return errorMessage;
};

export { auth, db, login, signUp, logout };
