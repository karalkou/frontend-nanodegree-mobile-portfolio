const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('minifyImg', function(){
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('minifyViewsImg', function(){
    return gulp.src('views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('default', ['minifyImg', 'minifyViewsImg']);