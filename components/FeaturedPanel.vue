<template>
  <section
    class="flex flex-wrap justify-center max-w-7xl mx-auto items-center w-full -m-6 pt-20 pb-40"
  >
    <div
      class="w-full mx-auto "
     
    >
      <slot />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useMouseInElement } from "@vueuse/core";
const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } =
  useMouseInElement(target);
const cardTransform = computed(() => {
  const MAX_ROTATION = 6;
  const rX = (
    MAX_ROTATION / 2 -
    (elementY.value / elementHeight.value) * MAX_ROTATION
  ).toFixed(2); // handles x-axis
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTATION -
    MAX_ROTATION / 2
  ).toFixed(2); // handles y-axis
  return isOutside.value
    ? ""
    : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<style scoped>
/* .card {
  transform: v-bind(cardTransform);
  transition: transform 0.25s ease-out;
} */
</style>
