#!/usr/bin/env node
const React = require('react');
const { render } = require('ink');
const importJsx = require('import-jsx');
// import meow from "meow";

const App = importJsx('./components/App');

// const cli = meow(`
// 	Usage
// 	  $ cli-chess

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ cli-chess --name=Jane
// 	  Hello, Jane
// `);

render(React.createElement(App));
