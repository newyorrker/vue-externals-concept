const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackCdnPlugin = require('webpack-cdn-plugin');

module.exports = {
  // chainWebpack: config => {
  //   config.merge({
  //     externals: ["vue", "vuex"]
  //   });

  // },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 1000,
        maxSize: 25000,
      }
    },
		plugins: [
      new BundleAnalyzerPlugin(),
      new WebpackCdnPlugin({
        modules: [
          {
            name: 'vue',
            var: 'Vue',
            path: ''
          },
          {
            name: 'vuex',
            var: 'Vuex',
            path: ''
          }
        ]
      })
		]
	}
};

