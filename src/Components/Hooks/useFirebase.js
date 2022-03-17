import React, { useState } from "react";
import initialFirebase from "../Firebase/Firebase.init";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

initialFirebase();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // register new user

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth,email,password)
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //login existing user
  const loginUser = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setUser(error.message);
      });
  };

  //logout user

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {});
  };

  return {
    registerUser,
    loginUser,
    logOut,
  };
};

export default useFirebase;
