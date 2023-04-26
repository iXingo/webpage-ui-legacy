const {
  override,
  fixBabelImports,
  addLessLoader, addDecoratorsLegacy, disableEsLint, addBundleVisualizer, adjustWorkbox, addPostcssPlugins,
} = require("customize-cra");

module.exports = override(
    fixBabelImports("import", {
      libraryName: "antd",
        libraryDirectory: "es",
        style: 'less'
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
          "@layout-body-background": "##FFFFFF",
          "@layout-header-background": "#007BFF",
          "@layout-footer-background": "#FFFFFF"
        },
    }),
    // 添加 PostCSS 插件
    addPostcssPlugins([
        require('autoprefixer')({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 9', 'iOS >= 8', 'Android >= 4']
        })
    ]),

    (config) => {
        config.module.rules.push({
            test: /\.(js|mjs|jsx)$/,
            resolve: {
                fullySpecified: false
            }
        });

        return config;
    }
);