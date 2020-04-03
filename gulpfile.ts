const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const transpileTsJs = () => {
  return tsProject.src().pipe(tsProject()).js.pipe(dest('public/'));
};

// used only for buildtime
const compileJs = () => {
  return src('public/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env', '@babel/preset-react'] }))
    .pipe(
      minify({
        noSource: true,
        ext: {
          min: '.js',
        },
      })
    )
    .pipe(dest('build'));
};

exports.transpileTsJs = transpileTsJs;
exports.compileJs = compileJs;
exports.default = series(transpileTsJs, compileJs);
