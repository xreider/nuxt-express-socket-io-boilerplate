export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'complete-nuxt-js-2-4-create-nuxt-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/socket.js'
    { src: '~/plugins/socket.client.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    langDir: 'locales/',
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    },
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   onlyOnRoot: true,  // recommended
    // },
    // vueI18n: {
    //   fallbackLocale: 'en',
    //   messages: {
    //     'en': require('~/locales/en.js'),
    //     'ru': require('~/locales/ru.js')
    //    }
    // }
  },

  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // vendor: ['~assets/socket.io.min.js'],
  },

  router: {
    linkExactActiveClass: 'active',
    // middleware: ["mw_cookie"]
  }

}
