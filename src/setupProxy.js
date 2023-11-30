const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/restaurants',  // Your API path
    createProxyMiddleware({
      target: 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING',  // Your API endpoint
      changeOrigin: true,
    })
  );
};
