var path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: "@import '~@/assets/style/mobileFirst.sass' \n"
            + "@import '~@/assets/style/variables.sass'"
      }
    }
  },

  devServer: {
    overlay: true,
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'pt-BR',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
