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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

