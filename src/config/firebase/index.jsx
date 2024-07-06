import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAGIAZufPQ2HndIvup82HAZLfdDwbeaeNo",
  authDomain: "fmp-project-de009.firebaseapp.com",
  databaseURL: "https://fmp-project-de009-default-rtdb.firebaseio.com",
  projectId: "fmp-project-de009",
  storageBucket: "fmp-project-de009.appspot.com",
  messagingSenderId: "976444028103",
  appId: "1:976444028103:web:1f82fec79ca19853047ae2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
