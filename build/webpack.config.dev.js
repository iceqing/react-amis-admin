const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const apiMocker = require("mocker-api");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const ReactRefreshTypeScript = require('react-refresh-typescript');


webpackConfig = {
  mode: "development",
  entry: {
    app: "./src/index.tsx",
    "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
    "json.worker": "monaco-editor/esm/vs/language/json/json.worker",
    "css.worker": "monaco-editor/esm/vs/language/css/css.worker",
    "html.worker": "monaco-editor/esm/vs/language/html/html.worker",
    "ts.worker": "monaco-editor/esm/vs/language/typescript/ts.worker"
  },
  module: {
    rules: [
      {
        test: /froala-editor/,
        parser: {
          amd: false,
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {injectType: "styleTag"}
          },
          "css-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
            options: {injectType: "styleTag"}
          },
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".html"],
    alias: {
      "@": path.resolve(__dirname, "..", "src")
    }
  },
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 4000,
    historyApiFallback: true,
    open: true,
    before(app) {
      apiMocker(app, path.resolve("./mock/index.js"));
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ['app']
    })
  ]
  ,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/'
  }
}

module.exports = webpackConfig;
// 打印每个模块的执行速度
// module.exports = smp.wrap(webpackConfig);

