

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrQkkMtEZ5l5Uxk3ESt3syoA7CiKBlrqU",
  authDomain: "my-project-260624.firebaseapp.com",
  projectId: "my-project-260624",
  storageBucket: "my-project-260624.appspot.com",
  messagingSenderId: "93649728471",
  appId: "1:93649728471:web:fab568318f178d33dbd192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth