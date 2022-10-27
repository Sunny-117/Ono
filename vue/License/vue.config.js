module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  lintOnSave: false,
};