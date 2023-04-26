const {
  override,
  fixBabelImports,
  addLessLoader, addDecoratorsLegacy, disableEsLint, addBundleVisualizer, adjustWorkbox, addPostcssPlugins,
} = require("customize-cra");
const autoprefixer = require("autoprefixer");

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
    addPostcssPlugins([
        autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'not ie <= 11'],
        }),
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