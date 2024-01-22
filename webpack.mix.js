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
				root: path.resolve(__dirname, 'node_modules'),
			},
			modules: [
				"node_modules",
				path.resolve(__dirname),
			],
		},
		externals: {
			canvg: 'canvg',
		},
		devtool: 'inline-source-map'
	})
	/////////\\\\\\\\\\
	// SASS COMPILER \\
	.sass('src/scss/general.scss', '/resources/css')

	// Style Components
	.sass('src/scss/components/absolute-positions.scss', '/resources/css/components')
	.sass('src/scss/components/button-expansion.scss', '/resources/css/components')

	// Utility Styles
	.sass('src/scss/util/animations.scss', '/resources/css/util')
	.sass('src/scss/util/custom-scrollbar.scss', '/resources/css/util')
	.sass('src/scss/util/custom-switch.scss', '/resources/css/util')
	.sass('src/scss/util/text-counter.scss', '/resources/css/util')
	.sass('src/scss/util/popover.js/popover.scss', '/resources/css/util/popover.js/popover.css')
	.sass('src/scss/util/tutorial.js/tutorial.scss', '/resources/css/util/tutorial.js/tutorial.css')

	// Widgets Styles
	.sass('src/scss/widgets/card-widget.scss', '/resources/css/widgets')

	//////// \\\\\\\\
	// JS COMPILER \\
	.js('src/js/general.js', '/resources/js')
	.copy('src/js/frameless.js', 'public/resources/js')

	// Utility Scripts
	.copy('src/js/util/', 'public/resources/js/util/')

	////////// \\\\\\\\\\
	// MODULE COMPILER \\
	// The Hub Compiler
	.js('src/modules/the-hub/scripts.js', 'resources/modules/the-hub/index.js')
	.sass('src/modules/the-hub/styles.scss', 'resources/modules/the-hub/index.css')
	.copy('src/resources/the-hub/', 'public/resources/modules/the-hub/assets')

	// About Page Compiler
	.copy('src/resources/about/', 'public/resources/modules/about/assets')

	// String Generator Compiler
	.js('src/modules/string-generator/scripts.js', 'resources/modules/string-gen/index.js')
	.sass('src/modules/string-generator/styles.scss', 'resources/modules/string-gen/index.css')
	.copy('src/resources/string-generator/', 'public/resources/modules/string-gen/assets')

	// DTR Generator Compiler
	.js('src/modules/dtr-generator/scripts.js', 'resources/modules/dtr-gen/index.js')
	.sass('src/modules/dtr-generator/styles.scss', 'resources/modules/dtr-gen/index.css')
	.copy('src/modules/dtr-generator/Sample Generated DTR.js', 'public/resources/modules/dtr-gen/Sample Generated DTR.js')
	.copy('src/resources/dtr-generator/', 'public/resources/modules/dtr-gen/assets')

	// DTR Template Generator Compiler
	.js('src/modules/dtr-template-generator/scripts.js', 'resources/modules/dtr-tmp-gen/index.js')
	.sass('src/modules/dtr-template-generator/styles.scss', 'resources/modules/dtr-tmp-gen/index.css')
	.copy('src/resources/dtr-template-generator/', 'public/resources/modules/dtr-tmp-gen/assets')

	// FINAL CONFIGURATIONS
	.setPublicPath("public/")
	.sourceMaps()
	.disableNotifications();
