<template>
    <div class="border mt-5 pt-3 rounded-xl bg-slate-600 ">
        <div class="p-1 text-xl rounded-xl text-slate-800 text-center font-bold bg-slate-500 mx-[2%]">
            adding Review for {{ restaurant_name }}
        </div>
        <div class="mx-10 text-slate-100">
            <div class="flex w-full m-2">
                <div class="w-1/3"> </div>
                <div class="w-1/12 mx-2 text-center">R</div>
                <div class="w-full px-3">Notes</div>
            </div>
            <div class="flex w-full m-2">
                <div class="w-1/3">
                    Taste
                </div>
                <input
                    class="w-1/12 mx-2 rounded bg-slate-700 text-center " 
                    v-model="taste_rating" 
                /> 
                <input
                    class="w-full rounded bg-slate-700 px-3 py-1"
                    v-model="taste_notes" 
                /> 
            </div>
            <div class="flex w-full m-2">
                <div class="w-1/3">
                    Service
                </div>
                <input 
                    class="w-1/12 mx-2 rounded bg-slate-700 text-center" 
                    v-model="service_rating" 
                /> 
                <input
                    class="w-full rounded bg-slate-700 px-3 py-1"
                    v-model="service_notes" 
                /> 
            </div>
            <div class="flex w-full m-2">
                <div class="w-1/3">
                    Price
                </div>
                <input 
                    class="w-1/12 mx-2 rounded bg-slate-700 text-center" 
                    v-model="price_rating" 
                /> 
                <input
                    class="w-full rounded bg-slate-700 px-3 py-1"
                    v-model="price_notes" 
                /> 
            </div>
            <div class="flex w-full m-2">
                <div class="w-1/3">
                    Environment
                </div>
                <input 
                    class="w-1/12 mx-2 rounded bg-slate-700 text-center" 
                    v-model="environment_rating" 
                /> 
                <input
                    class="w-full rounded bg-slate-700 px-3 py-1"
                    v-model="environment_notes" 
                /> 
            </div>
        </div>
        <div class="m-5 text-slate-100">
            <div class="mb-1"> General Notes: </div>
            <input
                class="w-full rounded bg-slate-700 px-3 py-1"
                v-model="general_notes" 
            /> 
        </div>

        <button class="p-2 my-3 mx-[40%] rounded-xl bg-slate-200 text-slate-900 font-bold" @click= addEntry()>add Entry</button>
    </div>
</template>

<script>
import { addDoc, collection } from 'firebase/firestore';

export default {
    props: [
        'db',
        'user',
        'restaurant_name'
    ],
    data() {
        return {
            taste_rating: undefined,
            taste_notes: "",
            service_rating: undefined,
            service_notes: "",
            price_rating: undefined,
            price_notes: "",
            environment_rating: undefined,
            environment_notes: "",
            general_notes: "",
        }


    },
    methods: {
        async addEntry() {
            console.log(this.user)
            const review_data = {
                Taste: { rating: this.taste_rating, notes: this.taste_notes},
                Service: { rating: this.service_rating, notes: this.service_notes},
                Price: { rating: this.price_rating, notes: this.price_notes}, 
                Environment: { rating: this.environment_rating, notes: this.environment_notes},
                GeneralNotes: this.general_notes,
                User: this.user.email,
            }
            console.log(review_data);
            try {
                const res = await addDoc(collection(this.db, `/restaurants/${this.restaurant_name}/Reviews`), review_data);
                console.log(res.id);
            } catch (e) {
                console.error("Error adding: ", e);
            }
        }
    },
}

</script>