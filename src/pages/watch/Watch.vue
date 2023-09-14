<template>
  <div class="container mx-auto mt-8">
    <div class="absolute inset-0 bg-black opacity-[.7] -z-[1]"></div>
    <div class="flex justify-center mb-4 space-x-5">
      <button
        v-for="(option, index) in watchOptions"
        :key="index"
        class="px-5 py-3 border rounded-md"
        :class="activeOption === index ? 'bg-[#81B64C]' : ''"
        @click="handleOptionClick(index, option.url)"
      >
        {{ option.name }}
      </button>
    </div>
    <template v-if="activeOption === 0">
      <div v-if="watchData.streamers.length > 0" class="w-1/2 mx-auto">
        <div class="grid grid-cols-4 py-2 bg-gray-700">
          <div v-for="(title, index) in tableTitles" :key="index" class="p-2 font-bold text-center">
            {{ title.name }}
          </div>
        </div>
        <template v-if="watchData.streamers && watchData.streamers.length > 0">
          <div
            v-for="(item, index) in watchData.streamers.slice(0, showMore)"
            :key="index"
            :class="[
              'grid grid-cols-4 items-center',
              index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-700',
              'py-2 border-b border-gray-300'
            ]"
          >
            <div class="col-span-1 p-2">
              <img :src="item.avatar" class="w-12 h-12 mx-auto rounded-full" alt="" />
            </div>
            <div class="col-span-1 p-2">{{ item.username }}</div>
            <div class="col-span-1 p-2">
              <a :href="item.url" class="flex items-center gap-4 overflow-hidden">
                Visit Profile
                <ImArrowUpRight class="text-xs" />
              </a>
            </div>
            <div class="flex items-center col-span-1 p-2">
              <BsDot class="text-green-500 animate-pulse text-[3rem]" /> Online
            </div>
          </div>
        </template>
        <template v-if="watchData.streamers && showMore < watchData.streamers.length">
          <div class="mt-4 text-center">
            <button class="px-4 py-2 rounded-md bg-[#81B64C] text-white" @click="handleShowMore">
              View More
            </button>
          </div>
        </template>
      </div>
    </template>
    <template v-else-if="activeOption === 1">
      <Playing />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
// import { ImArrowUpRight } from 'vue-icons/im';
// import { BsDot } from 'vue-icons/bs';
import Playing from './Playing.vue'

const watchData = ref({ streamers: [] })
const activeOption = ref(0)
const apiURL = ref('')
const showMore = ref(10)

const watchOptions = [
  {
    name: 'Streamers',
    url: 'https://api.chess.com/pub/streamers'
  },
  {
    name: 'Playing Now',
    url: 'https://api.chess.com/pub/match/12803/1'
  }
]

const tableTitles = [
  {
    name: 'Icon'
  },
  {
    name: 'Streamer'
  },
  {
    name: 'Profile'
  },
  {
    name: 'Status'
  }
]

const handleOptionClick = (index, url) => {
  activeOption.value = index
  apiURL.value = url
}

const handleShowMore = () => {
  showMore.value += 10
}

const fetchData = async () => {
  try {
    const response = await axios.get(apiURL.value)
    watchData.value = response.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  if (apiURL.value) {
    fetchData()
  }
})
</script>

<style></style>
