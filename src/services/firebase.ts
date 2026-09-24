import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3mi6vZ4rvOGMi5HV0RtmokmS-ATOe4Sc",
  authDomain: "webcarros-fc8c5.firebaseapp.com",
  projectId: "webcarros-fc8c5",
  storageBucket: "webcarros-fc8c5.firebasestorage.app",
  messagingSenderId: "796060863890",
  appId: "1:796060863890:web:1c97d926e23b783aaf454b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage};

