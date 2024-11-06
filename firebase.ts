import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC637LJZnrwe5yIC0jSQNQ60FpHY2Qk1s",
  authDomain: "task-arranger-sh.firebaseapp.com",
  projectId: "task-arranger-sh",
  storageBucket: "task-arranger-sh.firebasestorage.app",
  messagingSenderId: "483978117713",
  appId: "1:483978117713:web:2de56c95f77f03278a6e70",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
