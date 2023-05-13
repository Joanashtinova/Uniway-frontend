import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXO71vxUBBmbTJ_UAnLOYWuehvw-S8dOs",
  authDomain: "uniway-e87c0.firebaseapp.com",
  projectId: "uniway-e87c0",
  storageBucket: "uniway-e87c0.appspot.com",
  messagingSenderId: "331303279621",
  appId: "1:331303279621:web:4855f25f701f8eeabfd06c",
  measurementId: "G-K7NZJHX5JQ",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
