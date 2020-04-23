# XD Tutorial

parcelのHello WorldついでにAdobe XDの基本を学ぶ。チュートリアルを作ってみた。

## はじめに

```sh
# node.js version
$ node -v
v12.16.2

# install parcel
$ npm install -g parcel-bundler
```

## 開発

```sh
$ parcel src/*.html
```

ブラウザで[http://localhost:1234/index.html](http://localhost:1234/index.html)を開く


## ビルド

```sh
$ parcel build src/*.html --public-url .
```

Finderでdistフォルダのindex.htmlを開く
