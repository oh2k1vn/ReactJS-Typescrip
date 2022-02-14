import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7JkwZBWgEuTY8qufTdqvuY3bSJrunFkc",
  authDomain: "reactjs-12fb1.firebaseapp.com",
  projectId: "reactjs-12fb1",
  storageBucket: "reactjs-12fb1.appspot.com",
  messagingSenderId: "621245880565",
  appId: "1:621245880565:web:85cdd4b8a399f787ff0dbc",
  measurementId: "G-P8XW2SKSJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);