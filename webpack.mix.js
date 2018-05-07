let mix = require('laravel-mix');
const StyleLintPlugin = require('stylelint-webpack-plugin');

mix
  .js('src/index.js', 'dist/cookie-consent-box.js')
  .sass('src/index.scss', 'dist/cookie-consent-box.css')
  .webpackConfig({
  module: {
    rules: [
      {
        test: /.(vue|jsx|js)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          cache: true,
          configFile: '.eslintrc',
        },
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({ lintDirtyModulesOnly: !mix.inProduction() }),
  ],
});