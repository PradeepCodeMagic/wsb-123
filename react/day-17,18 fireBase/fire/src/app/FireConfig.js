
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDkpivc6dB6s5Zns_RYzagj6mnq7Mi_Pzg",
  authDomain: "wsb-123.firebaseapp.com",
  projectId: "wsb-123",
  storageBucket: "wsb-123.firebasestorage.app",
  messagingSenderId: "1024229773974",
  appId: "1:1024229773974:web:d4a09e0969d40db82b28b7",
  measurementId: "G-1RGD1CHPCN"
};


 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);