<template>
  <main>
    <ContentRenderer :value="data">
      <template #empty>
        <ContentError />
      </template>
    </ContentRenderer>
  
  </main>
</template>

<script setup>
const route = useRoute();
const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent().where({ _path: route.path }).findOne()
);
useContentHead(data)
</script>
