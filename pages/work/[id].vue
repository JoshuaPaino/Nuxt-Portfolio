<template>
  <div>
    <Head>
      <Title>Joshua | {{ id }}</Title>
      <!-- <Meta name="description" :content="project.description" /> -->
    </Head>

    Projects details for {{ id }}
  </div>
</template>

<script setup>
const { id } = useRoute().params;

// if (!project.id) {
//   throw createError({ statusCode: 404, StatusMessage: "Project not found" });
// }
</script>
