module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    output: {
        filename: "transformed.js",
        path: __dirname + '/build'
    }
}