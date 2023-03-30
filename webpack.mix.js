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
	.copy('src/js/', 'public/resource/js/', false)
	// String Generator Modules
	.js('src/modules/string-generator/scripts.js', 'String Generator/scripts/libs.js')
	.sass('src/modules/string-generator/styles.scss', 'String Generator/styles/libs.css')
	.setPublicPath("public/")
	.sourceMaps()
	.disableNotifications();