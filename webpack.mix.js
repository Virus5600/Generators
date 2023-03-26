const mix = require('laravel-mix');
const path = require('path');

console.log(`DirName: ${__dirname}`);
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
	// Password Modules
	.js('src/js/password.js', 'dist/js/password')
	.sass('src/sass/password.scss', 'dist/css/password')
	.sourceMaps()
	.disableNotifications();