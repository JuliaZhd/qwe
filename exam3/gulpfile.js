var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    sync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('assets/scss/*.+(scss|sass)')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('assets/css'))
        .pipe(sync.reload({
            stream: true
        }))
});

gulp.task('just-reload', function () {
    sync.reload();
});

gulp.task('sync', function () {
    sync({
        server: {
            baseDir: 'assets'
        }
    });
});


gulp.task('watch', ['sync', 'sass'], function () {
    gulp.watch('assets/scss/*.+(scss|sass)', ['sass']);
    gulp.watch('assets/index.html', ['just-reload']);
    gulp.watch('assets/js/main.js', ['just-reload']);
});