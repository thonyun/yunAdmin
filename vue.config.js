// const { defineConfig } = require('@vue/cli-service')
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        // 内置的svg处理排除指定目录下的文件
        config.module.rule('svg').exclude.add(resolve('@/assets/icons')).end()

        config.module
            .rule('svg-sprite-loader')
            .test('/\.svg$/')
            .include.add(resolve('@/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
    }
}