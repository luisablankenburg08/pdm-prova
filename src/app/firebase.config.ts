import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBjbWi35e_ogAwiS94pSNU_ES4Pa0lV8ao",
  authDomain: "mural-firebase.firebaseapp.com",
  projectId: "mural-firebase",
  storageBucket: "mural-firebase.firebasestorage.app",
  messagingSenderId: "814189416298",
  appId: "1:814189416298:web:a6bbbb729e49f227009f13"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);