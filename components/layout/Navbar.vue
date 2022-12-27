<template>
  <header>
    <nav class="flex items-center justify-between px-8 py-5">
      <NuxtLink to="/">Joshua</NuxtLink>
      <div class="w-auto hidden md:block">
        <ul class="flex items-center">
          <li
            v-for="navLink in Navlinks"
            :key="navLink.id"
            class="navMargin navStyle"
          >
            <NuxtLink :to="`/${navLink.to}`">{{ navLink.name }}</NuxtLink>
          </li>
          <a
            target="_blank"
            v-for="socialLink in sociallinks"
            :key="socialLink.id"
            rel="noreferrer"
            class="navMargin"
            :href="socialLink.to"
            :aria-label="socialLink.name"
          >
            <Icon :name="socialLink.Icon" class="socialStyle" />
          </a>
          <DarkModeButton />
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import DarkModeButton from "./DarkModeButton.vue";
const Navlinks = [
  //
  { id: 1, name: "Work", to: "work" },
  { id: 2, name: "Blog", to: "blog" },
  { id: 3, name: "Contact", to: "contact" },
];
const sociallinks = [
  //
  { id: 1, name: "Github", Icon: "ri:github-fill", to: "https://github.com/" },
  {
    id: 2,
    name: "Linkedin",
    Icon: "ri:linkedin-box-fill",
    to: "https://www.linkedin.com/",
  },
  {
    id: 3,
    name: "Twitter",
    Icon: "ri:twitter-fill",
    to: "https://twitter.com/",
  },
];
</script>

<style scoped>
.router-link-exact-active {
  color: blue;
}
.navStyle {
  @apply hover:text-gray-200 text-lg;
}
.socialStyle {
  @apply hover:text-gray-200 text-3xl;
}
.navMargin {
  @apply mr-9;
}
</style>
