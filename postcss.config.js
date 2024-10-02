const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './*.html',
      './js/*.js'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  });
  
  module.exports = {
    plugins: [
      require('autoprefixer'),
      purgecss
    ]
  };