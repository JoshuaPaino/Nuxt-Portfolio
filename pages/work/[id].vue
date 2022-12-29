<template>
  <div>
    <Head>
      <Title>Joshua | {{ info }}</Title>
      <!-- <Meta name="description" :content="project.description" /> -->
    </Head>

    Projects details for {{ info }}
  </div>
</template>

<script setup>
const id = useRoute().params;
const info = await $fetch("/api/projects");

// if (!project.id) {
//   throw createError({ statusCode: 404, StatusMessage: "Project not found" });
// }
</script>
