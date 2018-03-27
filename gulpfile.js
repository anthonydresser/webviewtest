const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsproj = ts.createProject('./tsconfig.json');

gulp.task('compile', () => {
    return tsproj.src()
            .pipe(tsproj())
            .js.pipe(gulp.dest('out'));
});
