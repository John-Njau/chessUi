<template>
  <div class="flex items-center justify-evenly">
    <Puzzles />
    <PuzzleSettings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Puzzles from './Puzzles.vue'
import PuzzleSettings from './PuzzleSettings.vue'

export default defineComponent({
  components: {
    Puzzles,
    PuzzleSettings
  }
})
</script>
