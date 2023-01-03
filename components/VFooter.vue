

<template>
  <footer class="p-4 bg-gray-50 sm:p-6 dark:bg-gray-900">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="#"  class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Joshua</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Site</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li
            v-for="navLink in Navlinks"
            :key="navLink.id"
            class="mb-4"
          >
            <NuxtLink :to="`/${navLink.to}`">{{ navLink.name }}</NuxtLink>
          </li>
          <nuxt-link to="contact">Contact</nuxt-link>
                  
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Me</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#"  class="hover:underline ">Github</a>
                    </li>
                    <li class="mb-4">
                        <a href="#"  class="hover:underline ">Twitter</a>
                    </li>
                    <li>
                        <a href="#"  class="hover:underline">Linkedin</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Made with</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://nuxtjs.org/" target="_blank" class="hover:underline">Nuxt</a>
                    </li>
                    <li class="mb-4">
                        <a href="https://content.nuxtjs.org/" target="_blank" class="hover:underline">Nuxt Content</a>
                    </li>
                    <li class="mb-4">
                        <a href="https://greensock.com/gsap/" target="_blank" class="hover:underline">GSAP &amp; Vue Transition</a>
                    </li>
                    <li class="mb-4">
                        <a href="https://tailwindcss.com/" target="_blank" class="hover:underline">Tailwind CSS</a>
                    </li>
                    <li>
                        <a href="https://vueuse.org/" target="_blank" class="hover:underline">VueUse</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made By <a href="https://flowbite.com/" class="hover:underline">Joshua Paino</a> 2023.        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a target="_blank" v-for="socialLink in sociallinks" :key="socialLink.id" rel="noreferrer" :href="socialLink.to" :aria-label="socialLink.name"
>
<Icon :name="socialLink.Icon" class="socialStyle" />
</a>
        </div>
    </div>
</footer>
</template>

<script setup lang="ts">
const Navlinks = [

  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Work", to: "work" },
  { id: 3, name: "Blog", to: "blog" },

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
  @apply text-gray-500 hover:text-gray-900 dark:hover:text-white text-3xl;
}

</style>

