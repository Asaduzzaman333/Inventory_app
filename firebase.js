// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4miS_z3ybRGkdjQKqFdNodO7W-yoClK8",
  authDomain: "inventoryapp-5e571.firebaseapp.com",
  projectId: "inventoryapp-5e571",
  storageBucket: "inventoryapp-5e571.firebasestorage.app",
  messagingSenderId: "532115144135",
  appId: "1:532115144135:web:7f59563a06857ea6e02de2",
  measurementId: "G-5SEQD7645G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);