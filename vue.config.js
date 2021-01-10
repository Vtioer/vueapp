module.exports = {
    /* sass的全局配置 */
    css: {
        loaderOptions: {
            sass: {
                prependData: `
            @import "~@/assets/style/variables.scss";
          `
            }
        },
    },
}