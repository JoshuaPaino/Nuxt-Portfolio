<template>
  <div>
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>
    <!-- output the page content -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        <li><NuxtLink to="/projects">Work</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: blue;
}
</style>

<script setup>
import Navbar from "~/components/layout/Navbar.vue";
</script>
