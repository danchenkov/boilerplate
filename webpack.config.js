const path = require('path');
const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	performance: {
	  hints: false
	},
	entry: {
		main: './src/main.js',
		vue: './src/vue.js'
	},
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: '[name].js'
	},
	plugins: [
	new webpack.ProvidePlugin({
		'autoprefixer': {},
		'moment': 'moment'
	}),
	// To strip all locales except “en”
    // new MomentLocalesPlugin(),
    // Or: To strip all locales except “en” and “ru”
    // (“en” is built into Moment and can’t be removed)
    new MomentLocalesPlugin({
        localesToKeep: ['ru'],
    }),

	// new MiniCssExtractPlugin({
	// 	filename: isDevelopment ? '[name].css' : '[name].[hash].css',
	// 	chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
	// })
	],
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css']
		// extensions: ['.js', '.jsx']
	},
	externals: {
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		Modernizr: 'modernizr'
	}
};
