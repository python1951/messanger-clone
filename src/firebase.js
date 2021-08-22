import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
    {
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDjtqQ7N0yEJtN4vQwVnaqoxI_CXrdfwG4",
    authDomain: "facebook-messanger-clone-cc8fa.firebaseapp.com",
    projectId: "facebook-messanger-clone-cc8fa",
    storageBucket: "facebook-messanger-clone-cc8fa.appspot.com",
    messagingSenderId: "820425284705",
    appId: "1:820425284705:web:d73d697a51b6028d045e20",
    measurementId: "G-VSSBLVR4HL"

  
    }
)
const db = firebaseApp.firestore();

export default db;
