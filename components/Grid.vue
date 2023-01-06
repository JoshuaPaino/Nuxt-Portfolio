<template>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 gap-8 2xl:px-0">
        <template v-for="post in posts" :key="post.id">
            <div class="group">
              <NuxtLink :to="post._path" >
                <nuxt-img format="webp" fit="cover" :src="post.image.src" class="rounded-lg cursor-pointer  h-120 w-full transform-gpu transition-all duration-300 ease-in-out will-change-transform group-hover:scale-102 group-hover:group-odd:rotate-2 group-hover:group-even:-rotate-2" :alt="post.title" width="480" height="480" />
              </NuxtLink>
              
            <div class="flex flex-col py-2">
                <h2 class="text-lg w-full  inline">
                    {{post.title}}
                </h2>
                <p class="text-base w-full text-gray-600 dark:text-gray-200 inline">
                  {{post.description}}
                </p>
            </div>
            </div>
        </template>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/work").find()
);


</script>