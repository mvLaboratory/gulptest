var gulp = require('gulp');
var gulp_version_tag = require("gulp-version-tag");

gulp.task('ver', function () {
    return gulp.src("./src/*.js")
        .pipe(gulp-version-tag(__dirname, 'package.json'))
        .pipe(gulp.dest("./dist"));
});

gulp.task('default', function() {
    gulp.task('default', ['ver']);
});