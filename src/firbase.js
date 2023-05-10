import firebase from "firebase/compat/app";

import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6xzeZeAOhnmC-VrI6sAtFSRGN-2Tbj0s",
  authDomain: "react-blog-app-f546c.firebaseapp.com",
  projectId: "react-blog-app-f546c",
  storageBucket: "react-blog-app-f546c.appspot.com",
  messagingSenderId: "481779418834",
  appId: "1:481779418834:web:a892514a371af6b6ea8f0b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = firebaseApp.firestore();
