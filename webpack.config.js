module.exports = {
    module: {
	rules: [
	    { test: /\.css$/, use: 'css-loader' },
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
