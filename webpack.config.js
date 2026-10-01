const { merge } = require("webpack-merge");
  const singleSpaDefaults = require("webpack-config-single-spa-ts");
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  const { DefinePlugin } = require("webpack");

  module.exports = (webpackConfigEnv, argv) => {
    const orgName = "udistrital";
    const defaultConfig = singleSpaDefaults({
      orgName,
      projectName: "root-config",
      webpackConfigEnv,
      argv,
      disableHtmlGeneration: true,
      outputSystemJS: true,
    });

    return merge(defaultConfig, {
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: "src/index.ejs",
          templateParameters: {
            isProd: webpackConfigEnv && webpackConfigEnv.isProd,
            isDev: webpackConfigEnv && webpackConfigEnv.isDev,
            isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
            orgName,
          },
          favicon: "./src/favicon.ico",
        }),
        new DefinePlugin({
          isProd: webpackConfigEnv && webpackConfigEnv.isProd,
          isDev: webpackConfigEnv && webpackConfigEnv.isDev,
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
        }),
      ],
    });
  };