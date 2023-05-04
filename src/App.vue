<template>
  <header>
    <div class="font-bold">
      Test?s
    </div>
    <div class="font-bold m-5 text-lg">
      {{ getText() }}
    </div>
    <button 
      @click= setCities()
    >Text</button>
    <button class="m-10"
      @click= setCities()
    >Sign In</button>
  </header>
</template>

<script setup>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, setDoc, getFirestore } from 'firebase/firestore';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALV08bfPkleXurrp4q-ZZqLB1buSChfhU",
  authDomain: "restlist-ab369.firebaseapp.com",
  projectId: "restlist-ab369",
  storageBucket: "restlist-ab369.appspot.com",
  messagingSenderId: "1032725124554",
  appId: "1:1032725124554:web:304b9b702ca638157aab33",
  measurementId: "G-7FGCH3NTKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const email = "tobias.topar@gmail.com"
const password = "Test1234$"
console.log("now logging in");
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

console.log("hello?");
function getText() {
  return "hellsafao";
}


async function setCities() {
  console.log("Pressed");
  const db = getFirestore(app);
  const citiesRef = collection(db, "cities");

  await setDoc(doc(citiesRef, "SF"), {
      name: "Sanaggo", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });
  await setDoc(doc(citiesRef, "LA"), {
      name: "Loseles", state: "CA", country: "USA",
      capital: false, population: 3900000,
      regions: ["west_coast", "socal"] });
  await setDoc(doc(citiesRef, "DC"), {
      name: "Washington, D.C.", state: null, country: "USA",
      capital: true, population: 680000,
      regions: ["east_coast"] });
  await setDoc(doc(citiesRef, "TOK"), {
      name: "Tokyo", state: null, country: "Japan",
      capital: true, population: 9000000,
      regions: ["kanto", "honshu"] });
  await setDoc(doc(citiesRef, "BJ"), {
      name: "Beijing", state: null, country: "China",
      capital: true, population: 21500000,
      regions: ["jingjinji", "hebei"] });
}
</script>
