var gulp = require('gulp');
var version = require('gulp-version-number');

const versionConfig = {
    'value': '%DT%',
    'append': {
        'key': 'ver',
        'to': ['js'],
    },
    'output': {
        'file': 'version.json'
    }
};

gulp.task('versions', function () {
    return gulp.src('*.asp')
        .pipe(version(versionConfig))
        .pipe(gulp.dest('build'));
});

gulp.task('default', function () {
    gulp.task('default', ['versions']);
});