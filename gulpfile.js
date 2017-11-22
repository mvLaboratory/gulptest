var gulp = require('gulp');
var version = require('gulp-version-number');

const versionConfig = {
    'value': '%MDS%',
    'append': {
        'key': 'v',
        'to': ['css', 'js'],
    },
};

gulp.task('versions', function () {
    console.log("vers");
    return gulp.src('*.html')
        .pipe(version(versionConfig))
        .pipe(gulp.dest('build'));
});

gulp.task('default', function () {
    console.log("Starting default tasks");

    gulp.task('default', ['versions']);

    console.log("Finish");
});