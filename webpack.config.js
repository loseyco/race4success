module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: require('path').resolve(__dirname, 'public/js')
  },
  mode: 'development',
  devtool: 'source-map'
};
