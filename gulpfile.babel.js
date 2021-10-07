// import all needed gulp libraries and plugins //
const { dest, series, src } = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

// import supporting libraries and packages //
const del = require('del')

// define paths //
const paths = {
  scripts: {
    src: './lib/*.js',
    dest: './dist'
  }
}

// remove previous build //
export const clean = () => del(['./dist'])

function transpile () {
  return src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(dest(paths.scripts.dest))
}

exports.build = series(clean, transpile)
