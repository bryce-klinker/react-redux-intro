const ip = require('ip');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function isDev(env) {
  return env === 'dev';
}

module.exports = function(env) {
  return {
    devtool: isDev(env) ? 'source-map' : 'cheap-module-source-map',
    optimization: isDev(env) ? getDevOptimization() : getProdOptimizations(),
    entry: {
      index: './src/index.jsx',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev(env) ? '[name].js' : '[name].[hash].js',
      sourceMapFilename: '[file].map',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
        },
      ],
    },
    plugins: isDev(env) ? getDevPlugins() : getProdPlugins(),
  };
};

function getDevOptimization() {
  return undefined;
}

function getProdOptimizations() {
  return {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  };
}

function getDevPlugins() {
  return [...getBasePlugins()];
}

function getProdPlugins() {
  return [...getBasePlugins()];
}

function getBasePlugins() {
  return [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(`http://${ip.address()}:3000`),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
      filename: 'index.html',
    }),
  ];
}
