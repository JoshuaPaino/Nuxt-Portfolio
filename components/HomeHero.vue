<template>
    <section class="flex flex-wrap justify-between -m-6 pt-32 pb-40 lg:mb-10">
      <div class="w-full lg:w-5/12 xl:w-1/2 p-6 lg:mt-20">
        <p class="mb-5 font-heading dark:text-gray-200 text-gray-400 font-medium text-xl">
          Full Stack Developer
        </p>
        <h1
          class="mb-14 font-heading text-7xl md:text-8xl xl:text-11xl font-bold"
        >
          Joshua Paino
        </h1>
        <div class="flex flex-wrap -m-3 mb-20">
          <div class="w-full lg:w-auto p-3">
            <button @click="$router.push('/work')"
              class="font-heading w-full px-6 py-4 dark:bg-[#9E7676] dark:hover:bg-[#815B5B] text-base hover:bg-[#74b1c4]  text-white  bg-[#579BB1] hover:gray-100 rounded-md"
            >
              Check My Work
            </button>
          </div>
          <div class="w-full lg:w-auto p-3">
            <ButtonOverlay @click="$router.push('/blog')" />
          </div>
        </div>
      </div>
      <div class="w-full lg:w-7/12 xl:w-1/2 p-6">
        <div class="max-w-max mx-auto">
          <div class="w-full p-3">
            <div
              class="mx-auto w-64 p-3 bg-[#E1D7C6] shadow-lg  transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl"
            >
              <div class="flex -m-2">
                <div class="w-auto p-2">
                  <Icon :name="codeRow1.Icon" class="cardLogo" />
                </div>
                <div class="w-auto p-2">
                  <p class="font-heading text-base text-gray-900">
                    {{ codeRow1.techName }}
                  </p>
                  <p class="mb-2 text-sm text-gray-500">
                    {{ codeRow1.techDetails }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-center max-w-max -m-3 mb-3">
            <LandingCard v-for="cR2 in codeRow2" :key="cR2.id">
              <template #Icon>
                <Icon :name="cR2.Icon" class="cardLogo"
              /></template>
              <template #techName> {{ cR2.techName }} </template>
              <template #techDetails> {{ cR2.techDetails }} </template>
            </LandingCard>
          </div>
          <div
            class="flex flex-wrap justify-center max-w-max xl:-ml-20 -m-3 mb-3"
          >
            <LandingCard v-for="cR3 in codeRow3" :key="cR3.id">
              <template #Icon>
                <Icon :name="cR3.Icon" class="cardLogo"
              /></template>
              <template #techName> {{ cR3.techName }} </template>
              <template #techDetails> {{ cR3.techDetails }} </template>
            </LandingCard>
          </div>
          <div class="flex flex-wrap justify-center max-w-max -m-3 mb-3">
            <LandingCard v-for="cR4 in codeRow4" :key="cR4.id">
              <template #Icon>
                <Icon :name="cR4.Icon" class="cardLogo" />
              </template>
              <template #techName> {{ cR4.techName }} </template>
              <template #techDetails> {{ cR4.techDetails }} </template>
            </LandingCard>
          </div>
        </div>
      </div>
    </section>
</template>

<style>
.cardLogo {
  @apply text-6xl;
}
</style>

<script setup>
import landingCard from './landingCard.vue';

const featuredProjects = [
  {
    id: 1,
    name: "Work",
    desc: "work",
    to: "/",
    image: "/img/VPortfolio.JPG",
  },
  {
    id: 2,
    name: "Blog",
    desc: "work",
    to: "/",
    image: "/img/VPortfolio.JPG",
  },
  {
    id: 3,
    name: "Contact",
    desc: "work",
    to: "/",
    image: "/img/VPortfolio.JPG",
  },
  {
    id: 4,
    name: "Contact",
    desc: "work",
    to: "/",
    image: "/img/VPortfolio.JPG",
  },
];
const codeRow1 = {
  Icon: "logos:vue",
  techName: "Vue",
  techDetails: "Front-End Framework",
};
const codeRow2 = [
  {
    id: 1,
    Icon: "logos:tailwindcss-icon",
    techName: "Tailwind",
    techDetails: "CSS Framework",
  },
  {
    id: 2,
    Icon: "logos:postgresql",
    techName: "PostgreSQL",
    techDetails: "Database",
  },
];
const codeRow3 = [
  {
    id: 1,
    Icon: "logos:nuxt-icon",
    techName: "NuxtJS",
    techDetails: "Full-Stack Framework",
  },
  {
    id: 2,
    Icon: "logos:react",
    techName: "React",
    techDetails: "Front-End Framework",
  },
];
const codeRow4 = [
  {
    id: 1,
    Icon: "logos:nextjs-icon",
    techName: "NextJS",
    techDetails: "Front-End Framework",
  },
  {
    id: 2,
    Icon: "vscode-icons:file-type-rails",
    techName: "Ruby on Rails",
    techDetails: "Full-stack Framework",
  },
];
</script>