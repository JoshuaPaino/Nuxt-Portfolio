<template>
  <button
    class="font-heading w-full px-6 py-4 text-base   dark:border-[#FFF8EA] text-gray-900 bg-transparent border border-gray-400 hover:gray-100 rounded-md group relative overflow-hidden"
  >
    <p class="relative dark:text-[#FFF8EA] z-10 group-hover:text-white dark:group-hover:text-gray-800">
      <slot>Read My Blog</slot>
    </p>
    <div
      class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gray-900 dark:bg-[#FFF8EA]  transition ease-in-out duration-500"
    ></div>
  </button>
</template>
