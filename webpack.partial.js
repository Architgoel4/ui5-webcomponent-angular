module.exports = {
    module: {
      rules: [
        {
          test: [/cldr\/.*\.json$/, /i18n\/.*\.json$/, /.*assets\/.*\.js/],
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
          type: 'javascript/auto'
        }
      ]
    }
};
