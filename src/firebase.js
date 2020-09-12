import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBwMmni98l28v9gPKcaimOVHW41GOudhko",
    authDomain: "facebook-clone-5418b.firebaseapp.com",
    databaseURL: "https://facebook-clone-5418b.firebaseio.com",
    projectId: "facebook-clone-5418b",
    storageBucket: "facebook-clone-5418b.appspot.com",
    messagingSenderId: "1030892100377",
    appId: "1:1030892100377:web:e6fa1565523c83b7a68388",
    measurementId: "G-X0S8HY7WH6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;