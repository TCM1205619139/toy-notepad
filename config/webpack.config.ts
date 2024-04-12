const { resolve } = require('path')
const ProgressPlugin = require('progress-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const createHtmlTemplate = (title: string, filename: string) => {
  return new HtmlWebpackPlugin({
    title: title,
    hash: true,
    cache: true,
    inject: 'body',
    filename: `./html/${filename}.html`,
    template: resolve(__dirname, '../public/template.html'),
    appMountId: 'app',
    chunks: [`${filename}`]
  })
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    background: resolve(__dirname, '../src/modules/background'),
    popup: resolve(__dirname, '../src/modules/popup'),
    option: resolve(__dirname, '../src/modules/option'),
    content: resolve(__dirname, '../src/modules/content')
  },
  output: {
    path: resolve(__dirname, '../build'),
    publicPath: '../',
    // filename: (pathData: any) => pathData.chunk.name === 'background' ? '[name].js' : 'js/[name].js',
    filename: 'js/[name].js',
    library: '[name]'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.d.ts'],
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  optimization: {},
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env'
                  ]
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env'
                  ]
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: resolve(__dirname, '../public/manifest.json'), to: resolve(__dirname, '../build') }
      ]
    }),
    // createHtmlTemplate('background', 'background'),
    createHtmlTemplate('popup', 'popup'),
    createHtmlTemplate('option', 'option')
  ]
}
