<template>
  <div class="flex flex-col justify-center">
    <div v-for="p in puzzles" :key="p.id" class="flex items-center my-2">
      <img :src="p.icon" alt="icon" class="w-10 h-10 mr-4" />
      <div class="flex flex-col">
        <h3 class="text-lg font-bold">{{ p.title }}</h3>
        <p class="text-sm">{{ p.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const puzzles = ref([
  {
    id: 1,
    title: 'Puzzles',
    icon: 'https://picsum.photos/80/80',
    description: 'Train with more than 1000 puzzles'
  },
  {
    id: 2,
    title: 'Puzzle Rush',
    icon: 'https://picsum.photos/80/80',
    description: 'Race against the clock. 3 strikes and you are out'
  },
  {
    id: 3,
    title: 'Puzzle Battle',
    icon: 'https://picsum.photos/80/80',
    description: 'Rush against another player to win'
  },
  {
    id: 4,
    title: 'Daily Puzzle',
    icon: 'https://picsum.photos/80/80',
    description: "Can you solve today's puzzle"
  },
  {
    id: 5,
    title: 'Custom',
    icon: 'https://picsum.photos/80/80',
    description: 'Choose puzzles by theme and rating'
  }
])
</script>
