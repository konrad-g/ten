var gulp = require('gulp');

/*
var fs = require("fs");
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var concatJs = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var scss = require("gulp-scss");
var watch = require('gulp-watch');
*/

const webpack = require('webpack-stream');

/*
var OUTPIT_FOLDER_PATH = './dist';
var VIEW_SCRIPTS_PATH = 'src/server/elements/pages/base/views/scripts.hbs';
var VIEW_STYLES_PATH = 'src/server/elements/pages/base/views/styles.hbs';
var TRANSPILE_TYPESCRIPT_PATH = './src/client/';
var TRANSPILE_SCSS_PATH = './src/';

var versionNumber = Math.random().toString(36).substring(8);

// Client imports

var IMPORT_STYLES = [
  "./src/client/app/stylesheets/style.css",
  "./src/client/elements/toast/stylesheets/main.css"
];

var IMPORT_SCRIPTS = [

  // Logic libraries
  "./bower_components/jquery/dist/jquery.min.js",
  "./bower_components/pointer-events-polyfill/dist/pep.min.js",

  // App elements
  "./src/client/elements/toast/Toast.js",

  // Main boot
  "./src/client/app/AppClient.js"
];

gulp.task('clean', function () {
  // Clean output folder
  return gulp.src(OUTPIT_FOLDER_PATH, {read: false})
    .pipe(clean({force: true}));
});

gulp.task('minimize-js', function () {

  gulp.src(IMPORT_SCRIPTS)
    .pipe(concatJs({path: 'scripts-' + versionNumber + '.min.js'}))
    .pipe(uglify())
    .pipe(gulp.dest(OUTPIT_FOLDER_PATH));

});

gulp.task('minimize-css', function () {

  gulp.src(IMPORT_STYLES)
    .pipe(concatCss('styles-' + versionNumber + '.min.css', {rebaseUrls: true}))
    .pipe(cleanCSS({relativeTo: './public/out/', target: './public/out/', rebase: true}))
    .pipe(gulp.dest(OUTPIT_FOLDER_PATH));

});

gulp.task('watch-ts-scss', ['watch-client-ts', 'watch-all-scss']);

// TypeScript

var typescriptProject = typescript.createProject({
  declaration: false,
  target: "ES3",
  removeComments: true,
  emitDecoratorMetadata: false
});
*/

// gulp.task('transpile-client-ts', function () {
//   return gulp.src(TRANSPILE_TYPESCRIPT_PATH + "**/*.ts")
//     .pipe(sourcemaps.init())
//     .pipe(typescriptProject())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(TRANSPILE_TYPESCRIPT_PATH));
// });

// gulp.task('watch-client-ts', ['transpile-client-ts'], function () {
//   gulp.watch(TRANSPILE_TYPESCRIPT_PATH + "**/*.ts", ['transpile-client-ts']);
// });

// // SCSS

// gulp.task('watch-all-scss', function () {
//   // Endless stream mode
//   return watch(TRANSPILE_SCSS_PATH + "**/*.scss", {ignoreInitial: false})
//     .pipe(sourcemaps.init())
//     .pipe(scss({}))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(TRANSPILE_SCSS_PATH));
// });

// gulp.task('transpile-all-scss', function () {
//   return gulp.src(TRANSPILE_SCSS_PATH + "**/*.scss")
//     .pipe(sourcemaps.init())
//     .pipe(scss({}))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest(TRANSPILE_SCSS_PATH));
// });

// // Generating scripts and styles imports

// gulp.task('add-single-imports', function () {

//   // Update scripts import
//   require('fs').writeFileSync(VIEW_SCRIPTS_PATH,
//     "<script src=\"/dist/scripts-" + versionNumber + ".min.js\"></script>");

//   // Update styles import
//   require('fs').writeFileSync(VIEW_STYLES_PATH,
//     "<link rel=\"stylesheet\" href=\"/dist/styles-" + versionNumber + ".min.css\" rel=\"stylesheet\" type=\"text/css\" />");

//   return;
// });

// gulp.task('dev', function () {

//   // Write single imports
//   var fileScriptsContent = "";
//   var fileStylesContent = "";

//   // Add all scripts
//   for (var i = 0; i < IMPORT_SCRIPTS.length; i++) {
//     var script = IMPORT_SCRIPTS[i];
//     script = script.substring(1, script.length);
//     fileScriptsContent += "<script src=\"" + script + "\"></script>" + "\n";
//   }

//   // Add all styles
//   for (var i = 0; i < IMPORT_STYLES.length; i++) {
//     var style = IMPORT_STYLES[i];
//     style = style.substring(1, style.length);
//     fileStylesContent += "<link rel=\"stylesheet\" href=\"" + style + "\" rel=\"stylesheet\" type=\"text/css\" />" + "\n";
//   }

//   // Update scripts import
//   require('fs').writeFileSync(VIEW_SCRIPTS_PATH, fileScriptsContent);

//   // Update styles import
//   require('fs').writeFileSync(VIEW_STYLES_PATH, fileStylesContent);

// });

// /**
//  * Build production project
//  */
// gulp.task('prod', ['clean'], function () {
//   runSequence(
//     'transpile-client-ts', 'minimize-js', 'minimize-css', 'add-single-imports');
// });

gulp.task('compile', function () {
  return gulp.src('src/client/app/AppClient.ts')
    .pipe(webpack({
      config : require('./webpack.config.js')
    }))
    .pipe(gulp.dest('dist/'));
});
