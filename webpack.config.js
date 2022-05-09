const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    module: {
	rules: [
	    {
		test: /\.scss$/,
		use: [
		    MiniCssExtractPlugin.loader,
		    'css-loader',
		    {
			loader: 'postcss-loader',
			options: {
			    postcssOptions: {
				plugins: function () {
				    return [
					require('autoprefixer')
				    ];
				}
			    }
			}
		    },
		    'sass-loader'
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
