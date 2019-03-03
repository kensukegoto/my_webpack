module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js' // 複数ファイルから１つになったもの
  },
  mode: 'development',
  devtool: 'eval-source-map',
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[{
          loader: 'babel-loader',
          options:{
            presets:[
              ["@babel/preset-env", {
                "targets": [">0.25% in JP", "not ie <= 10", "not op_mini all"],
                // 必要なpolyfillプラグインを自動的に使う
                "useBuiltIns": "usage",
              }]
            ]
          }
        }],
        exclude:/node_modules/,
      }
    ]
  }
};