const path = require('path')
const webpack = require('webpack')

module.exports = { 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    port: 3003
  },  
  plugins: [
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},       
          {loader: "css-loader"},         
          {loader: "sass-loader"}         
        ]
      }
    ]
  }

}
