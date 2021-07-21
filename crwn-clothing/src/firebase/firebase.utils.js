import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3DEpTDYKRViFzg4hozm4b2YgEvQtB0JQ",
    authDomain: "react-portfolio-project-5b5d1.firebaseapp.com",
    projectId: "react-portfolio-project-5b5d1",
    storageBucket: "react-portfolio-project-5b5d1.appspot.com",
    messagingSenderId: "725309382398",
    appId: "1:725309382398:web:119626065e8f595bb48faf",
    measurementId: "G-73MDRFCJ0N"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;