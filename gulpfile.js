const { src, dest } = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

const transpileTsJs = () => {
  return tsProject.src().pipe(tsProject()).js.pipe(dest('dist/'));
};

exports.transpileTsJs = transpileTsJs;
exports.default = transpileTsJs;
