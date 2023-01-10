

<template>
  <footer class="p-4 bg-gray-100 sm:p-6 dark:bg-gray-800">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <div   class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg"  @click="scrollToTop()" class="h-8 mr-3 cursor-pointer" alt="FlowBite Logo" />
                <span class="cursor-pointer self-center text-2xl font-semibold whitespace-nowrap dark:text-white"  @click="scrollToTop()">Joshua</span>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Site</h2>
                <ul class="text-coloring">
                    <li
            v-for="navLink in Navlinks"
            :key="navLink.id"
            class="mb-4" 
          >
            <NuxtLink  class="hover:underline" :to="navLink.to">{{ navLink.name }}</NuxtLink>
          </li>
          <li>
            <nuxt-link to="/design"  class="hover:underline ">Design</nuxt-link>
          </li>
                  
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Me</h2>
                <ul class="text-coloring">
                  <li  v-for="socialLink in sociallinks" :key="socialLink.id" class="mb-4">
                    <a target="_blank" rel="noreferrer" :href="socialLink.to" class="hover:underline"
                      > {{ socialLink.name }}</a>
                  </li>
                    <li >
                        <a href="https://jostpaino.com" target="_blank" rel="noreferrer"  class="hover:underline ">Blog</a>
                    </li>
                   
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Made with</h2>
                <ul class="text-coloring">
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
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-200">Made By Joshua Paino 2023.</span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
         <ul class="flex gap-6">
          <socials />
         </ul>
        </div>
    </div>
</footer>
</template>

<script setup lang="ts">
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
const Navlinks = [

  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Work", to: "/work" },

];
const sociallinks = [
  { id: 1, name: "Github", Icon: "ri:github-fill", to: "https://github.com/JoshuaPaino" },
  {
    id: 2,
    name: "Linkedin",
    Icon: "ri:linkedin-box-fill",
    to: "https://www.linkedin.com/in/joshuapaino",
  },
  {
    id: 3,
    name: "Twitter",
    Icon: "ri:twitter-fill",
    to: "https://twitter.com/jostpaino",
  },
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
  @apply text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-3xl;
}
.text-coloring {
  @apply text-gray-800 dark:text-gray-200
}

</style>

