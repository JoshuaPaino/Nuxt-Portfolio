<template>
  <div class="w-full sm:w-1/2 p-3">
    <div
      class="mx-auto w-64 p-3 bg-[#E1D7C6] shadow-lg transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl"
    >
      <div class="flex flex-wrap -m-2">
        <div class="w-auto p-2"><slot name="Icon"> Icon </slot></div>
        <div class="w-auto p-2">
          <h2 class="font-heading text-base text-gray-900 font-bold">
            <slot name="techName">Ruby on Rails</slot>
          </h2>
          <p class="mb-2 text-sm text-gray-800">
            <slot name="techDetails"> Full-Stack Framework</slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
