module.exports = {
    /* sass的全局配置 */
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "~@/assets/style/variables.scss";
              `,
            },
        },
    },
    // configureWebpack: {
    //     externals: {
    //         vue: "Vue",
    //         "vue-router": "VueRouter",
    //         vuex: "Vuex",
    //         axios: "axios",
    //         echarts: "echarts",
    //     },
    // },
    // chainWebpack: (config) => {
    //     config.entry.app = ["@babel/polyfill", "./src/main.js"];
    //     config.optimization.minimize(true);
    //     if (process.env.use_analyzer) {
    //         // 代码分析
    //         config
    //             .plugin("webpack-bundle-analyzer")
    //             .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
    //             .end();
    //     }
    // },
    devServer: {
        host: '0.0.0.0',
        port: '8080',
        // https:false,
        open: true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: { //配置跨域
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,//允许跨域
                pathRewrie: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }
        }
    }
};