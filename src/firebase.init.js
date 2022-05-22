// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXqivddeZzZL9KGZxX4gFlUhqXgitXzME",
  authDomain: "ridershome-75781.firebaseapp.com",
  projectId: "ridershome-75781",
  storageBucket: "ridershome-75781.appspot.com",
  messagingSenderId: "242260177210",
  appId: "1:242260177210:web:90a57a838a8ecc8fcda003",
  measurementId: "G-YF1375NPS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;