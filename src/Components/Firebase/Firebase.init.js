import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const initialFirebase = () => {
  initializeApp(firebaseConfig);
};

export default initialFirebase;
