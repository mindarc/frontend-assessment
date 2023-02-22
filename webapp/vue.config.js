const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')
    
    config.module
    .rule('vue')
    .use('vue-loader')
    .tap((options) => {
      return {
        ...options,
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      }
    })
    
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("stylus").oneOf(type))
    );
  },
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/imports.styl")],
    });
}
