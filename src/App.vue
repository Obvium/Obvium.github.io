<template>
  <div class="bg-slate-900 pt-10 px-[20%]">
    <div
      class="rounded-xl bg-slate-500 max-w-"
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
    <div
      v-for="thing in entries"
    >
      <div class="bg-slate-100"> {{ thing.test + " " + thing.test2 }}</div>
    </div>
    <ReviewForm 
      :db = db
      :user = this.auth.currentUser
      restaurant_name="Testaurant"
    />
    <ReviewBrowser
      :db = db
      restaurant_name="Testaurant"
    />
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { collection, query, doc, getDocs, setDoc, addDoc, getFirestore } from 'firebase/firestore';
import {getAuth, signOut, signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import ReviewForm from "./components/ReviewForm.vue";
import ReviewBrowser from "./components/ReviewBrowser.vue";
export default {
  components: { ReviewForm, ReviewBrowser },
  data() {
    return {
      email: "",
      password: "",
      auth: "",
      user: "",
      loggedIn: false,
      restRefs: "",
      db: undefined,
      app: undefined,
      entries: undefined,
    }
  },
  created() {
    this.authenticate();
    this.db = getFirestore();
    


  },
  methods: {
    authenticate() {
      const firebaseConfig = {
      apiKey: "AIzaSyALV08bfPkleXurrp4q-ZZqLB1buSChfhU",
      authDomain: "restlist-ab369.firebaseapp.com",
      projectId: "restlist-ab369",
      storageBucket: "restlist-ab369.appspot.com",
      messagingSenderId: "1032725124554",
      appId: "1:1032725124554:web:304b9b702ca638157aab33",
      measurementId: "G-7FGCH3NTKT"
    };
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth();

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.loggedIn = true;
        const uid = user.uid;
      } else {
        this.loggedIn = false;
      }
    });
    },




      //setDoc(doc(this.db, `/restaurants/${restaurant_name}/Reviews`, "newRev"), data, { merge: true});

      // this.restRefs = collection(this.db, "/restaurants/Testaurant/Reviews");
      // console.log(this.restRefs)
      // const q = query(this.restRefs, );
      // const querySnapshot = await getDocs(q);
      // console.log(querySnapshot);
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      // });
      //await setDoc(doc(this.restRefs, "Testaurant"), {
      //reviews: [{ stars: 10, service: 8}] });
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
</script>
