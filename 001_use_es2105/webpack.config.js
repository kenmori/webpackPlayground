// var webpack = require('webpack');このなかでpluginを使いたいとき読み込む必要がある

module.exports = {
  context: process.cwd(),//workingディレクトリのentryをコンパイルしてdist/[name].jsをつくる//default。この1行なくてもいい
  entry:'./js/myscript',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [//ここにオブジェクトを追加していく
      {
        test: /\.js?$/,
        exclude: /(node_modules | bower_components)/, //除外
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
}
