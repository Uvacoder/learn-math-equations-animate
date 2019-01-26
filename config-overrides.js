const {
  override,
  fixBabelImports,
  addLessLoader,
  addBundleVisualizer
} = require("customize-cra");

module.exports = override(
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#2f2f2f" }
  })
);
