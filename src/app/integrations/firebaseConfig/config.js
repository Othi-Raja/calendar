// app/integrations/firebase/config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZrXqVD7NVdYOVAzjDko-ONksRoMTc7ho",
  authDomain: "portfolioformdata-4caae.firebaseapp.com",
  databaseURL: "https://portfolioformdata-4caae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolioformdata-4caae",
  storageBucket: "portfolioformdata-4caae.appspot.com",
  messagingSenderId: "51070256017",
  appId: "1:51070256017:web:9395f746a33189a57c1030",
  measurementId: "G-PEYFMT3DE4"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
