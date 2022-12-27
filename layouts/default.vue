<template>
  <div>
    <!--  -->
    <Navbar />
    <main>
      <slot />
    </main>
    <!--  -->
  </div>
</template>

<style scoped>
h1 {
  font-family: "Roboto Serif";
}
* {
  background-color: #f8f8fa;
  color: #55527c;
  overflow: hidden;
  @apply dark:bg-slate-400;
}
</style>

<script setup>
import Navbar from "~/components/layout/Navbar.vue";
</script>
