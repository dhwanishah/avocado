var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify')

var inputSource = {
	'scss': 'source/scss/**/*.scss',
	'js': 'source/js/**/*.js'
};

var outputBuild = {
	'css': 'public/css',
	'js': 'public/js'
};


gulp.task('default', ['copyNormalize', 'watch']);

gulp.task('copyNormalize', function() {
	gulp.src('node_modules/normalize.css/normalize.css').pipe(gulp.dest('public/css'));
	console.log("Updated normalize to the latest release.");
});

gulp.task('build-scss-to-css', function() {
	return gulp.src(inputSource.scss)
											.pipe(sourcemaps.init())
												.pipe(sass())
											.pipe(sourcemaps.write())
											.pipe(gulp.dest(outputBuild.css));

});

gulp.task('build-js', function() {
	return gulp.src(inputSource.js)
										.pipe(sourcemaps.init())
											.pipe(concat('bundle.js'))
											.pipe(uglify())
										.pipe(sourcemaps.write())
										.pipe(gulp.dest(outputBuild.js));

});

gulp.task('jshintify', function() {
	return gulp.src(inputSource.js)
										.pipe(jshint())
										.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	gulp.watch(inputSource.js, ['jshintify', 'build-js']);
	gulp.watch(inputSource.scss, ['build-scss-to-css']);
});