// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
    modules: [
        '@nuxtjs/tailwindcss', 'nuxt-icon','@nuxtjs/color-mode',  '@vueuse/nuxt',    '@nuxt/content'
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
        '@nuxt/image',
      ],
      app:{

        head:{
          
            title: 'Application Head',
            htmlAttrs: {
                lang: 'en'
              },
            meta: [
                {name: 'description', content: "My Portfolio"}
            ],
            link: [
                { rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Roboto+Serif&display=swap"}
            ]
        }
      }
})
