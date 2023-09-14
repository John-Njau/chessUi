<template>
  <div class="container mx-auto mt-8">
    <h1 class="mb-4 text-2xl font-semibold">Match</h1>
    <div class="mb-4">
      <h2 class="text-lg font-semibold">Match Details</h2>
      <ul>
        <li>ID: {{ matchData.id }}</li>
        <li>
          URL:
          <a :href="matchData.url" target="_blank" rel="noopener noreferrer">{{ matchData.url }}</a>
        </li>
        <li>Time Control: {{ matchData.time_control }}</li>
        <li>End Time: {{ matchData.end_time }}</li>
        <!-- Add more details as needed -->
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const matchData = ref({})

onMounted(async () => {
  try {
    const response = await axios.get('https://api.chess.com/pub/match/12803/1')
    matchData.value = response.data
  } catch (error) {
    console.error('Error fetching match data:', error)
  }
})
</script>
