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
	.copy('src/js/*(!frameless.js)*', 'public/resources/js/', false)
	.copy('src/css/', 'public/resources/css/', false)
	.copy('src/resources/', 'public/resources/', false)
	// Landing Page Modules
	.js('src/modules/scripts.js', '/resources/libs.js')
	.sass('src/modules/styles.scss', '/resources/libs.js')
	// String Generator Modules
	.js('src/modules/string-generator/scripts.js', 'String Generator/scripts/libs.js')
	.sass('src/modules/string-generator/styles.scss', 'String Generator/styles/libs.css')
	.setPublicPath("public/")
	.sourceMaps()
	.disableNotifications();