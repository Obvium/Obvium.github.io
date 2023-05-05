<template>
  <div class="h-screen bg-slate-900 p-20">
    <div
      class="border bg-slate-500 max-w-"
    >
      <div v-if="!loggedIn">
        <input 
          class="mt-3 ml-5 rounded bg-slate-100 border w-[calc(100%-2.5rem)] font-bold"
          v-model="email" 
          placeholder="E-Mail"
        />     
        <input 
          class="ml-5 mt-1 rounded bg-slate-100 border w-[calc(100%-2.5rem)]"  
          type="password" 
          v-model="password" 
          placeholder="Password" 
        />
      </div>
      <div class="flex ">
        <button v-if="!loggedIn" class="p-1 mx-[30%] my-3 w-full rounded-xl bg-slate-100" @click= logIn()>Log In</button>
        <button v-if="loggedIn" class="p-1 mx-[30%] my-3 w-full rounded-xl bg-slate-100" @click= logOut()>Log Out</button>
      </div>

    </div>

  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { collection, doc, setDoc, getFirestore } from 'firebase/firestore';
import {getAuth, signOut, signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      auth: "",
      user: "",
      loggedIn: false,
    }
  },
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyALV08bfPkleXurrp4q-ZZqLB1buSChfhU",
      authDomain: "restlist-ab369.firebaseapp.com",
      projectId: "restlist-ab369",
      storageBucket: "restlist-ab369.appspot.com",
      messagingSenderId: "1032725124554",
      appId: "1:1032725124554:web:304b9b702ca638157aab33",
      measurementId: "G-7FGCH3NTKT"
    };
    const app = initializeApp(firebaseConfig);

    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        //console.log("Signed in");
        this.loggedIn = true;
        const uid = user.uid;
      } else {
        //console.log("Signed out");
        this.loggedIn = false;
      }
    });

  },
  methods: {
    logIn() {
      signInWithEmailAndPassword(this.auth, this.email, this.password)
          .then((userCredential) => {
            this.user = userCredential.user;
          })
          .catch((error) => {
            this.errorCode = error.code;
            this.errorMessage = error.message;
          });
      console.log(this.email);
      console.log(this.password);
    },
    logOut() {
      signOut(this.auth).then(() => {
       }).catch((error) => {
    });
    }

  }
}
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase



console.log("hello?");




// async function setCities() {
//   console.log("Pressed");
//   const db = getFirestore(app);
//   const citiesRef = collection(db, "cities");

//   await setDoc(doc(citiesRef, "SF"), {
//       name: "Sanaggo", state: "CA", country: "USA",
//       capital: false, population: 860000,
//       regions: ["west_coast", "norcal"] });
//   await setDoc(doc(citiesRef, "LA"), {
//       name: "Loseles", state: "CA", country: "USA",
//       capital: false, population: 3900000,
//       regions: ["west_coast", "socal"] });
//   await setDoc(doc(citiesRef, "DC"), {
//       name: "Washington, D.C.", state: null, country: "USA",
//       capital: true, population: 680000,
//       regions: ["east_coast"] });
//   await setDoc(doc(citiesRef, "TOK"), {
//       name: "Tokyo", state: null, country: "Japan",
//       capital: true, population: 9000000,
//       regions: ["kanto", "honshu"] });
//   await setDoc(doc(citiesRef, "BJ"), {
//       name: "Beijing", state: null, country: "China",
//       capital: true, population: 21500000,
//       regions: ["jingjinji", "hebei"] });
// }
</script>
