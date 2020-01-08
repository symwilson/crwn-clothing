import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHyfLs3gLaX-9B9kem-a-bmDfpBtDTkdg",
  authDomain: "crwn-clothing-db-30b56.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-30b56.firebaseio.com",
  projectId: "crwn-clothing-db-30b56",
  storageBucket: "crwn-clothing-db-30b56.appspot.com",
  messagingSenderId: "416740841107",
  appId: "1:416740841107:web:e9aa4348819567e9d11f66",
  measurementId: "G-SHR4QNM9ZK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
