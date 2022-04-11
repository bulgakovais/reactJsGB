
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCThro8e6hNCW3baWlc8WPouUEUlXpA1_A",
    authDomain: "reactgb-54b92.firebaseapp.com",
    projectId: "reactgb-54b92",
    storageBucket: "reactgb-54b92.appspot.com",
    messagingSenderId: "540207714033",
    appId: "1:540207714033:web:bb0e1c87cf3a5329fea350",
    measurementId: "G-V7NQM36L56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);