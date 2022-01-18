import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAmMC1HK0V1LDALGpkEgJKxpQ3OWDkyuxk",
  authDomain: "mercedes-benz-390ce.firebaseapp.com",
  projectId: "mercedes-benz-390ce",
  storageBucket: "mercedes-benz-390ce.appspot.com",
  messagingSenderId: "186483101421",
  appId: "1:186483101421:web:6623c197e64b65164a46e4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)