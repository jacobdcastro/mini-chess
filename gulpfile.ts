const { task, src, dest, parallel } = require("gulp");
const babel = require("gulp-babel");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const transpileTypeScript = () => {
	return tsProject
		.src()
		.pipe(tsProject())
		.js.pipe(dest("dist/"));
};

const compileJavaScript = () => {
	return src("src/**/*.js")
		.pipe(babel())
		.pipe(dest("dist/"));
};

exports.transpileTypeScript = transpileTypeScript;
exports.compileJavaScript = compileJavaScript;

exports.default = parallel(transpileTypeScript, compileJavaScript);
