<template>
  <div>
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Opps.</p>
    <p class="mt-7 text-6xl">{{ error.message }}</p>
    <button @click="handleClearError" class="mt07">Go Home...</button>
  </div>
</template>

<script setup>
const handleClearError = () => clearError({ redirect: "/", fatal: true });
defineProps(["error"]);
</script>
