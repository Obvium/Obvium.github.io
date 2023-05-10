<template>
    <div class="flex">
        <div class="text-bright font-bold col-span-3 w-[20%] min-w-[4rem]">
            {{ text }}
        </div>
        <div class=" w-[80%] max-w-sm grid grid-cols-10">
            <div 
                class="rounded-xl bg-bright w-5 h-5 m-1"
                v-for="x in 10"
                :class="[x <= points ? 'bg-green': '']"
                @click="this.setPoints(x)"
            />
        </div>
    </div>
</template>

<script>
export default {
    components: { },
    props: [
        'text',
    ],
    data() {
        return {
            points: null,
        }
    },
    methods: {
        setPoints(index) {
            this.points = index
        },
        getPoints() {
            return this.points
        }
    }
}
</script>