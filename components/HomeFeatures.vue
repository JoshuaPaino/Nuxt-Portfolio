<template>
 

    <FeaturedPanel>
      <p class="text-center tracking-widest text-gray-400 dark:text-gray-200 font-bold">
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
           
                <nuxt-img format="webp" :alt="proj.name" :src="`/img/${proj.image}.png`" class="h-full overflow-hidden" />
       
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
    image: 'Nuxtp',
    Icon: "logos:nuxt-icon",
  },
  {
    id: 2,
    name: "Metaverse Madness",
    desc: "Portfolio I made to house the projects.",
    to: "next-metaverse",
    image: 'Metaverse',
    Icon:  "logos:nextjs-icon",
  },
  {
    id: 3,
    name: "GraphQL Rick and Morty",
    desc: "Portfolio I made to house the projects.",
    to: "megaportfolio",
    image: 'NuxtRickMorty',
    Icon: "logos:nuxt-icon",
  },
  {
    id: 4,
    name: "JamStack Nuxt Portfolio",
    desc: "Portfolio I made to house the projects.",
    to: "megaportfolio",
    image: 'ReactGericht',
    Icon: "logos:react",
  },
];
</script>
