require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
  // env: {
    // API_URL: process.env.API_URL
  // }
}

// Whitelisting our env variables
// You might notice that this allows any environment variable to be available to Webpack. If you want to lock this down, we can use the result of dotenv’s .config() method like so:
// const { parsed: localEnv } = require('dotenv').config()
// const webpack = require('webpack')
// module.exports = {
//   webpack: (config) => {
//     config.plugins.push(
//       new webpack.EnvironmentPlugin(localEnv)
//     )
//     return config
//   }
// }