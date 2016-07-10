module.exports = {
  entry: {
    app: './app.js',
    index: './index.js',
    detail: './detail.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  }
}
