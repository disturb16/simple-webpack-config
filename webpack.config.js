const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const files = require('./webpack-files');
const mode = process.argv.slice(2)
console.log(mode)
var configurations = []

var config = {
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }
      }]
  }
};

// recorrer arreglo de archivos
for(let i=0; i < files.length; i++){

  let conf = Object.assign({}, config, {
    entry: files[i].input,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${files[i].output}`
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins: mode === '--debug'? [] : [new UglifyJSPlugin()]
  });
  configurations.push(conf)
}

// Return Array of Configurations
module.exports = configurations;