import React, { useEffect, useState } from "react";
import initialFirebase from "../Firebase/Firebase.init";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

initialFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // register new user

  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //login with google mama.
  const googleSignIn = () => {
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

  // manual login user

  const manualLoginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // special observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  }, []);

  return {
    user,
    error,
    registerUser,
    manualLoginUser,
    googleSignIn,
    logOut,
  };
};

export default useFirebase;
