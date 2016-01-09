module.exports = {
  entry: "./app/app-client.jsx",
  output: {
    filename: "./app/public/bundle.js"
  },
  module: {
        loaders: [{
            exclude: /(node_modules|app-server.js)/,
            loader: 'babel',
            query:
            {
                presets:['es2015', 'react']
            }
        }]
    },
  node: {
    fs: 'empty',
    tls: 'empty'
  }
};