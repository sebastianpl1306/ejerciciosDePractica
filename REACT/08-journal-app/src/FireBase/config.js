import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC4REi5Dhy6Mk4TCKf4yQGO2IyHax2p0h8",
  authDomain: "react-new-3d5ae.firebaseapp.com",
  projectId: "react-new-3d5ae",
  storageBucket: "react-new-3d5ae.appspot.com",
  messagingSenderId: "846588849168",
  appId: "1:846588849168:web:d55af934c029edb813ee95"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );