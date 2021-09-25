var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var del = require('del');

// delete all previously-created vendor css and js files //
gulp.task('cleanFolders', () => {
	return del([
		'./src/assets/public/*', './dist/*'
	]);
});
//

// primary compile //
gulp.task("primaryCompile", function () {
	return gulp.src("lib/index.js")
	.pipe(sourcemaps.init())
	.pipe(babel({presets: ["@babel/preset-env"]}))
	.pipe(concat("all.js"))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("dist"));
  });
//


gulp.task('default', gulp.series('cleanFolders', 'primaryCompile'));