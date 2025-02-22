import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKtTMuDVYOFagg9kdj4CxQSHanRk1pnpY",
  authDomain: "create-user-923af.firebaseapp.com",
  databaseURL: "https://create-user-923af-default-rtdb.firebaseio.com",
  projectId: "create-user-923af",
  storageBucket: "create-user-923af.firebasestorage.app",
  messagingSenderId: "237877661716",
  appId: "1:237877661716:web:c55c08cd8ce2ac73611701",
  measurementId: "G-4T0B7XMBBQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app