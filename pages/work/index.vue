<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/work").find()
);



</script>



<template>
 
  <p class="text-center tracking-widest mt-8 text-gray-500 font-bold">
       Developer
     </p>
     <h2 class="text-center text-7xl text-indigo-900  font-bold">
       My Projects
     </h2>
  <FeaturedPanel>
   
 
     <div class="flex flex-wrap lg:flex-row flex-col">
       <div
       v-for="post in posts" :key="post.id"
     
         class="w-full lg:w-1/2 p-2"
       >
         <div class="w-full bg-white rounded-2xl p-4 bg-[#E1D7C6] ">
           <NuxtLink :to="post._path" >
        
           <img :alt="post.title" :src="post.image.src" />
           <h3 class="text-2xl">{{ post.title }}</h3>
           <p class="text-xl mb-8">{{ post.description }}</p>
           <p class="text-center">Click to see More</p>
           </NuxtLink>
         </div>
       </div>
     </div>
   </FeaturedPanel>

 
</template>

