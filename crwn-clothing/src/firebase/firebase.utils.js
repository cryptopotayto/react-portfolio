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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //creates reference object at designated user location
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //obtains snapshot data at previously designated location in db
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;