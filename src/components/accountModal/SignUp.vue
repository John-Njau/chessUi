<template>
  <div class="flex p-10 mx-auto shadow-2xl shadow-[#333] rounded-md gap-6">
    <div class="absolute inset-0 bg-black -z-[1] opacity-[.8]"></div>
    <div class="w-full">
      <p class="text-3xl text-center lg:text-4xl">Create an account</p>
      <p class="text-center">Let's get started to create your account</p>
      <form @submit.prevent="handleSubmit" class="flex flex-col px-8 space-y-3">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          required
          placeholder="Eg. John Doe"
          class="px-2 py-2 border rounded"
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          required
          placeholder="you@email.com"
          class="px-2 py-2 border rounded"
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          required
          placeholder="********"
          class="px-2 py-2 border rounded"
        />
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          v-model="confirmPassword"
          required
          placeholder="********"
          class="px-2 py-2 border rounded"
        />
        <div class="w-full !mt-6 flex flex-col space-y-3">
          <button type="submit" class="px-4 py-2 text-white bg-gray-800 rounded">
            Create Account
          </button>
          <router-link to="/signin">
            <button type="button" class="px-4 py-2 text-white bg-gray-800 rounded">
              Already have an account? Sign in
            </button>
          </router-link>
        </div>
      </form>
    </div>
    <div class="relative hidden w-full rounded lg:flex">
      <img
        src="https://cdn2.iconfinder.com/data/icons/3d-chess/512/queen.png"
        alt=""
        class="rounded z-[999]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const router = useRouter()

const handleSubmit = () => {
  // Perform form submission logic here
  // You can access the form fields via the variables above
  // For example, you can use the router to navigate:
  router.push('/') // Change the route as needed
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
