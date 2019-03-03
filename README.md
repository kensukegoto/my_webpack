標準的なESModules ??
## モジュールとは？
exportとimportで使うファイルの事。

例：
```
export function hello(){
  console.log("hello");
}
```
## webpackの自動ビルド
```
"scripts": {
  "build": "webpack --watch --config webpack.config.js"
}
```
再ビルドは差分だけ処理されるので初回ビルドより高速
## 本番/開発モード
- development<br>
よりでバックに適したコード
- production<br>
不要なコードを削除し出来るだけ小さく実行効率の良いコード
- どう使えば良い？<br>
webpack.config.js のexportsするオブジェクトのプロパティに mode を指定する。<br>
  - mode: 'development'
  - mode: 'production'(デフォルト)
コード中でどちらのモードかを確認したい場合は下記コード
```
console.log(process.env.NODE_ENV);
```
- ソースマップを選ぼう
デバック時に何行目のコードが悪さしているのかなどはソースマップを使う事で分かる。ソースマップはバンドル後のjsに含まれるのでsassのように別ファイルを必要としない。開発時は eval-source-map を使うとwebpackを使わない開発時と同じようなでバックが可能。**デフォルトのものでも十分**。webpack.config.jsで下記を追記。
```
devtool: 'eval-source-map'
```
## babelと組み合わせて最強！
babel単独では node_modules に含まれる promise などをES5に変換するモジュールは、requireで読み込まないといけないが、webpackを使うと、requireせずに１つのファイルにまとめてくれる。

[npm scripts で webpack の実行と gulp の実行両方やりたい！](https://ics.media/entry/12226)