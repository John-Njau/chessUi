<template>
  <main>
    <div class="relative flex items-center justify-between w-full px-5 md:px-20">
      <div
        class="absolute inset-0 bg-[#000] blur z-[-1] opacity-[.7] motion-safe:animate-pulse"
      ></div>
      <div class="w-full space-y-6">
        <h2
          class="font-[900] font-[Capriola] uppercase bg-gradient-to-tr from-[#C99C3E] via-[#9b7df2] to-[#9C84E1] bg-clip-text text-transparent text-xl md:text-2xl lg:text-4xl xl:text-6xl"
        >
          take your chess game to the next level
        </h2>
        <p>
          Connect with top-ranked chess players from around the world and learn the secrets to
          becoming a chess master
        </p>
        <div class="flex justify-center lg:justify-start">
          <button
            class="px-4 py-2 capitalize border shadow-2xl rounded-2xl shadow-[#888] animate-pulse"
          >
            become a master
          </button>
        </div>
      </div>
      <div class="absolute inset-0 bg-[#c2bfbf] opacity-[.2] blur-3xl"></div>
      <div class="items-center justify-end hidden w-full lg:flex">
        <img
          src="https://cdn0.iconfinder.com/data/icons/3d-people-playing-pack/512/playing_chess.png"
          alt=""
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// import { BsDot } from 'vue-icons/bs';
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
