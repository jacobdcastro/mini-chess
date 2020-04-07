const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const del = require('del');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const cleanBuilds = () => del(['public/', 'build/']);

const transpileTs = () => {
  return tsProject.src().pipe(tsProject()).js.pipe(dest('public/'));
};

// used only for buildtime AFTER successful transpileTs task
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
    .pipe(dest('build/'));
};

exports.clean = cleanBuilds;
exports.transpileTs = series(cleanBuilds, transpileTs);
exports.compileJs = series(cleanBuilds, compileJs);
exports.default = series(cleanBuilds, transpileTs, compileJs);
