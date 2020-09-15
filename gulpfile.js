const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');

// Transpiling scss into css
gulp.task('sass', () => gulp
  .src('./scss/**/*.scss')
  .pipe($.sass().on('error', $.sass.logError))
  .pipe(
    $.postcss([
      autoprefixer({
        Browserslist: ['> 1%'],
      }),
    ]),
  )
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream()));

// Live reloading server
gulp.task('server', () => {
  browserSync.init({
   server: "./"
});

  // Css files watcher
  gulp.watch([
    './scss/**/*.scss',
  ]).on('change', gulp.series('sass'));

  // HTML & JS files watcher
  gulp.watch([
    '**/*.html',
    '**/*.js',
  ]).on('change', gulp.series(browserSync.reload));
});

gulp.task('default', gulp.series('sass', 'server'));