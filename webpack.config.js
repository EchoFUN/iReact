var path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    'tr-account': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].min.js',
    publicPath: '',
    library: 'tr-account',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './src')]
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
