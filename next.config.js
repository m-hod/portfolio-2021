const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: (config) => {
    // config.plugins.push(
    //   new CopyWebpackPlugin({
    //     patterns: [
    //       {
    //         from: './node_modules/deviceful/public',
    //         to: './public',
    //       },
    //     ],
    //   })
    // );
    return config;
  },
};
