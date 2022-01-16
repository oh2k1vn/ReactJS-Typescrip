

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXNgtVnGvkGD_v43XeOHp6T__QNRRtSK8",
  authDomain: "reactjs-38f30.firebaseapp.com",
  projectId: "reactjs-38f30",
  storageBucket: "reactjs-38f30.appspot.com",
  messagingSenderId: "424216234723",
  appId: "1:424216234723:web:e2953e8d4f0a815d4893d6",
  measurementId: "G-LQ59NE17KF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export default app;