var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry : {
    index: './js/sub',
    index2: './js/sub2',
    index3: './js/sub3'
  },
  output : {
    path: './dist',
    filename: '[name].entry.chunk.js'
  },
  plugins: [
    new CommonsChunkPlugin('commons.chunk.js')
  ]
}
