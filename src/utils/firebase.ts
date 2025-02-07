import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEOJ30fEEMGj8ulMmLV7AIwD_FfABECHY",
  authDomain: "expensetracker-20785.firebaseapp.com",
  projectId: "expensetracker-20785",
  storageBucket: "expensetracker-20785.firebasestorage.app",
  messagingSenderId: "22779155647",
  appId: "1:22779155647:web:5aa1ca333cfc9f5322e20a",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
