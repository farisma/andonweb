const path = require('path');
const Webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    menu: "./src/menu.js",
    home: "./src/home.js",
    team: "./src/team.js",
    map:"./src/map.js"
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath:'/'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    watchContentBase: true,
    port: 9000,
    watchOptions: {
      ignored: [path.resolve(__dirname, "node_modules")],
    },
  },
  plugins: [
    new MinifyPlugin(),
    // {},
    // {
    //   include: "src/*.js",
    // }

    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
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
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-env"],
            presets: ["env"],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              // outputPath: (url, resourcePath, context) => {
              //   const relativePath = path.relative(context, resourcePath);
              //   return `${url}`;
              // }
              outputPath: "images",
               publicPath: "../images",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              publicPath: "../fonts",
            },
          },
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
          chunks: "all",
        },
      },
    },

    minimizer: [
      // new UglifyJsPlugin({
      //   test: /\.js(\?.*)?$/i,

      //   extractComments: "all",
      // }),
      new optimizeCssAssetsPlugin(),
    ],
  },
};