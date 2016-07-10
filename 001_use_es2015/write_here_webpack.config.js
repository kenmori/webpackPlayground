module.exports = {
  entry: 'app.js',
  output: {
    path: './dist/'
  },
  module : {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules | bower_components)/,
        loader: 'babel'
      }
    ]
  }

}
