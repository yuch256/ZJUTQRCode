const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(__dirname)
console.log(process.env.NODE_ENV)
console.log(process.env.npm_package_name)

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV) {
  throw new Error(
    'The NODE_ENV environment variable is required but was not specified.'
  );
}

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())

const isEnvDevelopment = webpackEnv === 'development'
const isEnvProduction = webpackEnv === 'production'

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(appDirectory(), ),
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            // name就是原始名称,hash使用的是MD5算法,ext就是后缀
            name: "[name]_[hash].[ext]",
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(appDirectory(), ".")
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"), // dist目录开启服务器
    compress: true, // 是否使用gzip压缩
    port: 9000, // 端口号
    open: true, // 自动打开网页
  },
};
