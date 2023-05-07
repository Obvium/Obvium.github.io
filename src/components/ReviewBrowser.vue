<template>
    <div class="p-2 border-2 border-bright rounded-xl bg-widged-bg">
        <div 
            class="p-1 text-xl rounded-lg text-dark text-center font-bold bg-bright hover:bg-slightly-brighter"
            @click="active = !active"
        >
            Reviews
        </div>
        <div class="mt-2" v-show="active">
            <DropDown
                class="mb-10"
                :db = db
                @selected="getReviews($event)"
            />
            <div
                class="mx-10 mb-5"
                v-for="doc in this.reviews"      
            > 
                <div class="mb-2">
                    <div class="p-1 mb-5 text-xl rounded-xl text-dark text-center font-bold bg-bright">
                        Review created by {{ doc.data()["User"] }}
                    </div>
                    <div class="">
                        <div class="flex w-full m-2">
                            <div class="w-1/5 text-bright font-bold">
                                Taste
                            </div>
                            <div
                                class="w-1/12 mx-2 rounded bg-bright text-center text-dark" 
                            >        
                            {{ doc.data()["Taste"]["rating"] }}          
                            </div> 
                            <div
                                class="w-[50%] rounded bg-bright px-3 py-1 text-dark"
                            >
                            {{ doc.data()["Taste"]["notes"] }}     
                            </div>
                        </div>
                        <div class="flex w-full m-2">
                            <div class="w-1/5 text-bright font-bold">
                                Service
                            </div>
                            <div
                                class="w-1/12 mx-2 rounded bg-bright text-center text-dark" 
                            >        
                            {{ doc.data()["Service"]["rating"] }}          
                            </div> 
                            <div
                                class="w-[50%] rounded bg-bright px-3 py-1 text-dark"
                            >
                            {{ doc.data()["Service"]["notes"] }}     
                            </div> 
                        </div>
                        <div class="flex w-full m-2"> 
                            <div class="w-1/5 text-bright font-bold">
                                Price
                            </div>
                            <div
                                class="w-1/12 mx-2 rounded bg-bright text-center text-dark" 
                            >        
                            {{ doc.data()["Price"]["rating"] }}          
                            </div> 
                            <div
                                class="w-[50%] rounded bg-bright px-3 py-1 text-dark"
                            >
                            {{ doc.data()["Price"]["notes"] }}     
                            </div> 
                        </div>
                        <div class="flex w-full m-2">
                            <div class="w-1/5 text-bright font-bold">
                                Environment
                            </div>
                            <div
                                class="w-1/12 mx-2 rounded bg-bright text-center text-dark" 
                            >        
                            {{ doc.data()["Environment"]["rating"] }}          
                            </div> 
                            <div
                                class="w-[50%] rounded bg-bright px-3 py-1 text-dark"
                            >
                            {{ doc.data()["Environment"]["notes"] }}     
                            </div> 
                        </div>
                    </div>
                    <div class="mx-2 mb-2 text-bright font-bold">
                        <div class="mb-1">
                            General Notes:
                        </div>
                        <div  class="w-full rounded bg-bright px-3 py-1 text-dark">
                            {{ doc.data()["GeneralNotes"] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { query, getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import DropDown from './DropDown.vue'

export default {
    components: { DropDown },
    props: [
        'db',
    ],
    data() {
        return {
            active: false,
            restaurant_name: undefined,
            reviews: [],
        }
        
    },
    created() {
    },
    methods: {
        //This needs to be a util function
        async getReviews(restaurant_name) {
            this.reviews = []
            const reviewRefs =  collection(this.db, `/restaurants/${restaurant_name}/Reviews`);
            const q = query(reviewRefs);
            const reviewDocs = await getDocs(q);
            reviewDocs.forEach((doc) => {
              this.reviews.push(doc)
            });
        }
    }
}
</script>
