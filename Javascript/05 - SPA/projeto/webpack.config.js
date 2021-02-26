const path = require('path')

module.exports = {
    mode: 'development',
    devServer: {
        open: true,
        contentBase: 'dist'
    },
    entry: './src/componentes/lista/listagem-cliente.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    
}