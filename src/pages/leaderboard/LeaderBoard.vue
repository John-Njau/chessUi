<template>
  <div class="mx-auto mt-8">
    <div class="absolute inset-0 bg-black opacity-[.7] z-[-10]"></div>
    <h1 class="mb-4 text-2xl font-semibold">Leaderboard</h1>
    <div v-if="leaderboardData.daily" class="mb-4">
      <h2 class="text-lg font-semibold">Daily Leaderboard</h2>
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-4 py-2">Rank</th>
            <th class="px-4 py-2">Username</th>
            <th class="px-4 py-2">Scores</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in leaderboardData.daily.slice(0, visibleRecords)" :key="index">
            <td class="px-4 py-2">{{ item.rank }}</td>
            <td class="px-4 py-2">{{ item.username }}</td>
            <td class="px-4 py-2">{{ item.score }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="visibleRecords < leaderboardData.daily.length" class="mt-4">
        <button
          @click="toggleShowMore"
          class="w-full px-4 py-2 text-white bg-black rounded-md opacity-[.5] border-b"
        >
          <p class="flex items-center justify-center gap-3 z-[10]">
            {{ showMore ? 'Show More' : 'Show Less' }}
            <BsArrowDown class="animate-bounce" />
          </p>
        </button>
      </div>
    </div>
    <div v-else class="animate-pulse">Loading the Leaderboard...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { BsArrowDown } from 'vue-icons/bs';

const leaderboardData = ref({})
const showMore = ref(true)
const visibleRecords = ref(10)

const toggleShowMore = () => {
  if (visibleRecords + 10 >= 50) {
    showMore.value = !showMore.value
  }
  visibleRecords.value += 10
}

onMounted(async () => {
  try {
    const response = await fetch('https://api.chess.com/pub/leaderboards')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    leaderboardData.value = data
  } catch (error) {
    console.error('Error fetching leaderboard data:', error)
  }
})
</script>

<style scoped></style>
