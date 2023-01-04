<template>
  <header>
    <nav class="flex items-center justify-between px-8 py-5">
      <NuxtLink to="/">Joshua</NuxtLink>
      <div class="w-auto">
        <ul class="flex items-center">
          <li
            v-for="navLink in Navlinks"
            :key="navLink.id"
            class="navMargin navStyle"
          >
            <NuxtLink :to="`/${navLink.to}`">{{ navLink.name }}</NuxtLink>
          </li>
      
          <div class="hidden md:block">
            <Socials />
          </div>
         
          <DarkModeButton />
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Socials from "../Socials.vue";
import DarkModeButton from "./DarkModeButton.vue";
const Navlinks = [
  { id: 1, name: "Work", to: "work" },
  { id: 2, name: "Contact", to: "contact" },
  
];

</script>

<style scoped>
.router-link-exact-active {
  @apply text-blue-700 dark:text-yellow-400;
  
}

.navStyle {
  @apply hover:text-gray-200 text-lg;
}
.socialStyle {
  @apply hover:text-gray-200 text-3xl;
}
.navMargin {
  @apply mr-2 sm:mr-4 md:mr-9;
}
</style>
