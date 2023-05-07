<template>
    <div class="border-2 border-bright mt-5 p-2 rounded-xl bg-widged-bg">
        <div class="p-1 mb-2 text-xl rounded-xl text-dark text-center font-bold bg-bright">
            add new Restaurant
        </div>
        <input 
            class="mb-2 ml-5 p-1 rounded bg-medium border border-bright w-[calc(100%-2.5rem)] font-bold"
            v-model="name" 
            placeholder="Name"
          />     
          <input 
            class="mb-2 ml-5 p-1 rounded bg-medium border border-bright w-[calc(100%-2.5rem)]"  
            v-model="location" 
            placeholder="Location" 
          />
          <button class="p-1 ml-[35%] w-[calc(30%)] rounded-lg bg-button-bg hover:bg-button-hover font-bold truncate" @click= addRestaurant()>add</button>
    </div>
</template>
<script>
import { setDoc, doc } from 'firebase/firestore';

export default {
    props: [
        'db',
    ],
    data() {
        return {
            name: undefined,
            location: undefined,
        }
        
    },
    created() {
    },
    methods: {
        async addRestaurant() {
            const restaurant_data = {
                Name: this.name,
                Location: this.location,
            }
            try {
                // TODO activate
                const res = await setDoc(doc(this.db, `/restaurants/`, this.name), restaurant_data);
                console.log(res);
                this.showForm = false;
            } catch (e) {
                console.error("Error adding: ", e);
            }
        }
    }
}
</script>
