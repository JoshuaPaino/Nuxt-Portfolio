<template>
  <button
    class="font-heading w-full px-6 py-4 text-base dark:border-gray-800 text-gray-900 bg-transparent border border-gray-400 hover:gray-100 rounded-md group relative overflow-hidden"
  >
    <p class="relative z-10 group-hover:text-white">
      <slot>Read My Blog</slot>
    </p>
    <div
      class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 transition ease-in-out duration-500"
    ></div>
  </button>
</template>
