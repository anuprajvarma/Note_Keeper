// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCNSGBiE-MVefZAeSOlgh61Ej8zSb4dYbw",
  authDomain: "keeper-3ce7f.firebaseapp.com",
  projectId: "keeper-3ce7f",
  storageBucket: "keeper-3ce7f.appspot.com",
  messagingSenderId: "199988859933",
  appId: "1:199988859933:web:65362067d247620795a2f4",
  measurementId: "G-QYE6VNRQBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyBfdftXn-pKWhQr-hQ-xQMHoFn3oJhbXew",
//   authDomain: "notes-keeper-67cc5.firebaseapp.com",
//   projectId: "notes-keeper-67cc5",
//   storageBucket: "notes-keeper-67cc5.appspot.com",
//   messagingSenderId: "263512949666",
//   appId: "1:263512949666:web:75aa5ac2758583c24fe8fb",
//   measurementId: "G-32V2VW2J92",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { app, db };
