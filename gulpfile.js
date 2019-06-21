var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//script paths
var jsFiles = ['js/app/utils/*.js',
               'js/app/*.js',
               'js/app/service/*.js',
               'js/app/controller/*.js',
               'js/app/directive/*.js'
              ],
    jsDest = 'dist';

function vendor() {
  try {
    indexHTML();
    vendorJs();
  } catch(e) {
    console.log(e);
  } finally {
    try {
      vendorCss();
    } catch(e) {
      console.log(e);
    }
  }
}

function indexHTML() {
  return gulp.src(['index.html'])
  .pipe(gulp.dest(jsDest));
}

function vendorJs() {
  return gulp.src([
  'node_modules/angular/angular.js',
  'js/angular-ui-router_1.js',
  'node_modules/jquery/dist/jquery.js',
  'node_modules/bootstrap/dist/js/bootstrap.js'
  ]).pipe(concat('vendor.js'))
  .pipe(gulp.dest(jsDest))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min'}))
  .pipe(gulp.dest(jsDest));
}

function vendorCss() {
  return gulp.src([
  'node_modules/bootstrap/dist/css/bootstrap.css'
  ]).pipe(concat('main.css'))
  // .pipe(gulp.dest(jsDest))
  // .pipe(uglify())
  // .pipe(rename({ suffix: '.min'}))
  .pipe(gulp.dest(jsDest));
}

function scripts() {
    if(scripts.rebuild)console.log('rebuild...');
    vendor();
    return gulp.src(jsFiles)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest(jsDest));
}

scripts.rebuild = false;

gulp.task('scripts', scripts);

// gulp.watch('js/app/**/*.js').on('change', function(event) {
//   console.log('change file: ', event);
//   scripts.rebuild = true;
//   scripts();
// });