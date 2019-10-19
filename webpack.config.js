const path = require("path");
const webpack = require("webpack");
const isDevelopment = process.env.NODE_ENV !== "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
	mode: isDevelopment ? "development" : "production",
	devServer: {
		port: 5005,
		contentBase: "./",
		watchOptions: {
			poll: true
		}
	},
	entry: {
		main: "./src/main.js",
		vue: "./src/vue.js"
	},
	output: {
		path: path.resolve(__dirname, "assets"),
		filename: "[name].js"
	},
	plugins: [
		new webpack.ProvidePlugin({
			autoprefixer: {},
			moment: "moment"
		}),
		// To strip all locales except “en”
		// new MomentLocalesPlugin(),
		// Or: To strip all locales except “en” and “ru”
		// (“en” is built into Moment and can’t be removed)
		new MomentLocalesPlugin({
			localesToKeep: ["ru"]
		}),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? "[name].css" : "[name].[hash].css",
			chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.module\.s(a|c)ss$/,
				loader: [
					isDevelopment
						? "style-loader"
						: MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[name]__[local]___[hash:base64:5]",
							camelCase: true,
							sourceMap: isDevelopment
						}
					},
					{
						loader: "postcss-loader", // Run postcss actions
						options: {
							plugins: function() {
								// postcss plugins, can be exported to postcss.config.js
								return [require("autoprefixer")];
							}
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: isDevelopment
						}
					}
				]
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				loader: [
					isDevelopment
						? "style-loader"
						: MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: isDevelopment
						}
					}
				]
			},
			{
				test: /\.css$/,
				loader: [
					isDevelopment
						? "style-loader"
						: MiniCssExtractPlugin.loader,
					"css-loader"
				]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".scss", ".css"]
	},
	externals: {
		Modernizr: "modernizr"
	}
};
