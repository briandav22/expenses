//entry point to application ->> output
const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');


module.exports = (env)=>{
	const isProduction = env ==='production';

	
	return {
		mode:'development',
		entry: './src/app.js',
		output: {
			path:path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		watchOptions: {
			poll:true
		},
		module: {
			rules:[{
				loader:'babel-loader',
				test: /\.js$/,
				enforce:"pre",
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: [{
					loader:MiniCssExtractPlugin.loader,
				},
			{loader: "css-loader",
			options:{
			sourceMap:true
		}},
			{loader:"sass-loader",
			options:{
				sourceMap:true
			}
		}
			
			]
			}]
		},
		plugins:[
			new MiniCssExtractPlugin({
			  // Options similar to the same options in webpackOptions.output
			  // both options are optional
			  filename: "styles.css"
			})
		  ],
		devtool: isProduction ? 'source-map':'inline-source-map',
		devServer:{
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback:true,
			publicPath: '/dist/'
		}
	};
};


