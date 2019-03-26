module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://api.douban.com/v2/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}