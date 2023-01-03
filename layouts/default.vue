<template>
  <div>
    <!--  -->
    <Navbar />
    <main>
      <slot />
    </main>
   <VFooter />
  </div>
</template>

<style scoped>
h1 {
  font-family: "Roboto Serif";
}

</style>

<script setup>
import Navbar from "~/components/layout/Navbar.vue";
import VFooter from "../components/VFooter.vue";
</script>
