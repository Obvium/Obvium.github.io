<template>
    <div class="border mt-5 py-3 rounded-xl bg-slate-600 ">
        <div class="p-1 text-xl rounded-xl text-slate-800 text-center font-bold bg-slate-500 mx-[2%]">
            Reviews for {{ restaurant_name }}
        </div>
        <div
            class="m-3"
            v-for="doc in this.reviews"      
        > 
            <div class="m-5 py-3 bg-slate-400 rounded-xl">
                <div class="p-1 mb-5 text-xl rounded-xl text-slate-800 text-center font-bold bg-slate-500 mx-[2%]">
                    Review created by {{ doc.data()["User"] }}
                </div>
                <div class="mx-10">
                    <div class="flex w-full m-2">
                        <div class="w-1/5">
                            Taste
                        </div>
                        <div
                            class="w-1/12 mx-2 rounded bg-slate-700 text-center" 
                        >        
                        {{ doc.data()["Taste"]["rating"] }}          
                        </div> 
                        <div
                            class="w-[50%] rounded bg-slate-700 px-3 py-1"
                        >
                        {{ doc.data()["Taste"]["notes"] }}     
                        </div>
                    </div>
                    <div class="flex w-full m-2">
                        <div class="w-1/5">
                            Service
                        </div>
                        <div
                            class="w-1/12 mx-2 rounded bg-slate-700 text-center" 
                        >        
                        {{ doc.data()["Service"]["rating"] }}          
                        </div> 
                        <div
                            class="w-[50%] rounded bg-slate-700 px-3 py-1"
                        >
                        {{ doc.data()["Service"]["notes"] }}     
                        </div> 
                    </div>
                    <div class="flex w-full m-2"> 
                        <div class="w-1/5">
                            Price
                        </div>
                        <div
                            class="w-1/12 mx-2 rounded bg-slate-700 text-center" 
                        >        
                        {{ doc.data()["Price"]["rating"] }}          
                        </div> 
                        <div
                            class="w-[50%] rounded bg-slate-700 px-3 py-1"
                        >
                        {{ doc.data()["Price"]["notes"] }}     
                        </div> 
                    </div>
                    <div class="flex w-full m-2">
                        <div class="w-1/5">
                            Environment
                        </div>
                        <div
                            class="w-1/12 mx-2 rounded bg-slate-700 text-center" 
                        >        
                        {{ doc.data()["Environment"]["rating"] }}          
                        </div> 
                        <div
                            class="w-[50%] rounded bg-slate-700 px-3 py-1"
                        >
                        {{ doc.data()["Environment"]["notes"] }}     
                        </div> 
                    </div>
                </div>
                <div class="m-5 text-slate-900 font-bold">
                    <div class="mb-1">
                        General Notes:
                    </div>
                    <div  class="w-full rounded text-slate-100 bg-slate-700 px-3 py-1">
                        {{ doc.data()["GeneralNotes"] }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { query, getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

export default {
    props: [
        'db',
        'restaurant_name'
    ],
    data() {
        return {
            reviews: [],
        }
        
    },
    created() {
        this.getReviews();
    },
    methods: {
        //This needs to be a util function
        async getReviews() {
            const reviewRefs =  collection(this.db, `/restaurants/${this.restaurant_name}/Reviews`);
            const q = query(reviewRefs);
            const reviewDocs = await getDocs(q);
            reviewDocs.forEach((doc) => {
              this.reviews.push(doc)
            });
        }
    }
}
</script>
