const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'node_modules/deviceful/public',
            to: 'public',
          },
        ],
      })
    );
    // config.module.rules.push({
    //   test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    //   loader: 'file-loader',
    //   options: {
    //     name: 'public/media/[name].[ext]',
    //     publicPath: (url) => url.replace(/public/, ''),
    //   },
    // });
    return config;
  },
};
