module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Alfonso Bribiesca',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alfonso Bribiesca Personal Resume' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Serif|Roboto+Condensed' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Load global CSS
  */
  css: ['@/assets/css/main.css'],
  /*
  ** Load nuxt modules
  */
  modules: [
    'nuxt-purgecss'
  ],
  /*
  ** PurgeCSS
  ** https://github.com/Developmint/nuxt-purgecss
  */
  purgeCSS: {
    whitelist: ['icon-hammer-wrench', 'icon-graduation-hat', 'icon-bicycle2', 'icon-network', 'icon-briefcase']
  },
  /*
  ** This option is given directly to the vue-router Router constructor
  */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
+    ** Extract CSS
+    */
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
