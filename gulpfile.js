var gulp = require('gulp');
var sass = require('gulp-sass');

function handleError(error) {
    console.log(error.toString())
    this.emit('end')
}

gulp.task('heya', function () {
    console.log('I live! Gulp is alive!');
});

gulp.task('sass', function () {
    return gulp.src('src/scss/app.scss')
        .pipe(sass())
        .on('error', handleError)
        .pipe(gulp.dest('src/css'))
})

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});


gulp.task('default', gulp.series('sass', 'watch'));