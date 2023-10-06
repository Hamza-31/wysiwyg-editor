const path = require('path');
const baseconfig = require('./webpack.config');

module.exports = {
	...baseconfig,
	mode: 'development',
	devtool: 'source-map',
	output: {
		path: path.join(process.cwd(),'dist', 'my-editor'),
		filename: 'shell.js'
	}
}