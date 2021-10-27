module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://172.21.129.73:8080',
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/': ''
        // }
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      },
    },
  },
};
