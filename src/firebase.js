
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDt6Y1wuXmPZeY_ncKDSVDz__w5lcAYW9Q",
  authDomain: "avangard-b8407.firebaseapp.com",
  projectId: "avangard-b8407",
  storageBucket: "avangard-b8407.appspot.com",
  messagingSenderId: "99711524791",
  appId: "1:99711524791:web:73c041b14614b95e621232"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)