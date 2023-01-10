// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
    modules: [
        '@nuxtjs/tailwindcss', 'nuxt-icon','@nuxtjs/color-mode','@nuxt/image-edge',  '@vueuse/nuxt',    '@nuxt/content',
  ],  colorMode: {
        classSuffix: ''
      },
      tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
      },
      buildModules: [
        '@nuxt/image',    '@nuxtjs/google-fonts',
      ],
      googleFonts: {
        families: {
          Rubik: true,
          Lora: [500],
        }
      },
      app:{
        head:{          
            title: 'Joshua Paino',
            htmlAttrs: {
                lang: 'en'
              },
            meta: [
                {name: 'description', content: "My Portfolio"}
            ],
        }
      },
})
