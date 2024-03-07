# Configure Webpack + Bavel

1. Install: webpack
   `yarn add webpack webpack-cli`
2. Create the file `webpack.config.js`

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regex of files to read
        exclude: /node_modules/, // regex of files to ignore
        use: {
          loader: "babel-loader", // use Babel to transform ES6 to ES5
        },
      },
    ],
  },
};
```

3. Install: babel
   `yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader`
4. create a file `.babelrc`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

5. Install Loaders for CSS
   `yarn add style-loader css-loader`
6. Add in `webpack.config.js` the Loaders for CSS in `rules:[]`
   ```javascript
     {
       test: /\.css$/,
       use: ["style-loader", "css-loader"],
     },
   ```
7. Install html plugin and loader
   `yarn add html-loader html-webpack-plugin`
8. Add in `webpack.config.js` the Loader for HTML in `rules:[]` and the plugin in `plugins:[]`

   ```javascript
     {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
   ```

   ```javascript
   plugins: [
     new HtmlWebpackPlugin({
       template: "./index.html",
     }),
   ],
   ```
