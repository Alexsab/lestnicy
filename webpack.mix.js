let mix = require('laravel-mix');
require('mix-tailwindcss');
mix
	.js('src/js/app.js', 'dist/js/scripts.js')
	.sass('src/scss/app.scss', 'dist/css/styles.css')
	.tailwind();



if (mix.inProduction()) {
	mix.version();
} else {
	mix.sourceMaps().webpackConfig({ devtool: 'inline-source-map' });
	mix.browserSync({
		server: {
			baseDir: "./dist",
		},
		files: ['dist/**/*.html', 'dist/css/styles.css', 'dist/js/scripts.js'],
		notify: false
	});
}

mix.disableSuccessNotifications();