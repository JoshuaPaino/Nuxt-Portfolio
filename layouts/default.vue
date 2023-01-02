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

</style>

<script setup>
import Navbar from "~/components/layout/Navbar.vue";
</script>
