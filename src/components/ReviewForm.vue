<template>
    <div class="p-2 border-2 border-bright rounded-xl bg-widged-bg">
        <div 
            class="p-1 text-xl rounded-lg text-dark text-center font-bold bg-bright hover:bg-slightly-brighter"
            @click="active = !active"
            >
            add new Review
        </div>
            <div class="mt-2" v-show="active">
                <DropDown
                :db = db
                @selected="resetReviewForm($event)"
            />
            <Transition
                enter-active-class="duration-300"
                enter-from-class="transform opacity-0 scale-0"
                enter-to-class="scale-100 opacity-100"
                leave-active-class="duration-300"
                leave-from-class="scale-100 opacity-100"
                leave-to-class="transform opacity-0 scale-0"
            >
                <div class="mx-10" v-if="showForm">
                    <div class="flex w-full m-2 text-bright font-bold">
                        <div class="w-1/3"> </div>
                        <div class="w-1/12 mx-2 text-center">R</div>
                        <div class="w-full px-3">Notes</div>
                    </div>
                    <div class="flex w-full m-2">
                        <div class="w-1/3 text-bright font-bold">
                            Taste
                        </div>
                        <input
                            class="w-1/12 mx-2 rounded bg-bright text-center text-dark"
                            :class="[ /^\+?(0|[1-9]\d*)$/.test(this.taste_rating) ? '' : 'border border-invalid-button-bg']"
                            v-model="taste_rating" 
                        /> 
                        <input
                            class="w-full rounded bg-bright px-3 py-1 text-dark"
                            v-model="taste_notes" 
                        /> 
                    </div>
                    <div class="flex w-full m-2">
                        <div class="w-1/3 text-bright font-bold">
                            Service
                        </div>
                        <input 
                            class="w-1/12 mx-2 rounded bg-bright text-center text-dark"
                            :class="[ /^\+?(0|[1-9]\d*)$/.test(this.service_rating) ? '' : 'border border-invalid-button-bg']" 
                            v-model="service_rating" 
                        /> 
                        <input
                            class="w-full rounded bg-bright px-3 py-1 text-dark"
                            v-model="service_notes" 
                        /> 
                    </div>
                    <div class="flex w-full m-2">
                        <div class="w-1/3 text-bright font-bold">
                            Price
                        </div>
                        <input 
                            class="w-1/12 mx-2 rounded bg-bright text-center text-dark"
                            :class="[ /^\+?(0|[1-9]\d*)$/.test(this.price_rating) ? '' : 'border border-invalid-button-bg']"
                            v-model="price_rating" 
                        /> 
                        <input
                            class="w-full rounded bg-bright px-3 py-1 text-dark"
                            v-model="price_notes" 
                        /> 
                    </div>
                    <div class="flex w-full m-2">
                        <div class="w-1/3 text-bright font-bold">
                            Environment
                        </div>
                        <input 
                            class="w-1/12 mx-2 rounded bg-bright text-center text-dark"
                            :class="[ /^\+?(0|[1-9]\d*)$/.test(this.environment_rating) ? '' : 'border border-invalid-button-bg']"
                            v-model="environment_rating" 
                        /> 
                        <input
                            class="w-full rounded bg-bright px-3 py-1 text-dark"
                            v-model="environment_notes" 
                        /> 
                    </div>
                    <div class="mb-2 text-bright font-bold">
                        <div class="mb-1"> General Notes: </div>
                        <input
                            class="w-full text-dark rounded bg-bright px-3 py-1"
                            v-model="general_notes" 
                        /> 
                    </div>
                    <button 
                        class="p-1 ml-[35%] w-[calc(30%)] rounded-lg font-bold truncate" 
                        :class="[ isValidInput() ? 'bg-button-bg hover:bg-button-hover' : 'bg-invalid-button-bg']"
                        @click= addEntry()>add Entry</button>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>
import { addDoc, collection } from 'firebase/firestore';
import DropDown from "./DropDown.vue";

export default {
    components: { DropDown },
    props: [
        'db',
        'user',
    ],
    data() {
        return {
            active: false,
            taste_rating: undefined,
            taste_notes: "",
            service_rating: undefined,
            service_notes: "",
            price_rating: undefined,
            price_notes: "",
            environment_rating: undefined,
            environment_notes: "",
            general_notes: "",
            showForm: false,
            restaurant_name: undefined,
        }


    },
    methods: {
        resetReviewForm(rest_name) {
            this.restaurant_name = rest_name;
            //resetting contend
            this.taste_rating = undefined,
            this.taste_notes = "",
            this.service_rating = undefined,
            this.service_notes = "",
            this.price_rating = undefined,
            this.price_notes = "",
            this.environment_rating = undefined,
            this.environment_notes = "",
            this.general_notes = "",
            this.showForm = false,
            //
            this.showForm = true;
        },
        isValidInput() {
            if (!/^\+?(0|[1-9]\d*)$/.test(this.taste_rating)) {return false}
            if (!/^\+?(0|[1-9]\d*)$/.test(this.service_rating)) {return false}
            if (!/^\+?(0|[1-9]\d*)$/.test(this.price_rating)) {return false}
            if (!/^\+?(0|[1-9]\d*)$/.test(this.environment_rating)) {return false}
            return true
        },
        isNumber(data) {
            if (isNaN(data)) {return fasle};
            return true;
        },

        async addEntry() {
            if (!this.isValidInput()) {return;}
            console.log(this.restaurant_name);
            const review_data = {
                Taste: { rating: this.taste_rating, notes: this.taste_notes},
                Service: { rating: this.service_rating, notes: this.service_notes},
                Price: { rating: this.price_rating, notes: this.price_notes}, 
                Environment: { rating: this.environment_rating, notes: this.environment_notes},
                GeneralNotes: this.general_notes,
                User: this.user.email,
            }
            try {
                const res = await addDoc(collection(this.db, `/restaurants/${this.restaurant_name}/Reviews`), review_data);
                this.showForm = false;
            } catch (e) {
                console.error("Error adding: ", e);
            }
        },
    },
}

</script>