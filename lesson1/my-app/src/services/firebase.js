
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database"


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

// false/true
export const auth = getAuth(app)

export const signUp = async (email, pass) =>
    await createUserWithEmailAndPassword(auth, email, pass)

export const logIn = async (email, pass) =>
    await signInWithEmailAndPassword(auth, email, pass)

export const logOut = async () =>
    await signOut(auth)

export const db = getDatabase(app)
export const chatsRef = ref(db, 'chats')
export const messagesRef = ref(db, 'messages')
export const getChatRefById = (id) => ref(db, `chats/${id}`)
export const getChatMsgRefById = (chatId) => ref(db, `messages/${chatId}`)