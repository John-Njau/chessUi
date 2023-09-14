<template>
  <div class="flex flex-col items-center justify-center my-4">
    <div class="absolute inset-0 bg-black opacity-[.7] -z-10"></div>
    <div class="flex gap-5">
      <button
        v-for="(option, index) in puzzleOptions"
        :key="index"
        :class="{
          'px-5 py-3 border rounded-md': true,
          'bg-[#81B64C]': activePuzzle === index
        }"
        @click="selectPuzzle(index)"
      >
        <p>{{ option.name }}</p>
      </button>
    </div>
    <div v-if="puzzleData" class="flex flex-col items-center my-10 space-y-5">
      <p class="font-[900] font-[Capriola] text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {{ puzzleData.title }}
      </p>
      <img :src="puzzleData.image" alt="Puzzle" />
    </div>
    <p v-else-if="puzzleData === null">Loading puzzle...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const puzzleData = ref(null)
const activePuzzle = ref(0)
const puzzleOptions = [
  {
    name: 'Daily puzzles',
    url: 'https://api.chess.com/pub/puzzle'
  },
  {
    name: 'Random puzzles',
    url: 'https://api.chess.com/pub/puzzle/random'
  }
]

const selectPuzzle = (index: number) => {
  activePuzzle.value = index
  fetchPuzzle(puzzleOptions[index].url)
}

const fetchPuzzle = async (apiURL: string) => {
  try {
    const response = await axios.get(apiURL)
    puzzleData.value = response.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  selectPuzzle(0) // Select the first puzzle option on mount
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
