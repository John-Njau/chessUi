<script setup lang="ts">
import Footer from './components/navigation/footer/Footer.vue'
import Navbar from './components/navigation/Navbar/Navbar.vue'
</script>

<template>
  <main
    class="relative overflow-hidden bg-[#151515] text-white lg:px-20 lg:py-[5rem] font-[Capriola]"
  >
    <div
      class="shadow-[#252525] shadow-2xl w-[12rem] h-[12rem] absolute rounded-full bg-[#AC8D75] left-[35%] top-[3rem] z-[9]"
    ></div>
    <div
      class="shadow-[#252525] shadow-2xl w-[20rem] h-[20rem] absolute rounded-full bg-[#AC8D75] -right-10 bottom-0 z-[9]"
    ></div>
    <div
      class="shadow-[#252525] shadow-2xl w-[4rem] h-[4rem] absolute rounded-full bg-[#AC8D75] left-10 top-[50%] z-[999] hidden lg:flex"
    ></div>
    <div
      class="flex flex-col justify-between min-h-screen z-[99] relative bg-hero bg-center bg-no-repeat bg-cover rounded-xl overflow-hidden"
    >
      <Navbar />
      <RouterView />
      <Footer />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
