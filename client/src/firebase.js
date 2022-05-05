import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


const firebaseConfig = {
  apiKey: 'AIzaSyA2B-OSCSi6kNjqwIUkKA5_G-8qvfheBHY',
  authDomain: 'crwn-clothing-db-62a83.firebaseapp.com',
  projectId: 'crwn-clothing-db-62a83',
  storageBucket: 'crwn-clothing-db-62a83.appspot.com',
  messagingSenderId: '475222108067',
  appId: '1:475222108067:web:8894743663fc99be561c16'
}

const app = initializeApp(firebaseConfig); 

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
