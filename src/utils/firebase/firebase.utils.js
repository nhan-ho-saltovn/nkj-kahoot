import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVG_9N8M1A067ldYOvJ3Ml8jADj36xpKU",
  authDomain: "nkj-kahoot.firebaseapp.com",
  projectId: "nkj-kahoot",
  storageBucket: "nkj-kahoot.appspot.com",
  messagingSenderId: "471388920095",
  appId: "1:471388920095:web:0f0b2dc478de231bd5382a",
  measurementId: "G-BHHL0E6BBK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
