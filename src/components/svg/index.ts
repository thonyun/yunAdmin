import SvgIcon from './index.vue'

const componentPlugin = {
    install: function (vue: any, options: any) {
        if (options &&
            options.imports &&
            Array.isArray(options.imports) &&
            options.imports.length > 0) {
            // 按需引入
            const { imports } = options
            
            imports.forEach((name: any) => {
                    require(`@/assets/icons/${name}.svg`)
            })
        } else {
            const ctx = require.context('@/assets/icons', false, /\.svg$/)
            ctx.keys().forEach(path => {
                const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/)
                if (!temp) return
                const name = temp[1]
                require(`@/assets/icons/${name}.svg`)
            })
        }
        vue.component(SvgIcon.name, SvgIcon)
    }
}

export default componentPlugin