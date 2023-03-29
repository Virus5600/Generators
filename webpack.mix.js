const mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
		stats: {
			children: true,
		},
		resolve: {
			alias: {
				jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
				jQuery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
				root: path.resolve(__dirname, 'node_modules')
			},
			modules: [
				"node_modules",
				path.resolve(__dirname),
			],
		},
		devtool: 'inline-source-map'
	})
	.js('src/js/util/util.js', 'dist/js/util')
	// String Generator Modules
	.js('src/js/string-generator.js', 'dist/js/string-generator')
	.sass('src/sass/string-generator.scss', 'dist/css/string-generator')
	.sourceMaps()
	.disableNotifications();