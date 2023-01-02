<template>
  
  <div>
   
    <section class="h-full max-w-[800px] mx-auto w-full pt-5 pb-20 mb-2">

      <div class="container mx-auto px-4">
        
        <div class="items-center flex flex-wrap">
          <nuxt-link to="/work" class="mb-8 px-4">Go back</nuxt-link>
          <div class="w-full  ml-auto mr-auto px-4">
            
            <img
              :alt="`${MdImageName}`"
              width="634"
              height="400"
              class="max-w-full h-[40vh] object-fill  w-full rounded-lg shadow-lg object-cover"
              :src="`${MdImage}`"
            />
          
          </div>
          <div class="w-full  ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-800 dark:bg-white"
              >
              
                <Icon :name="`${FrameworkIcon}`" class="cardLogo" />
              </div>
              <h3 class="text-3xl font-semibold">Project Name</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                {{ ProjDesc}}
              </p>
             <div class="mt-4 mb-4 border flex flex-col text-center ">
              <h3 class="text-3xl font-semibold">Tech Stack</h3>
              <ul class="mt-4 flex flex-wrap gap-8 items-center justify-center text-center">
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Sanity</li>
                
                <li>b</li>
              </ul>

             </div>
             <div class="lg:flex flex-row w-full items-center gap-4">
              <a :href="ViewLink" target="_blank" rel="noopener" class="lg:mt-4 md:w-1/2"><main-button>View Live</main-button></a>
                <a :href="GitLink" class="w-1/2 "  target="_blank" rel="noopener"><button-overlay class=" mt-4">Visit Git</button-overlay></a>
        
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  ViewLink: string,
  GitLink: string,
  FrameworkIcon: string,
  MdImage: string,
  MdImageName: string,
  ProjDesc: string,
}>()
</script>
