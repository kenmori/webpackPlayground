# webpack Playground

nodeは既に入っている前提
---

*npm i webpack -g*
*npm i -D webpack*
*npm install webpack-dev-server -g*
*webpack-dev-server*

これが見れればok
 http://localhost:8080/webpack-dev-server/

 それぞれフォルダをカレントとしてwebpack-dev-server
 を叩く。
ブラウザでみるhttp://localhost:8080/webpack-dev-server

書く
各ディレクトリにある「write_here_webpack.config.jsに
同階層にあるwebpack.config.jsをお手本にして書く。
000_bundle/

cd 000_bundle
webpack-dev-server
===================
001

npm i babel-core babel-loader babel-preset-es2015 -D
cd 001_use_es2015
webpack-dev-server
