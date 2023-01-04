<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/work").find()
);



</script>



<template>
 
 <p class="text-center mt-10 tracking-widest text-gray-400 dark:text-gray-200 font-bold">
       Developer
     </p>
     <h2 class="text-center text-7xl  font-bold">
       All Projects
     </h2>
  <FeaturedPanel>
   
 
     <div class="flex flex-wrap lg:flex-row flex-col">
       <div
       v-for="post in posts" :key="post.id"
     
         class="w-full lg:w-1/2 p-2"
       >
       <div class="w-full bg-[#E1D7C6] hover:bg-[#ECE8DD] shadow-lg rounded-lg overflow-hidden">
           <NuxtLink :to="post._path" >
        
           <img :alt="post.title" :src="post.image.src" />
           <div class="p-6">
            <h3 class="text-2xl text-gray-800">{{ post.title }}</h3>
           <p class="text-xl mb-8 text-gray-800">{{ post.description }}</p>
           <p class="text-center text-gray-800">Click to see More</p>
           </div>
        
           </NuxtLink>
         </div>
       </div>
     </div>
   </FeaturedPanel>

 
</template>

