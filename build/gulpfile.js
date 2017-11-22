var gulp = require('gulp');
var gulp_version_tag = require("gulp-version-tag");
var version = require('gulp-version-number');

gulp.task('ver2', function () {
    return gulp.src("*.js")
        .pipe(gulp_version_tag(__dirname, 'package.json'))
        .pipe(gulp.dest("./dist"));
});

const versionConfig = {
    'value': '%MDS%',
    'append': {
        'key': 'v',
        'to': ['css', 'js'],
    },
};

gulp.task('ver', function () {
    console.log("Ver")
    return gulp.src('*.js')
        .pipe(version(versionConfig))
        .pipe(gulp.dest('build'));
});

gulp.task('default', function () {
    console.log("Starting default task")
    gulp.task('default', ['ver', 'ver2']);

    console.log("Finish")
});