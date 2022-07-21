# bootstrap-webpack-csp-compat-config
A sample config of webpack 5 and bootstrap 5 compatible with strict CSP.

## Summary

Bootstrap 5.2 needs a tweak to work with a strict CSP, as it includes inline
SVGs in its CSS.  This sample configuration repo uses Webpack asset modules
to extract these SVGs to their own files.  These can then be served as any
other static files.

## The minimal configuration

```js
// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        mimetype: 'image/svg+xml',
        scheme: 'data',
        type: 'asset/resource',
        generator: {
          filename: 'icons/[hash].svg'
        }
      }
    ]
  }
};
```

## Running example

https://charlesroelli.github.io/bootstrap-webpack-csp-compat-config/

## Usage

```
yarn && yarn build
```
