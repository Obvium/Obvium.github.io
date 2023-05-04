import logo from './logo.svg';
import './App.css';

import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyALV08bfPkleXurrp4q-ZZqLB1buSChfhU",
  authDomain: "restlist-ab369.firebaseapp.com",
  projectId: "restlist-ab369",
  storageBucket: "restlist-ab369.appspot.com",
  messagingSenderId: "1032725124554",
  appId: "1:1032725124554:web:304b9b702ca638157aab33",
  measurementId: "G-7FGCH3NTKT"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const [user] = useAuthState(auth);
function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={singInWithGoogle}>Sign in wiht Google</button>
  )
}

export default App;