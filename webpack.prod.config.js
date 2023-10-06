const path = require('path');
const baseconfig = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	...baseconfig,
	output: {
		path: path.join(process.cwd(),'dist', 'my-editor'),
		filename: 'main.js'
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns:[
				{
					context: path.join(process.cwd(),'src', 'electron'),
					from:'package.json'
				}
			]
		})
	]
}