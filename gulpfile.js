var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function() {

  return gulp.src(['typescript/app.module.ts', 'typescript/**/*.ts'])
    .pipe(ts({
      noImplicitAny: true,
      out: 'angular-socializer.js'
    }))
    .pipe(gulp.dest('dist/'));

});

var watcher = gulp.watch('typescript/**/*.ts', ['default']);
