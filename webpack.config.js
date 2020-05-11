const path = require('path');
const Webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    menu:'./src/menu.js',
    home:'./src/home.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
   /* new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        chunks: ['index', 'menu','common'],
        chunksSortMode: 'dependency'
      }),
      new HtmlWebpackPlugin({  
        filename: 'about.html',
        template: './src/about.html',
        chunks: ['index', 'menu', 'about'],
        chunksSortMode: 'dependency'
      }),*/
      new MiniCssExtractPlugin()
    
  ],
  module: {
    rules: [
       {
                use:'babel-loader',
                test:/\.js$/
       },
      {
        test:/.scss$/,
        use:[
          MiniCssExtractPlugin.loader,
             
          'css-loader',
          
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
       {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "common",
          chunks: 'all'
        }
      }
    },
     
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        //include: /\/src/,
        extractComments: 'all',
      }),
      new optimizeCssAssetsPlugin()
    ],
  
  }
};