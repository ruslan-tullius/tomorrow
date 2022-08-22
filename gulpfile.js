const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('assets/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets'));
});

const bundleSass = () => {
  return gulp.src('./resources/scss/sections/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets'));
};

const devWatch = () => {
  gulp.watch('./resources/scss/sections/*.scss', bundleSass);
};

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;