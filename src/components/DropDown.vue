<template>
      <div class="relative mb-2 p-1 w-full rounded bg-medium border border-bright font-bold">
        <button
          class="flex w-full items-center justify-between "
          @click="openMenu()"
          @blur="isOptionsExpanded = false"
        >
          <span>{{ selectedOption }}</span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-4 w-4 transform transition-transform duration-200 ease-in-out"
            :class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <transition
        >
            <ul
                v-show="isOptionsExpanded"
                class="z-50 absolute translate-y-2 left-0 right-0 mb-4 bg-medium divide-y divide-bright rounded-lg shadow-lg overflow-hidden border-2 border-bright"
            >
                <li
                v-for="(option, index) in options"
                :key="index"
                class="p-1 transition-colors duration-300 hover:bg-bright"
                @mousedown.prevent="setOption(option)"
                >
                {{ option }}
                </li>
            </ul>
        </transition>
        
      </div>
  </template>
  
  <script>
  import { collection, getDocs, query } from 'firebase/firestore';
  import { getRestaurants } from './../utils.js';
  export default {
    props: [
        'db'
    ],
    data() {
      return {
        isOptionsExpanded: false,
        selectedOption: "select Restaurant",
        options: [],
      };
    },
    methods: {
      setOption(option) {
        this.selectedOption = option;
        this.isOptionsExpanded = false;
        this.$emit('selected', this.selectedOption)
      },
      async openMenu() {
        this.isOptionsExpanded = !this.isOptionsExpanded
        const restaurants = await getRestaurants(this.db)
        this.options = []
        restaurants.forEach((rest) => {
            this.options.push(rest.id)
        })
      },
    }
  };
  </script>
  
  <style>
  .ease-custom {
    transition-timing-function: cubic-bezier(.61,-0.53,.43,1.43);
  }
  </style>
  