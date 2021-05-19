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
};