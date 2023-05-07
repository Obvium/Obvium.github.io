<template>
    <div class="p-2 border-2 border-bright rounded-xl bg-widged-bg">
        <div 
            class="p-1 text-xl rounded-lg text-dark text-center font-bold bg-bright hover:bg-slightly-brighter"
            @click="active = !active"
        >
            add new Restaurant
        </div>
        <div v-show="active">
            <input 
            class="my-2 ml-5 p-1 rounded bg-medium border border-bright w-[calc(100%-2.5rem)] font-bold truncate"
            v-model="name" 
            placeholder="Name"
          />     
          <input 
            class="mb-2 ml-5 p-1 rounded bg-medium border border-bright w-[calc(100%-2.5rem)] "  
            v-model="location" 
            placeholder="Location" 
          />
          <button class="p-1 ml-[35%] w-[30%] rounded-lg bg-button-bg hover:bg-button-hover font-bold truncate" @click= addRestaurant()>add</button>
        </div>
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
            active: false,
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
