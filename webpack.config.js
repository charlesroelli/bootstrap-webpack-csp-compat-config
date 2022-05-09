const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    module: {
	rules: [
	    {
		test: /\.css$/,
		use: [
		    MiniCssExtractPlugin.loader,
		    'css-loader'
		]},
	    {
		mimetype: 'image/svg+xml',
		scheme: 'data',
		type: 'asset/resource',
		generator: {
		    filename: 'icons/[hash].svg'
		}
	    }
	]
    }
};
