// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ3W4JhILr0VhgHebxK7UvPLwIej9XC_U",
  authDomain: "ass10-freelance-task.firebaseapp.com",
  projectId: "ass10-freelance-task",
  storageBucket: "ass10-freelance-task.firebasestorage.app",
  messagingSenderId: "409844879653",
  appId: "1:409844879653:web:b7146d78ed3093ace5cacc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)