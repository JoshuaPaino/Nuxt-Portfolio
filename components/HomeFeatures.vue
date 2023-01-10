<template>
 

    <FeaturedPanel>
      <p class="text-center tracking-widest text-gray-900 dark:text-gray-200 font-bold">
        Developer
      </p>
      <h2 class="text-center text-7xl  mb-14 font-bold">
        Featured Projects
      </h2>
      <div class="flex flex-col gap-6 flex-wrap">
        <template
          v-for="proj in featuredProjects"
          :key="proj.id"
          class="w-full  p-4 lg:p-8 "
        > 
        <NuxtLink :to="`/work/${proj.to}`" >
          <div class="w-full bg-gray-200  justify-center my-auto mx-auto flex flex-col md:grid grid-cols-3  shadow-lg rounded-lg overflow-hidden">
           
                <nuxt-img format="webp" loading="lazy" width="100%" height="100%" :alt="proj.name" :src="`/img/${proj.image}.png`" class="h-full overflow-hidden" />
       
            <div class="my-auto mx-auto p-4">
              <h3 class="text-2xl dark:text-gray-900 mb-2 font-bold text-center">{{ proj.name }}</h3>
            <p class="text-xl dark:text-gray-800">{{ proj.desc }}</p>
            </div>
            <div class="my-auto mx-auto">
                 <Icon :name="proj.Icon" class="h-20 w-20 p-4 lg:w-40 lg:h-40 " />
           
            </div>
          </div>
        </NuxtLink>
        
        </template>
      </div>
    </FeaturedPanel>
</template>

<script setup>
import FeaturedPanel from './FeaturedPanel.vue';
const featuredProjects = [
  {
    id: 1,
    name: "JamStack Nuxt Portfolio",
    desc: "Portfolio I made to house the projects.",
    to: "megaportfolio",
    image: 'vNuxtp',
    Icon: "logos:nuxt-icon",
  },
  {
    id: 2,
    name: "Metaverse Madness",
    desc: "Frontend portfolio project using NextJS and Framer-motion as the animation library to create a modern website.",
    to: "next-metaverse",
    image: 'nextmeta',
    Icon:  "logos:nextjs-icon",
  },
  {
    id: 3,
    name: "Music App",
    desc: "Full-stack portfolio project using Vue3 as the front-end and Firebase as the backend.",
    to: "vue-music",
    image: 'music',
    Icon: "logos:vue",
  },
  {
    id: 4,
    name: "Gericht",
    desc: "Front-end portfolio project using React.",
    to: "react-gericht",
    image: 'ReactGericht',
    Icon: "logos:react",
  },
];
</script>
