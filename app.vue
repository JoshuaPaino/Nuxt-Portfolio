<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage   />
  </NuxtLayout>
</template>
<style>
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}
body {
  background-color: #f8f8fa;
  color: #55527c;
  font-family: Rubik;
  @apply dark:bg-gray-800 text-gray-800 dark:text-[#FFF8EA];
}
h1,h2,h3,h4,h5,h6 {
   font-family: Lora;
}

</style>
