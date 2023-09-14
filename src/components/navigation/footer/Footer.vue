<template>
  <div
    class="grid items-center justify-center w-full grid-cols-2 py-5 text-center shadow-2xl md:grid-cols-3 lg:flex shadow-white lg:shadow-none"
  >
    <template v-for="(item, index) in footer" :key="index">
      <p
        :class="{
          'md:border-r': index !== 5,
          'sm:px-[.2rem] md:px-2 lg:px-4 cursor-pointer': true
        }"
      >
        {{ item.menu }}
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const footer = [
  {
    menu: 'About'
  },
  {
    menu: 'User Agreement'
  },
  {
    menu: 'Privacy Policy'
  },
  {
    menu: 'Community'
  },
  {
    menu: 'Compliance'
  },
  {
    menu: 'Help'
  }
]
</script>

<style scoped></style>
