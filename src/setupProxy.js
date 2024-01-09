const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/complete/search",
    createProxyMiddleware({
      target: "http://suggestqueries.google.com",
      changeOrigin: true,
    })
  );
};
