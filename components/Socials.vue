<template>
    
          <a
            target="_blank"
            v-for="socialLink in sociallinks"
            :key="socialLink.id"
            rel="noreferrer"
            class="navMargin"
            :href="socialLink.to"
            :aria-label="socialLink.name"
          >
            <Icon :name="socialLink.Icon" class="socialStyle" />
          </a>
    
</template>

<script setup lang="ts">


const sociallinks = [
  //
  { id: 1, name: "Github", Icon: "ri:github-fill", to: "https://github.com/" },
  {
    id: 2,
    name: "Linkedin",
    Icon: "ri:linkedin-box-fill",
    to: "https://www.linkedin.com/",
  },
  {
    id: 3,
    name: "Twitter",
    Icon: "ri:twitter-fill",
    to: "https://twitter.com/",
  },
];
</script>

<style scoped>
.router-link-exact-active {
  color: blue;
}
.navStyle {
  @apply hover:text-gray-200 text-lg;
}
.socialStyle {
  @apply hover:text-[#579BB1] text-3xl;
}
.navMargin {
  @apply mr-9;
}
</style>
