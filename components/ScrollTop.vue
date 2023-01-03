
<template>
  
      <div
        class="rounded-full shadow-lg bg-gray-300 cursor-pointer shadow-gray-600 dark:shadow-black p-2 lg:mb-10"
        @click="scrollToTop()"
        alt="Back To Top"
      >
        
        <Icon name="material-symbols:keyboard-double-arrow-up"  class="text-2xl lg:text-3xl dark:text-black" />
      </div>

  </template>
  <script setup>

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  </script>