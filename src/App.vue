<template>
  <div class="min-h-screen bg-base-bg pt-10 px-[5%]">
    <LoginWidged
      :loggedIn = "loggedIn"
      :user = user
      @login="logIn($event)"
      @logout="logOut()"
    />
    <AddRestaurant
      v-if="loggedIn"
      :db = db
    />
    <ReviewForm 
      v-if="loggedIn"
      :db = db
      :user = this.auth.currentUser
    />
    <ReviewBrowser
      v-if="loggedIn"
      :db = db
    />
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { collection, query, doc, getDocs, setDoc, addDoc, getFirestore } from 'firebase/firestore';
import {getAuth, signOut, signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import ReviewForm from "./components/ReviewForm.vue";
import ReviewBrowser from "./components/ReviewBrowser.vue";
import LoginWidged from "./components/LoginWidged.vue";
import AddRestaurant from "./components/AddRestaurant.vue"

export default {
  components: { ReviewForm, ReviewBrowser, LoginWidged, AddRestaurant},
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
        this.user = user;
        this.loggedIn = true;
        const uid = user.uid;
      } else {
        this.loggedIn = false;
      }
    });
    },

    async logIn(cred) {
      await signInWithEmailAndPassword(this.auth, cred[0], cred[1])
          .then((userCredential) => {
            this.user = userCredential.user;
          })
          .catch((error) => {
            this.errorCode = error.code;
            this.errorMessage = error.message;
          });
    },
    async logOut() {
      await signOut(this.auth).then(() => {
       }).catch((error) => {
    });
    }

  }
}
</script>
