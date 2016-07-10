var webpack = require('webpack');

module.exports = {
  context: process.cwd(),//workingディレクトリのentryをコンパイルしてdist/[name].jsをつくる//default
  entry:'./myscript',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
}
