const path = require('path')

const isProd = ["production", "prod"].includes(process.env.NODE_ENV);

const enabledI18nAutoPlugin = true
const i18nAutoPlugin = require('i18n-auto-webpack/plugin')

const i18nAutoLoaderOptions = {
    watch: true,
    name: 'i18n.t',
    dependency: {
        name: 'i18n',
        value: '@/i18n/index.js'
    },
    transform: true
}


let configureWebpack = {
    cache: {},

    plugins: [],
    module: {
        rules: []
    }
}
let plugins = configureWebpack.plugins


if(enabledI18nAutoPlugin) {
    configureWebpack.module.rules.push({
        test: /\.vue$/,
        /* resourceQuery: /type=template/, */
        enforce: 'post',
        loader: 'i18n-auto-webpack/loader/index',
        options: i18nAutoLoaderOptions,
        exclude: /(node_modules|i18n[\\/]|utils[\\/])/,
        // excludes: path.join(__dirname,'node_modules')
    })
    plugins.push(new i18nAutoPlugin({
        watch: true,
        sourceMap: false
    }))
}



module.exports = {
    configureWebpack,
}
