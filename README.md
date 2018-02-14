# simple-webpack-config
A laravel-mix aproach to implement webpack

# Pre-Requisites
Install webpack globally

# Configuration
First initialize npm with
  `npm install`
Then you can run:
`npm run dev` for development 
or `npm run prod` for minified code

The `webpack-files.js` has the routes to the entries and outputs that you spect to get with webpack. Similar to what you would use in laravel.mix:
`mix.js('entry', 'output')`
here you only have to especify it with a json format:
```
{
  input: "path-to-source-file",
  output: "path-to-compiled-file
}
```
