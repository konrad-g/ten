const gulp = require('gulp');
const fs = require("fs");
const clean = require('gulp-clean');
const webpack = require('webpack-stream');

const OUTPIT_FOLDER_PATH = './dist';
const VIEW_SCRIPTS_PATH = 'src/server/elements/pages/base/views/scripts.hbs';
const VIEW_STYLES_PATH = 'src/server/elements/pages/base/views/styles.hbs';

const versionNumber = Math.random().toString(36).substring(8);

gulp.task('clean', () => {
  // Clean output folder
  return gulp.src(OUTPIT_FOLDER_PATH, { read: false, allowEmpty: true })
    .pipe(clean({force: true}));
});

gulp.task('compile-client', () => {
  return gulp.src('src/client/app/AppClient.ts')
    .pipe(webpack({
      config: require('./webpack.config.js'),
    }))
    .pipe(gulp.dest(OUTPIT_FOLDER_PATH + '/'));
});

// Generate scripts and styles imports
gulp.task('add-imports', (done) => {

  fs.renameSync(OUTPIT_FOLDER_PATH + '/main.js', OUTPIT_FOLDER_PATH + '/scripts-' + versionNumber + '.min.js')
  fs.renameSync(OUTPIT_FOLDER_PATH + '/main.css', OUTPIT_FOLDER_PATH + '/styles-' + versionNumber + '.min.css')

  // Update scripts import
  fs.writeFileSync(VIEW_SCRIPTS_PATH,
    "<script src=\"/dist/scripts-" + versionNumber + ".min.js\"></script>");

  // Update styles import
  fs.writeFileSync(VIEW_STYLES_PATH,
    "<link rel=\"stylesheet\" href=\"/dist/styles-" + versionNumber + ".min.css\" rel=\"stylesheet\" type=\"text/css\" />")

  done()
});

gulp.task('build-client', gulp.series('clean', 'compile-client', 'add-imports')) 
