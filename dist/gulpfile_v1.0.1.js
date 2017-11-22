var gulp = require('gulp');
var gulp_version_tag = require("gulp-version-tag");

gulp.task('ver', function () {
    console.log("Ver")
    return gulp.src("*.js")
        .pipe(gulp_version_tag(__dirname, 'package.json'))
        .pipe(gulp.dest("./dist"));
});

gulp.task('default', function () {
    console.log("Starting default task")
    gulp.task('default', ['ver']);

    console.log("Finish")
});