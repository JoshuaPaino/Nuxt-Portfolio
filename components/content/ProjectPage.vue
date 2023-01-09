<template>
  <div
    class="flex h-auto w-full py-16 px-4 items-center justify-center xl:h-[80vh] xl:py-0"
  >
    <Layout>
      <div class="flex flex-col-reverse gap-8 xl:flex-row">
        <div class="w-full group xl:w-1/2">
          <nuxt-img
            format="webp"
            :src="`/img/${MdImage}.png`"
            fit="cover"
            :alt="`${MdImageName}`"
            class="rounded-lg object-cover w-full transition-all group-hover:-rotate-2 transform-gpu duration-300 ease-in-out will-change-transform md:h-120 group-hover:scale-102"
          />
        </div>

        <div class="flex flex-col w-full gap-4 justify-center xl:w-1/2">
          <div>
            <nuxt-link
              to="/work"
              class="mb-8 border dark:hover:bg-gray-700 dark:border-[#FFF8EA] border-black rounded-lg px-4 hover:bg-gray-300"
              >Go back</nuxt-link
            >
          </div>

          <h1 class="text-6xl">
            {{ ProjTitle }}
          </h1>
          <p class="font-normal text-xl">
            {{ ProjDesc }}
            <br />
            <br />
            Tools used: {{ ToolsUsed }}
          </p>
          <div class="lg:flex flex-row w-full items-center gap-4">
            <a
              :href="ViewLink"
              target="_blank"
              rel="noopener"
              class="lg:mt-4 md:w-1/2"
              ><main-button>View Live</main-button></a
            >
            <a :href="GitLink" class="w-1/2" target="_blank" rel="noopener"
              ><button-overlay class="mt-4">Visit Git</button-overlay></a
            >
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from "../Layout.vue";

defineProps<{
  ViewLink: string;
  GitLink: string;
  MdImage: string;
  MdImageName: string;
  ToolsUsed: string;
  ProjDesc: string;
  ProjTitle: string;
}>();
</script>
