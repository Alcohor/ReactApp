const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/yyt', {
        target: 'https://shop.m.yinyuetai.com',
        changeOrigin: true,
        pathRewrite: {
            '^/yyt': ''
        }
    }))
}