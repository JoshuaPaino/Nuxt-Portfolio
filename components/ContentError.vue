<template>

    <div class="h-screen w-screen flex items-center">
        <div class="container flex flex-col md:flex-row mx-auto items-center justify-center px-5">
               <div class="max-w-md">
                  <div class="text-5xl font-dark font-bold">Page Not Found</div>
                <p
                  class="text-2xl md:text-3xl font-light leading-normal"
                >Oops.</p>
              <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
              <nuxt-link to="/work">
              <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow dark:bg-[#9E7676] dark:hover:bg-[#815B5B]  hover:bg-[#74b1c4]  text-white  bg-[#579BB1] transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue">Go Home...</button>
            </nuxt-link>
        </div>
          <div class="max-w-lg">
            <img src="/logo.svg" class="h-32 w-32" />
        </div>
        
      </div>
    </div>
    
    </template>

      
