<template>
  <div
    class="flex flex-col justify-between px-3 rounded shadow-2xl shadow-[#222] lg:flex-row lg:items-center"
  >
    <div class="flex items-center justify-between">
      <img src="https://picsum.photos/50/30" class="rounded" alt="" />
      <div class="flex lg:hidden text-[2rem]">
        <CgMenuRight @click="toggleMobileMenu" />
      </div>
    </div>
    <div class="my-4 rounded lg:bg-inherit lg:w-2/3">
      <div
        class="flex flex-col items-end w-full lg:flex lg:justify-evenly lg:flex-row"
        :class="{ block: mobileMenu, hidden: !mobileMenu }"
        @click="toggleMobileMenu"
      >
        <template v-for="(item, index) in header" :key="index">
          <router-link
            :to="item.path"
            class=""
            @mouseenter="handleMenuItemMouseEnter(index)"
            @mouseleave="handleMenuItemMouseLeave(index)"
          >
            <div class="flex flex-col items-center">
              {{ item.menu }}
              <div class="mt-5 lg:hidden" v-if="item.menu === 'Account' && showSubMenu">
                <template v-for="(submenuItem, subIndex) in subMenu" :key="subIndex">
                  <router-link :to="submenuItem.path">
                    <p class="p-1 px-2 my-1 border rounded-sm" @click="toggleSubMenu">
                      {{ submenuItem.menu }}
                    </p>
                  </router-link>
                </template>
              </div>
            </div>
            <div
              v-if="hoveredMenuItemIndex === index && index !== 5"
              class="relative bottom-0 flex flex-col gap-1"
            >
              <div class="w-full h-[.2rem] bg-[#AC8D75] absolute"></div>
              <div class="w-1/2 h-[.2rem] bg-[#AC8D75] absolute top-[0.3rem]"></div>
            </div>
            <div
              v-if="hoveredMenuItemIndex === 5 && showSubMenu"
              :class="{ absolute: index === 5, hidden: index !== 5 }"
              class="flex-col"
            >
              <template v-for="(submenuItem, subIndex) in subMenu" :key="subIndex">
                <router-link :to="submenuItem.path">
                  <p class="p-1 my-1 border rounded-sm" @click="toggleSubMenu">
                    {{ submenuItem.menu }}
                  </p>
                </router-link>
              </template>
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { header, subMenu } from '../../../assets/Data'; // Assuming you have imported your data
// import { CgMenuRight } from 'vue-icons/cg';

const mobileMenu = ref(false)
const hoveredMenuItemIndex = ref(null)
const showSubMenu = ref(false)

const toggleMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value
}

const handleMenuItemMouseEnter = (index) => {
  if (header[index].menu === 'Account') {
    showSubMenu.value = true
  }
  hoveredMenuItemIndex.value = index
}

const handleMenuItemMouseLeave = (index) => {
  if (header[index].menu === 'Account') {
    showSubMenu.value = false
  }
  hoveredMenuItemIndex.value = null
}

const toggleSubMenu = () => {
  showSubMenu.value = !showSubMenu.value
}

const header = [
  {
    menu: 'Home',
    path: '/'
  },
  {
    menu: 'Play',
    path: '/play'
  },
  {
    menu: 'Leaderboard',
    path: '/leaderboard'
  },
  {
    menu: 'Watch & Learn',
    path: '/watch-and-learn'
  },
  {
    menu: 'Puzzles',
    path: '/puzzles'
  },
  {
    menu: 'Account',
    path: '#'
  }
]

const subMenu = [
  {
    menu: 'Sign In',
    path: 'signin'
  },
  {
    menu: 'Sign Up',
    path: 'signup'
  }
]
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
