module.exports = {
    devServer: {
        port: 8001,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:9999',
                changeOrigin: true
            }
        }
    }
}
