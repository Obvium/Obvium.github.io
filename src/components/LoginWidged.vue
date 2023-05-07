<template>
    <div
      class="p-2 border-2 border-bright rounded-xl bg-widged-bg"
    >
      <div class="p-1 mb-2 text-xl rounded-lg text-dark text-center font-bold bg-bright ">
            Account
      </div>
      <TransitionGroup
            enter-active-class="duration-300"
            enter-from-class="transform opacity-0 scale-0"
            enter-to-class="scale-100 opacity-100"
            leave-active-class="duration-300"
            leave-from-class="scale-100 opacity-100"
            leave-to-class="transform opacity-0 scale-0"
        >
        <div 
          v-if="loggedIn && user"
          class="ml-5 mb-2 p-1 rounded bg-medium w-[calc(100%-2.5rem)] font-bold truncate"
        >
          Logged in as: "{{ user.email }}"
        </div>
        <div v-if="!loggedIn">
          <input 
            class="mb-2 ml-5 p-1 rounded bg-medium border border-bright w-[calc(100%-2.5rem)] font-bold"
            v-model="email" 
            placeholder="E-Mail"
          />     
          <input 
            class="mb-2 ml-5 p-1 rounded bg-medium border border-bright w-[calc(100%-2.5rem)]"  
            type="password" 
            v-model="password" 
            placeholder="Password" 
          />
        </div>
      </TransitionGroup>
      <button v-if="!loggedIn" class="p-1 ml-[35%] w-[calc(30%)] rounded-lg bg-button-bg hover:bg-button-hover font-bold truncate" @click= logIn()>Log In</button>
      <button v-if="loggedIn" class="p-1 ml-[35%] w-[calc(30%)] rounded-lg bg-button-bg hover:bg-button-hover font-bold truncate" @click= logOut()>Log Out</button>
    </div>

</template>
<script>

export default {
    props: [
      'loggedIn',
      'user',
    ],
    data() {
        return {
          email: "",
          password: "",
        }
        
    },
    created() {
    },
    methods: {
      logIn() {
        this.$emit('login', [this.email, this.password])
      },
      logOut() {
        this.$emit('logout')
      },
    }
}
</script>
