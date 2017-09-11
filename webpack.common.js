const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const publicPath = "./";
const glob = require("glob");

module.exports={
	entry:{
		'uikit': glob.sync("./src/js/amc_ui_kit/*.js"),
		'style': "./src/js/style.js"
	},
	plugins:[
		new ExtractTextPlugin({
			filename: "[name].[contenthash].min.css",
			publicPath: publicPath
		}),
		new webpack.optimize.CommonsChunkPlugin({ // Prevent Duplication + keep latest verison when CHUNK HASH
	    	name: ["vendor", "manifest"], // vendor libs + extracted manifest
  			minChunks: Infinity,
	    }),
	    new webpack.HashedModuleIdsPlugin(), // Avoid cache by hashing each modules and inject (assign to) each ID for them - module in module.exports
	    new WebpackChunkHash(), // Hashing with MD5 standard. It was copied by webpack-md5-hash
	    // new ChunkManifestPlugin({ // Each turn will lead new hash and dismiss long-term caching
	    //   filename: "chunk-manifest.json",
	    //   manifestVariable: "webpackManifest",
	    //   inlineManifest: false
	    // }),
	    new HtmlWebpackPlugin({
	    	template: 'pug/index.html',
			// chunksSortMode: 'dependency'
		}),
	 //    new HtmlWebpackPlugin({
		// 	filetype: 'pug'
		// }),
		// new HtmlWebpackPlugin({
		// 	filename: 'index.html'
		// }),
		// new HtmlWebpackPugPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery",
			_: "lodash"
		})
	],
	output:{
		path: path.join(__dirname, '/views'),
		// filename: '[name].bundle.js',
		filename: '[name].[contenthash].js',
		publicPath: publicPath,
		sourceMapFilename: '[name].map'
	},
	resolve:{
		extensions: ['.js','.json'],
		modules:[path.join(__dirname, 'src'),'node_modules'],
		alias:{
			jquery: "jquery/src/jquery"
		}
	},
	module: {
		rules:[
			{
			    test: /\.pug$/,
			    loaders: ['file-loader?name=[path][name].html', 'pug-html-loader?pretty&exports=false']
			},
			{
				test:/\.js$/,
				use: ['babel-loader','source-map-loader'],
				enforce: "pre"
			},
			{
            	test: /\.sass$/,
	            use: ExtractTextPlugin.extract({
	                use: [{
	                    loader: "css-loader",
	                    options: {
	                    	minimize: true || {}
	                    }
	                }, {
	                    loader: "sass-loader"
	                }],
	                // use style-loader in development
	                fallback: "style-loader"
	            })
	        },
			{
				test: /\.(jpg|png|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000
					}
				}
			}
		]
	}
}