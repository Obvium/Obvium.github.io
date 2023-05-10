<template>
    <div class="flex">
        <div class="bg-points-1 bg-points-2 bg-points-3 bg-points-4 bg-points-5 bg-points-6 bg-points-7 bg-points-8 bg-points-9 bg-points-10"></div>
        <div class="text-bright font-bold col-span-3 w-[20%] min-w-[4rem]">
            {{ text }}
        </div>
        <div class=" w-[80%] max-w-sm grid grid-cols-10">
            <div 
                class="rounded-xl bg-bright w-5 h-5 m-1"
                v-for="x in 10"
                :class="[x <= points ? `bg-points-${points}`: '']"
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
            console.log(index)
            this.points = index
        },
        getPoints() {
            return this.points
        }
    }
}
</script>