import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEZM1Z8vno5p7sSrVsuPM4NDclWm9YgjQ",
  authDomain: "keeper-46290.firebaseapp.com",
  projectId: "keeper-46290",
  storageBucket: "keeper-46290.appspot.com",
  messagingSenderId: "504054784273",
  appId: "1:504054784273:web:933ba35ebce8acdffd6cb0",
  measurementId: "G-F7DWVWRY55",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
