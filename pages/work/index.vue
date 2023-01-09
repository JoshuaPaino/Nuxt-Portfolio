<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/work").find()
);
</script>

<template>
   <Head>
      <Title>Joshua Paino's projects</Title>
      <Meta name="description" content="Portfolio projects" />
    </Head>

  <div class="max-w-7xl mx-auto">
    <p
      class="text-center mt-10 tracking-widest text-gray-400 dark:text-gray-200 font-bold"
    >
      Developer
    </p>
    <h2 class="text-center text-7xl font-bold">All Projects</h2>
    <div class="flex flex-col py-16 gap-16">
      <Grid />
    </div>
  </div>
</template>
